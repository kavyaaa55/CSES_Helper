export function getProblemIdFromUrl(url: string): string | null {
  // Example: https://codeforces.com/problemset/problem/1234/A
  const match = url.match(/problem\/(\d+)\//);
  return match ? match[1] : null;
}

