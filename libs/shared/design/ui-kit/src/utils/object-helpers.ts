/**
 * Simple implementation of lodash style pick.
 * @param {Object} target
 * @param {string[]} properties
 */
export function pick(target, properties: string[]) {
  return properties.reduce((acc, property) => {
    if (Object.hasOwnProperty.bind(target, property)()) {
      acc[property] = target[property];
    }

    return acc;
  }, {});
}
