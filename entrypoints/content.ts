export default defineContentScript({
  matches: [
    "https://cses.fi/problemset/task/*",
    "https://cses.fi/problemset/result/*",
    "https://cses.fi/problemset/submit/*",
  ],
  main() {
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
  },
});

import "./content/main";
