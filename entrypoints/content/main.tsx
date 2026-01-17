import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import SubmitSolution from "@/components/Submitsolution";

// Hints panel mount karta hai (task pages ke liye)
function mountReactApp() {
  const rootDiv = document.getElementById("cses-hints-root");
  const match = window.location.pathname.match(/task\/(\d+)/);
  const problemId = match && match[1];
  if (rootDiv && problemId) {
    createRoot(rootDiv).render(<App problemId={problemId} />);
  }
}

// Submit button mount karta hai (result pages ke liye)
function mountSubmitSolution() {
  const rootDiv = document.getElementById("cses-submit-root");
  if (rootDiv) {
    createRoot(rootDiv).render(<SubmitSolution />);
  }
}

// Task pages ke liye observer
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

// Result pages ke liye observer
if (window.location.pathname.match(/result\/(\d+)/)) {
  if (!document.getElementById("cses-submit-root")) {
    const observer = new MutationObserver(() => {
      if (document.getElementById("cses-submit-root")) {
        observer.disconnect();
        mountSubmitSolution();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    mountSubmitSolution();
  }
}
