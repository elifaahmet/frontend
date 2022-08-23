/** @format */

interface IFontWeights {
  readonly regular: number;
  readonly bold: number;
}

const fontWeights: IFontWeights = {
  regular: 400,
  bold: 700,
};

export type FontWeightKey = keyof IFontWeights;
export type FontWeight = typeof fontWeights[FontWeightKey];
export type FontWeightsType = { [key in FontWeightKey]: number };

export default fontWeights;
