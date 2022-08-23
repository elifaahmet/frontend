/** @format */

interface IZIndex {
  default: number;
  sticky: number;
  dialog: number;
  dropdown: number;
  overlay: number;
  modal: number;
  spinner: number;
  toast: number;
}

const zIndices: IZIndex = {
  default: 0,
  sticky: 1000,
  dialog: 2000,
  dropdown: 3000,
  overlay: 4000,
  modal: 5000,
  spinner: 6000,
  toast: 7000,
};

export type ZIndexKey = keyof IZIndex;
export type ZIndicesType = { [key in ZIndexKey]: number };

export default zIndices;
