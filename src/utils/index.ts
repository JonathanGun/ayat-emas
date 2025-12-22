export function hashStringToIndex(s: string, n: number): number {
  let hash = 0;

  for (let i = 0; i < s.length; i++) {
    hash = (hash * 31 + s.charCodeAt(i)) % 0x7fffffff;
  }

  return Math.abs(hash) % n;
}
