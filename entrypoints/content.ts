export default defineContentScript({
  matches: ["https://cses.fi/problemset/task/*"],

  main() {
    const match = window.location.pathname.match(/task\/(\d+)/);
    if (!match) return;

    const problemId: string = match[1];
    console.log("CSES Problem ID:", problemId);

    const insertRootIfReady = (): boolean => {
      // Find the "Your submissions" heading (h4)
      const headings =
        document.querySelectorAll<HTMLHeadingElement>("h4");

      let submissionsHeading: HTMLHeadingElement | null = null;

      for (const h of headings) {
        if (h.textContent?.trim() === "Your submissions") {
          submissionsHeading = h;
          break;
        }
      }

      if (submissionsHeading) {
        // Insert only once
        if (!document.getElementById("cses-hints-root")) {
          const root = document.createElement("div");
          root.id = "cses-hints-root";
          root.dataset.problemId = problemId;

          // Insert before "Your submissions"
          submissionsHeading.parentNode?.insertBefore(
            root,
            submissionsHeading
          );

          // React app will be mounted by direct import below
        }
        return true;
      }

      return false;
    };

    // Try immediately, otherwise observe DOM changes
    if (!insertRootIfReady()) {
      const observer = new MutationObserver(() => {
        if (insertRootIfReady()) {
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
  },
});

// Import React entrypoint to mount app
import "./content/main";

