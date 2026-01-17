/**
 * Example HTML:
 * <a class="account" href="/user/377561">speedwasp</a>
 */
export function getUsernameFromPage(): string | null {
  const el = document.querySelector(
    ".controls a.account"
  ) as HTMLAnchorElement | null;

  if (!el) return null;

  const username = el.textContent?.trim();
  return username && username.length > 0 ? username : null;
}

