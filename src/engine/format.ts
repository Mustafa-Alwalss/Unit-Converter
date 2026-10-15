/** Human-friendly number: no float noise, scientific notation for extreme values. */
export function formatNumber(n: number): string {
  if (!isFinite(n)) return '';
  if (n === 0) return '0';
  const abs = Math.abs(n);
  if (abs >= 1e15 || abs < 1e-6) {
    return n.toExponential(6).replace(/\.?0+e/, 'e');
  }
  return String(parseFloat(n.toPrecision(12)));
}
