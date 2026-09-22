'use strict';

// Replaces the object.getownpropertydescriptors package (last released December
// 2025). Object.getOwnPropertyDescriptors is ES2017 and absent in IE 11, one of
// the browser targets in babel.config.js, so the native cannot simply be called.
//
// The fallback walks string and symbol keys alike, because the callers use it to
// clone objects whole before handing them to deepStrictEqual.
module.exports = typeof Object.getOwnPropertyDescriptors === 'function' ?
  Object.getOwnPropertyDescriptors :
  function getOwnPropertyDescriptors(object) {
    if (object === null || object === undefined) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
    var from = Object(object);
    var descriptors = {};
    var keys = Object.getOwnPropertyNames(from);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(from));
    }
    for (var i = 0; i < keys.length; i++) {
      var descriptor = Object.getOwnPropertyDescriptor(from, keys[i]);
      if (descriptor !== undefined) {
        descriptors[keys[i]] = descriptor;
      }
    }
    return descriptors;
  };
