/**
 * Creates and manages the pencil note button + popup for a single problem.
 * Uses chrome.storage.local keyed by problem ID.
 * Pure vanilla DOM — no React needed since we're injecting into CSES's own list.
 */

const STORAGE_KEY_PREFIX = "cses_note_";

function getNoteKey(problemId: string) {
  return `${STORAGE_KEY_PREFIX}${problemId}`;
}

async function loadNote(problemId: string): Promise<string> {
  const key = getNoteKey(problemId);
  const result = await chrome.storage.local.get(key);
  return (result[key] as string) || "";
}

async function saveNote(problemId: string, text: string): Promise<void> {
  await chrome.storage.local.set({ [getNoteKey(problemId)]: text });
}

/** Tracks the currently open popup so we can close it when opening another */
let activePopup: HTMLElement | null = null;
let activeBtn: HTMLElement | null = null;
// Single global outside-click listener registered once
let outsideClickListenerRegistered = false;

function closeActivePopup() {
  if (activePopup) {
    activePopup.remove();
    activePopup = null;
  }
  if (activeBtn) {
    activeBtn.style.opacity = "0.35";
    activeBtn = null;
  }
}

function ensureOutsideClickListener() {
  if (outsideClickListenerRegistered) return;
  outsideClickListenerRegistered = true;
  // Use mousedown instead of click to avoid racing with the button's own click handler
  document.addEventListener("mousedown", (e) => {
    if (!activePopup) return;
    const target = e.target as Node;
    if (activePopup.contains(target)) return;
    if (activeBtn && activeBtn.contains(target)) return;
    closeActivePopup();
  });
}

/**
 * Builds and returns a pencil icon button element for the given problem.
 * Sized to match the adjacent task-score span exactly.
 */
export function createNoteButton(problemId: string, hasNote: boolean, scoreSpan?: Element | null): HTMLElement {
  // Match the exact dimensions of the score block next to it
  const scoreRect = scoreSpan?.getBoundingClientRect();
  const w = scoreRect && scoreRect.width > 0 ? `${Math.round(scoreRect.width * 0.7)}px` : "22px";
  const h = scoreRect && scoreRect.height > 0 ? `${scoreRect.height}px` : "22px";

  const btn = document.createElement("span");
  btn.title = "Notes";
  btn.setAttribute("data-cses-note-btn", problemId);
  btn.style.cssText = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: ${w};
    height: ${h};
    vertical-align: middle;
    opacity: ${hasNote ? "1" : "0.35"};
    transition: opacity 0.15s;
    position: relative;
    box-sizing: border-box;
  `;

  // Pencil SVG icon — sized relative to the block
  const iconSize = scoreRect && scoreRect.height > 0 ? Math.round(scoreRect.height * 0.55) : 13;
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>`;

  btn.addEventListener("mouseenter", () => {
    if (activeBtn !== btn) btn.style.opacity = "1";
  });
  btn.addEventListener("mouseleave", () => {
    if (activeBtn !== btn) btn.style.opacity = hasNote ? "1" : "0.35";
  });

  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Toggle: clicking the same button closes it
    if (activeBtn === btn) {
      closeActivePopup();
      return;
    }

    closeActivePopup();
    activeBtn = btn;
    btn.style.opacity = "1";

    const note = await loadNote(problemId);
    const popup = buildPopup(problemId, note, btn);
    document.body.appendChild(popup);
    activePopup = popup;

    // Position with fixed so scroll doesn't affect it
    const rect = btn.getBoundingClientRect();
    const popupWidth = 360;

    let top = rect.bottom + 4;
    let left = rect.left;

    // Keep within viewport horizontally
    if (left + popupWidth > window.innerWidth - 8) {
      left = window.innerWidth - popupWidth - 8;
    }
    // Keep within viewport vertically — flip above if not enough space below
    const popupHeight = 260;
    if (top + popupHeight > window.innerHeight - 8) {
      top = rect.top - popupHeight - 4;
    }

    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;

    const textarea = popup.querySelector<HTMLTextAreaElement>("textarea");
    textarea?.focus();
  });

  ensureOutsideClickListener();

  return btn;
}

function buildPopup(
  problemId: string,
  initialNote: string,
  btn: HTMLElement
): HTMLElement {
  const isDark = getComputedStyle(document.body).backgroundColor !== "rgb(255, 255, 255)";
  const bg = isDark ? "#1e1e1e" : "#ffffff";
  const border = isDark ? "#555" : "#ccc";
  const textColor = isDark ? "#d4d4d4" : "#111";
  const subtleColor = isDark ? "#888" : "#999";

  const popup = document.createElement("div");
  popup.setAttribute("data-cses-note-popup", problemId);
  popup.style.cssText = `
    position: fixed;
    z-index: 99999;
    width: 360px;
    background: ${bg};
    border: 1px solid ${border};
    border-radius: 6px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
    padding: 10px;
    font-family: system-ui, -apple-system, sans-serif;
    color: ${textColor};
  `;

  // Header row
  const header = document.createElement("div");
  header.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  `;

  const label = document.createElement("span");
  label.textContent = "Notes";
  label.style.cssText = `font-size: 12px; font-weight: 600; color: ${subtleColor};`;

  const closeBtn = document.createElement("span");
  closeBtn.textContent = "✕";
  closeBtn.style.cssText = `cursor: pointer; font-size: 12px; color: ${subtleColor}; line-height: 1;`;
  closeBtn.addEventListener("click", closeActivePopup);

  header.appendChild(label);
  header.appendChild(closeBtn);

  // Textarea
  const textarea = document.createElement("textarea");
  textarea.value = initialNote;
  textarea.placeholder = "Write your notes here...";
  textarea.rows = 10;
  textarea.style.cssText = `
    width: 100%;
    box-sizing: border-box;
    resize: vertical;
    font-size: 12px;
    font-family: inherit;
    background: ${isDark ? "#2d2d2d" : "#f9f9f9"};
    color: ${textColor};
    border: 1px solid ${border};
    border-radius: 4px;
    padding: 6px 8px;
    outline: none;
    min-height: 160px;
  `;

  // Auto-save on input
  let saveTimeout: ReturnType<typeof setTimeout>;
  textarea.addEventListener("input", () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(async () => {
      await saveNote(problemId, textarea.value);
      // Update button opacity based on whether there's content
      const hasContent = textarea.value.trim().length > 0;
      btn.style.opacity = hasContent ? "1" : "0.4";
      statusEl.textContent = "Saved";
      setTimeout(() => {
        statusEl.textContent = "";
      }, 1200);
    }, 500);
  });

  // Status line
  const statusEl = document.createElement("span");
  statusEl.style.cssText = `font-size: 10px; color: ${subtleColor}; margin-top: 4px; display: block; min-height: 14px;`;

  popup.appendChild(header);
  popup.appendChild(textarea);
  popup.appendChild(statusEl);

  return popup;
}

// ── Star button ────────────────────────────────────────────────────────────────

const STAR_KEY_PREFIX = "cses_star_";

async function getStar(problemId: string): Promise<boolean> {
  const result = await chrome.storage.local.get(STAR_KEY_PREFIX + problemId);
  return !!(result[STAR_KEY_PREFIX + problemId]);
}

async function setStar(problemId: string, val: boolean): Promise<void> {
  await chrome.storage.local.set({ [STAR_KEY_PREFIX + problemId]: val });
}

/**
 * Creates a star toggle button sized to match the score span.
 * Yellow when starred, light grey when not.
 */
export function createStarButton(problemId: string, starred: boolean, scoreSpan?: Element | null): HTMLElement {
  const scoreRect = scoreSpan?.getBoundingClientRect();
  const w = scoreRect && scoreRect.width > 0 ? `${Math.round(scoreRect.width * 0.7)}px` : "22px";
  const h = scoreRect && scoreRect.height > 0 ? `${scoreRect.height}px` : "22px";
  const iconSize = scoreRect && scoreRect.height > 0 ? Math.round(scoreRect.height * 0.55) : 13;

  let isStarred = starred;

  const btn = document.createElement("span");
  btn.title = "Star this problem";
  btn.setAttribute("data-cses-star-btn", problemId);
  btn.style.cssText = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: ${w};
    height: ${h};
    vertical-align: middle;
    transition: opacity 0.15s;
    position: relative;
    box-sizing: border-box;
  `;

  const render = () => {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24"
      fill="${isStarred ? "#f5c518" : "none"}"
      stroke="${isStarred ? "#f5c518" : "#888"}"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>`;
  };

  render();

  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    isStarred = !isStarred;
    await setStar(problemId, isStarred);
    render();
  });

  return btn;
}

export { getStar };
