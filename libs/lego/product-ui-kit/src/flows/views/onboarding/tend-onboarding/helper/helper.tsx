/**@format */

export const formatPhone = (setPhone) => (country) => (event) => {
  const isUS = country === 'USA';
  let format = '';
  const inputValue = event.target.value;
  let value = '';
  isUS ? (format = '(***) ***-****') : (format = '** **** ****');
  isUS
    ? (value = event.target.value.startsWith('+1 ')
        ? event.target.value.substring(3).replace(/[^0-9]/g, '')
        : event.target.value)
    : (value = inputValue.substring(3).replace(/[^0-9]/g, ''));
  format = value
    .split('')
    .reduce((format, val) => format.replace('*', val), format);
  if (format.indexOf('*') >= 0) {
    format = format.substring(0, format.indexOf('*'));
  }
  if (isUS && (format.endsWith('-') || format.endsWith(') '))) {
    format.endsWith('-')
      ? (format = format.replace('-', ''))
      : (format = format.replace(') ', ''));
  }
  isUS ? setPhone('+1 ' + format.trim()) : setPhone('+52 ' + format.trim());
};

export const ONE_UPPER_CASE = /[A-Z]/;
export const ONE_LOWER_CASE = /[a-z]/;
export const ONE_NUMBER = /\d/;
export const ONE_SPECIAL_CHARACTER = /[`~!@#$%^&*(){}=_\-+.,<>;:'"\\|[\]]/;
export const MIN_EIGHT_NON_SPACE_CHARACTERS = /\S{8,}/;
