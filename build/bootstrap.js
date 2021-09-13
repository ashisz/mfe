"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mount = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mount = function mount(el) {
  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_App["default"], null), el);
};

exports.mount = mount;

if (process.env.NODE_ENV === 'development') {
  var el = document.getElementById('__MARKETING_DEV_ROOT');
  el && mount(el);
}