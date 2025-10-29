export function getYear(dateString: string): number {
  return new Date(dateString).getFullYear();
}
