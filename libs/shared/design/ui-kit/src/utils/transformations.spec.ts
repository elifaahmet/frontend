/** @format */

import {
  appendValuesWithUnits,
  calculateWithUnit,
  interpolateStyles,
  UIKitContext,
} from './transformations';

describe('UI Kit: transformations', () => {
  describe('appendValuesWithUnits', () => {
    it('should convert number values for specified keys to rems or px', () => {
      const styleObject = {
        marginLeft: 2,
        fontSize: 16,
      };

      const transformedMarketing = appendValuesWithUnits(styleObject, [
        'marginLeft',
        'fontSize',
      ]);
      const transformedProduct = appendValuesWithUnits(
        styleObject,
        ['marginLeft', 'fontSize'],
        1
      );

      expect(transformedMarketing.marginLeft).toEqual(`${2 / 16}rem`);
      expect(transformedMarketing.fontSize).toEqual('1rem');

      expect(transformedProduct.marginLeft).toEqual(`2px`);
      expect(transformedProduct.fontSize).toEqual('16px');
    });

    it('should not convert non-number values for specified keys to rems or px', () => {
      const styleObject = {
        marginLeft: '2',
        fontSize: '16',
      };

      const transformedMarketing = appendValuesWithUnits(styleObject, [
        'marginLeft',
        'fontSize',
      ]);
      const transformedProduct = appendValuesWithUnits(
        styleObject,
        ['marginLeft', 'fontSize'],
        1
      );

      expect(transformedMarketing.marginLeft).toEqual('2');
      expect(transformedMarketing.fontSize).toEqual('16');

      expect(transformedProduct.marginLeft).toEqual('2');
      expect(transformedProduct.fontSize).toEqual('16');
    });

    it('should not convert any values for keys not specified', () => {
      const styleObject = {
        marginLeft: 2,
        fontSize: '16',
      };

      const transformedMarketing = appendValuesWithUnits(styleObject, []);
      const transformedProduct = appendValuesWithUnits(styleObject, [], 1);

      expect(transformedMarketing.marginLeft).toEqual(2);
      expect(transformedMarketing.fontSize).toEqual('16');

      expect(transformedProduct.marginLeft).toEqual(2);
      expect(transformedProduct.fontSize).toEqual('16');
    });
  });

  describe('interpolateStyles', () => {
    it('should convert style object to hyphen-case css property value pairs', () => {
      const styleObject = {
        marginLeft: '2px',
        fontSize: '16px',
      };

      const transformed = interpolateStyles(styleObject);

      expect(transformed).toEqual(`margin-left: 2px;\nfont-size: 16px;\n`);
    });
  });

  describe('calculateWithUnit', () => {
    it('should convert raw values to rem, em, or px for kitContext marketing', () => {
      const rawValue = 16;

      const emValue = calculateWithUnit(rawValue, 'em', UIKitContext.marketing);
      const remValue = calculateWithUnit(
        rawValue,
        'rem',
        UIKitContext.marketing
      );
      const pxValue = calculateWithUnit(rawValue, 'px', UIKitContext.marketing);

      expect(emValue).toEqual('1em');
      expect(remValue).toEqual('1rem');
      expect(pxValue).toEqual('16px');
    });

    it('should convert raw values to px for kitContext product', () => {
      const rawValue = 16;

      const androidConverted = calculateWithUnit(
        rawValue,
        'em',
        UIKitContext.productAndroid
      );
      const iOSConverted = calculateWithUnit(
        rawValue,
        'rem',
        UIKitContext.productIOS
      );

      expect(androidConverted).toEqual('16px');
      expect(iOSConverted).toEqual('16px');
    });
  });
});
