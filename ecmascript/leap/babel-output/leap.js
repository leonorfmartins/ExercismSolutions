"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (year) {
  return isDivisibleBy4(year) && (isDivisibleBy100(year) || isDivisibleBy400(year));
};

var isDivisibleBy4 = function isDivisibleBy4(year) {
  return year % 4 == 0;
};

var isDivisibleBy100 = function isDivisibleBy100(year) {
  return year % 100 != 0;
};

var isDivisibleBy400 = function isDivisibleBy400(year) {
  return year % 400 === 0;
};
module.exports = exports["default"];