/** @format */

interface IFontFamilies {
  readonly body: string;
  readonly headline: string;
  readonly label: string;
}

const fontFamilies: IFontFamilies = {
  body:
    "Pilat, -apple-system, BlinkMacSystemFont, Arial, 'Helvetica Neue', sans-serif",
  headline:
    "'Pilat Condensed', 'Arial Black', 'Arial Bold', 'Helvetica Neu Bold', sans-serif",
  label:
    "Pilat, -apple-system, BlinkMacSystemFont, Arial, 'Helvetica Neue', sans-serif",
};

export type FontFamilyKey = keyof IFontFamilies;
export type FontFamily = typeof fontFamilies[FontFamilyKey];
export type FontFamiliesType = { [key in FontFamilyKey]: string };

export default fontFamilies;
