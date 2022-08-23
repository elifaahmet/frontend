/** @format */
export const searchAndReplace =
  (replacePattern: RegExp, replaceWith: string) => (text: string) =>
    text.replace(replacePattern, replaceWith);

export const noEmojis = searchAndReplace(
  // /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
  /[^a-zA-Z0-9\s<>?,./'"!@#$%^&*+()-]/g,
  ''
);
