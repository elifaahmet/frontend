/**@format */

/**
 * @return {Promise<string|null>} string value from clipboard or null on error / navigator not available
 */
export async function copyTextFromClipboard(): Promise<string | null> {
  if (navigator?.clipboard?.readText) {
    const text = await navigator.clipboard.readText().catch(() => null);
    return text;
  }

  return null;
}
