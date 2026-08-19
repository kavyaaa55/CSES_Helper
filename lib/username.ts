/**
 * Extracts the logged-in username from the CSES page header.
 *
 * CSES renders the username as an anchor in the top controls:
 *   <a class="account" href="/user/...">username</a>
 */
export function getUsernameFromPage(): string | null {
  const el = document.querySelector(".controls a.account");
  if (!el) return null;
  const username = el.textContent?.trim();
  return username && username.length > 0 ? username : null;
}
