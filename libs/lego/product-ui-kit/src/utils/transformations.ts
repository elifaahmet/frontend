/**@format */
import { ChangeEvent } from 'react';

/**
 * Assumes usage in controlled component implementation where onChange handler does not allow character other
 * than digits and decimals from user input.
 *
 * @param amount
 */
export function sanitizeMoneyInput(amount: number | string): string {
  return `${amount}`.replace(/[$,\s]/g, '');
}

export function formatNumberToMoneyString(amount: number | string): string {
  const sanitizedNumString = sanitizeMoneyInput(amount);
  return parseFloat(sanitizedNumString).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}

export function formatNumberToIntegerMoneyString(
  amount: number | string
): string {
  const sanitizedNumString = sanitizeMoneyInput(amount);
  return parseInt(sanitizedNumString, 10).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

function formatNumberToSingleDecimalMoneyString(
  amount: number | string
): string {
  const sanitizedNumString = sanitizeMoneyInput(amount);
  return parseFloat(sanitizedNumString).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 1,
  });
}

/**
 * Null servers as a sentinel character so we can ignore updating state with return value.
 * @param e
 */
export function onChangeFormatInputToDollarString(
  e: ChangeEvent<HTMLInputElement>
): string | null {
  const { value } = e.target;
  const onlyNumbers = value.replace(/\D/g, '');
  if (onlyNumbers !== '') {
    const centsValue = Number.parseInt(onlyNumbers);
    return `$${(centsValue / 100).toFixed(2)}`;
  }
  return '';
}

/**
 * Formats money string to integer value or double precision decimal.
 * @param {string} valueString - fetched from component state
 */
export function onBlurReformatValueToMoney(valueString: string): string {
  const lastChar = valueString.split('').reverse()[0];
  const doesNotHaveDecimalPlace = !valueString.match(/\.\d{1,2}$/);

  if (lastChar === '.' || doesNotHaveDecimalPlace) {
    return formatNumberToIntegerMoneyString(valueString);
  }

  return formatNumberToMoneyString(valueString);
}
