import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import SubmitSolution from "@/components/Submitsolution";
import CodeEditor from "@/components/CodeEditor";

// ── Hints panel ────────────────────────────────────────────────────────────────
// Mounted into #cses-hints-root which the content script injects before "Your submissions"

function mountHintsApp() {
  const rootDiv = document.getElementById("cses-hints-root");
  const match = window.location.pathname.match(/task\/(\d+)/);
  const problemId = match?.[1];
  if (rootDiv && problemId) {
    createRoot(rootDiv).render(<App problemId={problemId} />);
  }
}

// ── Submit / Publish button ─────────────────────────────────────────────────────
// Mounted into #cses-submit-root on result pages

function mountSubmitSolution() {
  const rootDiv = document.getElementById("cses-submit-root");
  if (rootDiv) {
    createRoot(rootDiv).render(<SubmitSolution />);
  }
}

// ── Code editor ────────────────────────────────────────────────────────────────
// Adds a textarea below the file upload row — both options stay available

function mountCodeEditor() {
  if (document.getElementById("cses-editor-root")) return;

  const fileInput = document.querySelector('input[type="file"]');
  if (!fileInput) {
    console.log("❌ [CSES Editor] file input not found");
    return;
  }

  console.log("✅ [CSES Editor] mounting...");

  // Find the language <p> row (contains the #lang select)
  const langSelect = document.getElementById("lang");
  const langRow = langSelect?.closest("p");

  // Insert the editor root after the file input row
  const fileInputWrapper = fileInput.closest("p");
  const insertAfter = fileInputWrapper ?? fileInput;

  const editorRoot = document.createElement("div");
  editorRoot.id = "cses-editor-root";
  insertAfter.parentNode?.insertBefore(editorRoot, insertAfter.nextSibling);

  // Move the language row to sit above the textarea (inside editor root's parent, just before it)
  if (langRow && langRow.parentNode) {
    langRow.parentNode.removeChild(langRow);
    editorRoot.parentNode?.insertBefore(langRow, editorRoot);
  }

  createRoot(editorRoot).render(<CodeEditor />);
}

// ── Task pages: hints ──────────────────────────────────────────────────────────
if (document.getElementById("cses-hints-root")) {
  mountHintsApp();
} else {
  const observer = new MutationObserver(() => {
    if (document.getElementById("cses-hints-root")) {
      observer.disconnect();
      mountHintsApp();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// ── Result pages: publish button ───────────────────────────────────────────────
if (window.location.pathname.match(/result\/(\d+)/)) {
  if (document.getElementById("cses-submit-root")) {
    mountSubmitSolution();
  } else {
    const observer = new MutationObserver(() => {
      if (document.getElementById("cses-submit-root")) {
        observer.disconnect();
        mountSubmitSolution();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

// ── Submit pages: code editor ──────────────────────────────────────────────────
if (window.location.pathname.includes("/problemset/submit/")) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountCodeEditor);
  } else {
    mountCodeEditor();
  }
}
