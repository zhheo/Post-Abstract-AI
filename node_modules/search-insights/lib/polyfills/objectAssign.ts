/* tslint:disable */

/**
 * ES5 Object.assign polyfill
 * src:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */

export default function objectAssignPolyfill() {
  if (typeof Object.assign !== "function") {
    Object.assign = function (target: any, varArgs: any) {
      // .length of function is 2

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError("Cannot convert undefined or null to object");
      }

      const to = Object(target);

      for (let index = 1; index < arguments.length; index++) {
        const nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (const nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }
}
