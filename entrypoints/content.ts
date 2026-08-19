export default defineContentScript({
  matches: [
    "https://cses.fi/problemset/task/*",
    "https://cses.fi/problemset/result/*",
    "https://cses.fi/problemset/submit/*",
    "https://cses.fi/problemset/",
    "https://cses.fi/problemset",
    "https://cses.fi/problemset/list/",
    "https://cses.fi/problemset/list",
  ],
  async main() {
    // Handle task pages (hints) — NOT submit pages
    const taskMatch = !window.location.pathname.includes("/submit/") &&
      window.location.pathname.match(/task\/(\d+)/);
    if (taskMatch) {
      const problemId: string = taskMatch[1];
      console.log("CSES Problem ID:", problemId);

      const insertRootIfReady = (): boolean => {
        const headings = document.querySelectorAll<HTMLHeadingElement>("h4");
        let submissionsHeading: HTMLHeadingElement | null = null;

        for (const h of headings) {
          if (h.textContent?.trim() === "Your submissions") {
            submissionsHeading = h;
            break;
          }
        }

        if (submissionsHeading) {
          if (!document.getElementById("cses-hints-root")) {
            const root = document.createElement("div");
            root.id = "cses-hints-root";
            root.dataset.problemId = problemId;
            submissionsHeading.parentNode?.insertBefore(root, submissionsHeading);
          }
          return true;
        }
        return false;
      };

      if (!insertRootIfReady()) {
        const observer = new MutationObserver(() => {
          if (insertRootIfReady()) {
            observer.disconnect();
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }
    }

    // Handle result pages (submit solution button)
    const resultMatch = window.location.pathname.match(/result\/(\d+)/);
    if (resultMatch) {
      const insertSubmitButton = (): boolean => {
        const summaryTable = document.querySelector("table.summary-table");

        if (summaryTable) {
          if (!document.getElementById("cses-submit-root")) {
            const root = document.createElement("div");
            root.id = "cses-submit-root";

            // Insert after the summary table
            summaryTable.parentNode?.insertBefore(root, summaryTable.nextSibling);
          }
          return true;
        }
        return false;
      };

      if (!insertSubmitButton()) {
        const observer = new MutationObserver(() => {
          if (insertSubmitButton()) {
            observer.disconnect();
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }
    }
    // Handle problemset list page (notes buttons)
    const isListPage =
      window.location.pathname === "/problemset/" ||
      window.location.pathname === "/problemset" ||
      window.location.pathname === "/problemset/list/" ||
      window.location.pathname === "/problemset/list";

    if (isListPage) {
      const { createNoteButton } = await import("@/components/NoteButton");

      const injectNoteButtons = async () => {
        const items = document.querySelectorAll<HTMLLIElement>("li.task");
        if (items.length === 0) return;

        const allStorage = await chrome.storage.local.get(null);

        for (const li of items) {
          const link = li.querySelector<HTMLAnchorElement>("a[href]");
          if (!link) continue;
          const match = link.getAttribute("href")?.match(/\/task\/(\d+)/);
          if (!match) continue;
          const problemId = match[1];
          if (li.querySelector(`[data-cses-note-btn="${problemId}"]`)) continue;

          const hasNote = !!(allStorage[`cses_note_${problemId}`] as string)?.trim();
          const scoreSpan = li.querySelector("span.task-score");
          const btn = createNoteButton(problemId, hasNote, scoreSpan);

          if (scoreSpan) {
            scoreSpan.insertAdjacentElement("afterend", btn);
          } else {
            li.appendChild(btn);
          }
        }
      };

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectNoteButtons);
      } else {
        await injectNoteButtons();
      }
    }
  },
});

import "./content/main";
