/** @format */

const rules = [2, 4, 8, 12, 16, 24] as const;

export type RuleKey = 0 | 1 | 2 | 3 | 4 | 5;
export type Rule = typeof rules[number];

const spread = [...rules];
export type RulesType = typeof spread;

export const __rule = (value: Rule): Rule => value;
export type RuleGetterType = typeof __rule;

export default rules;
