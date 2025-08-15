export function formatMsToMinSec(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minPart = minutes > 0 ? `${minutes} min` : '';
  const secPart = `${seconds} sec`;

  return minPart ? `${minPart} ${secPart}` : secPart;
}
