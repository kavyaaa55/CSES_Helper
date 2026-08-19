/**
 * Extracts the CSES problem ID from the current page URL or a given URL.
 *
 * CSES problem URLs follow the pattern:
 *   https://cses.fi/problemset/task/<id>
 */
export function getProblemIdFromUrl(pathname?: string): string | null {
  const path = pathname ?? window.location.pathname;
  const match = path.match(/\/problemset\/task\/(\d+)/);
  return match ? match[1] : null;
}

/**
 * Extracts the problem ID from a result/submit page by reading
 * the task link in the summary table.
 * Used on result pages where the URL contains a submission ID, not a problem ID.
 */
export function getProblemIdFromResultPage(): string {
  const taskLink = document.querySelector(
    'table.summary-table tbody tr td a[href*="/problemset/task/"]'
  );
  if (taskLink instanceof HTMLAnchorElement) {
    const match = taskLink.href.match(/\/problemset\/task\/(\d+)/);
    return match ? match[1] : "";
  }
  return "";
}
