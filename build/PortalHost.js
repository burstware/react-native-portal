"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PortalContext = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _PortalManager = _interopRequireDefault(require("./PortalManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PortalContext = React.createContext(null);
/**
 * Portal host renders all of its children `Portal` elements.
 * For example, you can wrap a screen in `Portal.Host` to render items above the screen.
 * If you're using the `Provider` component, it already includes `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Text } from 'react-native';
 * import { Portal } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     return (
 *       <Portal.Host>
 *         <Text>Content of the app</Text>
 *       </Portal.Host>
 *     );
 *   }
 * }
 * ```
 *
 * Here any `Portal` elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a `Modal`.
 */

exports.PortalContext = PortalContext;

var PortalHost = /*#__PURE__*/function (_React$Component) {
  _inherits(PortalHost, _React$Component);

  function PortalHost(props) {
    var _this;

    _classCallCheck(this, PortalHost);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PortalHost).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setManager", function (manager) {
      _this.manager = manager;
    });

    _defineProperty(_assertThisInitialized(_this), "mount", function (children) {
      var key = _this.nextKey++;

      if (_this.manager) {
        _this.manager.mount(key, children);
      } else {
        _this.queue.push({
          type: 'mount',
          key: key,
          children: children
        });
      }

      return key;
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (key, children) {
      if (_this.manager) {
        _this.manager.update(key, children);
      } else {
        var op = {
          type: 'mount',
          key: key,
          children: children
        };

        var index = _this.queue.findIndex(function (o) {
          return o.type === 'mount' || o.type === 'update' && o.key === key;
        });

        if (index > -1) {
          // @ts-ignore
          _this.queue[index] = op;
        } else {
          _this.queue.push(op);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "unmount", function (key) {
      if (_this.manager) {
        _this.manager.unmount(key);
      } else {
        _this.queue.push({
          type: 'unmount',
          key: key
        });
      }
    });

    _this.nextKey = 0;
    _this.queue = [];
    _this.manager = undefined;
    return _this;
  }

  _createClass(PortalHost, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var manager = this.manager;
      var queue = this.queue; // eslint-disable-next-line no-unmodified-loop-condition

      while (queue.length && manager) {
        var action = queue.pop();

        if (action) {
          // eslint-disable-next-line default-case
          switch (action.type) {
            case 'mount':
              manager.mount(action.key, action.children);
              break;

            case 'update':
              manager.update(action.key, action.children);
              break;

            case 'unmount':
              manager.unmount(action.key);
              break;
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(PortalContext.Provider, {
        value: {
          mount: this.mount,
          update: this.update,
          unmount: this.unmount
        }
      }, React.createElement(_reactNative.View, {
        style: styles.container,
        collapsable: false,
        pointerEvents: "box-none"
      }, this.props.children), React.createElement(_PortalManager["default"], {
        ref: this.setManager
      }));
    }
  }]);

  return PortalHost;
}(React.Component);

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
}); // PortalHost.displayName = 'Portal.Host'


var _default = PortalHost;
exports["default"] = _default;