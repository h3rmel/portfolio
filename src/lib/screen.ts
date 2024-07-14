/**
 * Checks if the screen width is greater than the specified width.
 *
 * @param width - The width to compare against the screen width.
 * @returns {boolean} `true` if the screen width is greater than the specified width, `false` otherwise.
 */
export function checkScreenWidth(width: number): boolean {
  return screen.width > width;
}
