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

      const injectSortButtons = () => {
        const isDark = getComputedStyle(document.body).backgroundColor !== "rgb(255, 255, 255)";

        // Each section is an <h2> followed by a <ul class="task-list">
        const headings = document.querySelectorAll<HTMLHeadingElement>("h2");
        for (const h2 of headings) {
          if (h2.querySelector("[data-cses-sort-btn]")) continue;
          const ul = h2.nextElementSibling as HTMLUListElement | null;
          if (!ul || !ul.classList.contains("task-list")) continue;
          // Skip the General section — it has no sortable tasks
          if (h2.textContent?.trim() === "General") continue;

          // Make the heading a flex row so the button floats right
          h2.style.cssText += "display:flex; align-items:center; justify-content:space-between;";

          // State: null = original, "asc" = ascending, "desc" = descending
          let sortState: null | "asc" | "desc" = null;
          // Store original order for reset
          const originalOrder = Array.from(ul.querySelectorAll<HTMLLIElement>("li.task"));

          const sortBtn = document.createElement("button");
          sortBtn.setAttribute("data-cses-sort-btn", "1");
          sortBtn.title = "Sort by solved count";
          sortBtn.style.cssText = `
            font-size: 11px;
            font-family: inherit;
            padding: 2px 8px;
            border-radius: 4px;
            border: 1px solid ${isDark ? "#555" : "#bbb"};
            background: ${isDark ? "#2a2a2a" : "#f0f0f0"};
            color: ${isDark ? "#ccc" : "#333"};
            cursor: pointer;
            white-space: nowrap;
            flex-shrink: 0;
            line-height: 1.4;
          `;
          sortBtn.textContent = "Sort ↕";

          const getSolvedCount = (li: HTMLLIElement): number => {
            const detail = li.querySelector(".detail")?.textContent?.trim() ?? "";
            // Format is "175297 / 183122" — first number is solved count
            const num = parseInt(detail.replace(/,/g, "").split("/")[0].trim(), 10);
            return isNaN(num) ? 0 : num;
          };

          const applySort = (order: null | "asc" | "desc") => {
            let items: HTMLLIElement[];
            if (order === null) {
              items = originalOrder;
              sortBtn.textContent = "Sort ↕";
            } else {
              items = [...originalOrder].sort((a, b) => {
                const diff = getSolvedCount(a) - getSolvedCount(b);
                return order === "asc" ? diff : -diff;
              });
              sortBtn.textContent = order === "asc" ? "Sort ↑" : "Sort ↓";
            }
            // Re-append in sorted order (non-task items like text nodes stay)
            for (const li of items) ul.appendChild(li);
          };

          sortBtn.addEventListener("click", () => {
            if (sortState === null) sortState = "desc";
            else if (sortState === "desc") sortState = "asc";
            else sortState = null;
            applySort(sortState);
          });

          h2.appendChild(sortBtn);
        }
      };

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", async () => {
          await injectNoteButtons();
          injectSortButtons();
        });
      } else {
        await injectNoteButtons();
        injectSortButtons();
      }
    }
  },
});

import "./content/main";
