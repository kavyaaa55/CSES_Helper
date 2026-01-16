import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Wait for the root div to exist, then mount React
function mountReactApp() {
  const rootDiv = document.getElementById("cses-hints-root");
  const match = window.location.pathname.match(/task\/(\d+)/);
  const problemId = match && match[1];
  if (rootDiv && problemId) {
    createRoot(rootDiv).render(<App problemId={problemId} />);
  }
}

// Try immediately, then observe for the div if not found
if (!document.getElementById("cses-hints-root")) {
  const observer = new MutationObserver(() => {
    if (document.getElementById("cses-hints-root")) {
      observer.disconnect();
      mountReactApp();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
} else {
  mountReactApp();
}