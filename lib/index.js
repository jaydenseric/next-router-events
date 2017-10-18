'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tinyEmitter = require('tiny-emitter');

var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

var _router = require('next/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const emitter = new _tinyEmitter2.default();
const methodEvents = {
  onRouteChangeStart: 'routeChangeStart',
  onRouteChangeComplete: 'routeChangeComplete',
  onRouteChangeError: 'routeChangeError',
  onBeforeHistoryChange: 'beforeHistoryChange',
  onAppUpdated: 'appUpdated'
};

Object.keys(methodEvents).forEach(method => {
  _router2.default[method] = (...args) => emitter.emit(methodEvents[method], ...args);
});

exports.default = emitter;