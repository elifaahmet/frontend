// Password
export const ONE_UPPER_CASE = /[A-Z]/;
export const ONE_LOWER_CASE = /[a-z]/;
export const ONE_NUMBER = /\d/;
export const ONE_SPECIAL_CHARACTER = /[`~!@#$%^&*(){}=_\-+.,<>;:'"\\|[\]]/;
export const MIN_EIGHT_NON_SPACE_CHARACTERS = /\S{8,}/;
export const FULL_PASSWORD_VALIDATION = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*(){}=_\-+.,<>;:'"\\|[\]])[A-Za-z\d`~!@#$%^&*(){}=_\-+.,<>;:'"\\|[\]]{8,}$/;
