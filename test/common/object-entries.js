'use strict';

// Replaces the object.entries package (last released March 2025). Object.entries
// is ES2017 and absent in IE 11, one of the browser targets in babel.config.js,
// so the native cannot simply be called.
module.exports = typeof Object.entries === 'function' ? Object.entries : function entries(object) {
  if (object === null || object === undefined) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  var from = Object(object);
  var keys = Object.keys(from);
  var result = [];
  for (var i = 0; i < keys.length; i++) {
    result.push([keys[i], from[keys[i]]]);
  }
  return result;
};
