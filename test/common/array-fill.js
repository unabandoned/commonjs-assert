'use strict';

// Replaces the array-fill package (last released 2017). The browser targets in
// babel.config.js include IE 11, which has no Array.prototype.fill, so the
// native cannot simply be called. Only the two-argument form is used here.
module.exports = function arrayFill(array, value) {
  if (typeof Array.prototype.fill === 'function') {
    return array.fill(value);
  }
  for (var i = 0; i < array.length; i++) {
    array[i] = value;
  }
  return array;
};
