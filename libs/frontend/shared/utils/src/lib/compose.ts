export const compose = (...fns) => (x) => fns.reduceRight((y, fn) => fn(y), x);
