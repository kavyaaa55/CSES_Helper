/**
 * Extracts solution share link from CSES result page
 * Returns full URL only if verdict is ACCEPTED
 */
export function fetchSolutionLink(): string | null {
  // 1️⃣ Check verdict
  const verdictEl = document.querySelector(
    ".inline-score.verdict.ac"
  );

  if (!verdictEl) {
    // not accepted
    return null;
  }

  // 2️⃣ Find "Share code to others" link
  const shareAnchor = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("a")
  ).find((a) =>
    a.textContent?.toLowerCase().includes("share code")
  );

  if (!shareAnchor) {
    return null;
  }

  // 3️⃣ Convert relative link to absolute
  const href = shareAnchor.getAttribute("href");
  if (!href) return null;

  return new URL(href, window.location.origin).toString();
}

