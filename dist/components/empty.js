"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EmptyCard;
var _react = require("@phosphor-icons/react");
function EmptyCard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "text-center py-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full flex justify-center items-center  space-x-4"
  }, /*#__PURE__*/React.createElement(_react.Coffee, {
    size: 30,
    className: "text-gray-600 font-light"
  }), " ", /*#__PURE__*/React.createElement("div", {
    className: "text-2xl text-gray-600 font-light "
  }, "\u6682\u65E0\u6570\u636E")), /*#__PURE__*/React.createElement("div", {
    className: "text-gray-600 mt-3 font-light"
  }, "No Content To Show"));
}