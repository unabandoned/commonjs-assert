// In-tree replacements for the four single-purpose polyfill packages this
// module used to take as runtime dependencies: object.assign, object-is,
// is-nan and call-bind.
//
// The build in babel.config.js targets IE 11 among others, so the natives
// these stand in for cannot simply be called: IE 11 has none of Object.assign,
// Object.is or Number.isNaN. Each export therefore uses the native when the
// engine has one and falls back to a spec-shaped ES5 implementation otherwise,
// which is what the packages did.
//
// The one behavioural difference: object.assign/polyfill and object-is/polyfill
// also reject a native that is present but *buggy*, to route around defects in
// Safari 9 and Chrome 45-era V8. Both are far below this build's floor
// (edge 18, firefox 66, chrome 73, safari 12, ie 11), so a native that exists
// on a supported engine is a native that works.

'use strict';

// Object.assign — used once, to fold `assert` onto `assert.strict`.
function assignShim(target, ...sources) {
  if (target === null || target === undefined) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  var to = Object(target);
  for (var i = 0; i < sources.length; i++) {
    var source = sources[i];
    if (source !== null && source !== undefined) {
      var from = Object(source);
      var keys = Object.keys(from);
      for (var k = 0; k < keys.length; k++) {
        to[keys[k]] = from[keys[k]];
      }
      if (typeof Object.getOwnPropertySymbols === 'function') {
        var symbols = Object.getOwnPropertySymbols(from);
        for (var s = 0; s < symbols.length; s++) {
          if (Object.prototype.propertyIsEnumerable.call(from, symbols[s])) {
            to[symbols[s]] = from[symbols[s]];
          }
        }
      }
    }
  }
  return to;
}

// Object.is — SameValue: separates +0 from -0, and NaN equals NaN.
function isShim(a, b) {
  if (a === b) {
    // +0 !== -0 under SameValue; 1/+0 is Infinity and 1/-0 is -Infinity.
    // eslint-disable-next-line no-magic-numbers -- 0 and 1 are the algorithm
    return a !== 0 || 1 / a === 1 / b;
  }
  return a !== a && b !== b;
}

// Number.isNaN — unlike global isNaN, does not coerce its argument.
function numberIsNaNShim(value) {
  return typeof value === 'number' && value !== value;
}

// call-bind/callBound('RegExp.prototype.test') — calls the original method
// rather than whatever `test` the receiving regexp happens to carry.
function regExpTest(regexp, string) {
  return RegExp.prototype.test.call(regexp, string);
}

module.exports = {
  objectAssign: typeof Object.assign === 'function' ? Object.assign : assignShim,
  objectIs: typeof Object.is === 'function' ? Object.is : isShim,
  numberIsNaN: typeof Number.isNaN === 'function' ? Number.isNaN : numberIsNaNShim,
  regExpTest,
};
