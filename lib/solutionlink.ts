/**
 * Extracts the solution share link from a CSES result page.
 *
 * Returns a full absolute URL only if the verdict is ACCEPTED (has class "ac").
 * Looks for a "Share code" anchor that appears on accepted result pages.
 */
export function fetchSolutionLink(): string | null {
  // Check that the verdict is accepted
  if (!document.querySelector(".inline-score.verdict.ac")) {
    return null;
  }

  // Find the "Share code to others" / "share code" link
  const shareAnchor = Array.from(document.querySelectorAll("a")).find((a) =>
    a.textContent?.toLowerCase().includes("share code")
  );

  if (!shareAnchor) return null;

  const href = shareAnchor.getAttribute("href");
  if (!href) return null;

  // Convert relative URL to absolute
  return new URL(href, window.location.origin).toString();
}

/**
 * Returns true if the current page is an accepted result page.
 * Uses both the URL pattern and the presence of the verdict element.
 */
export function isAcceptedResultPage(): boolean {
  const isResultUrl = /\/problemset\/result\/\d+\/?$/.test(
    window.location.pathname
  );
  const verdictEl = document.querySelector(".inline-score.verdict");
  return isResultUrl && !!verdictEl;
}

/**
 * Returns true if the result on the current page is ACCEPTED.
 * Reads the summary table's Result row.
 */
export function isVerdictAccepted(): boolean {
  const rows = document.querySelectorAll("table.summary-table tbody tr");
  for (const row of rows) {
    const cells = row.querySelectorAll("td");
    if (cells.length < 2) continue;
    if (cells[0].textContent?.trim() === "Result:") {
      return cells[1].textContent?.trim() === "ACCEPTED";
    }
  }
  return false;
}
