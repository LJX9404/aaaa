// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _toString = Object.prototype.toString;

var Utils = {
  isWeb: function isWeb() {
    var platform = weex.config.env.platform;

    return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
  },
  isIOS: function isIOS() {
    var platform = weex.config.env.platform;

    return platform.toLowerCase() === 'ios';
  },

  /**
   * 是否为 iPhone X
   * @returns {boolean}
   */
  isIPhoneX: function isIPhoneX() {
    var deviceHeight = weex.config.env.deviceHeight;

    if (this.isWeb()) {
      return typeof window !== 'undefined' && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
    }
    return this.isIOS() && deviceHeight === 2436;
  },
  isAndroid: function isAndroid() {
    var platform = weex.config.env.platform;

    return platform.toLowerCase() === 'android';
  },
  isPlainObject: function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  },
  makeClassList: function makeClassList(classList) {
    // web 支持
    if (this.isWeb() || Array.isArray(classList)) {
      return classList;
    } else {
      return Object.keys(classList).filter(function (classname) {
        return classList[classname];
      });
    }
  }
};
exports.default = Utils;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(22);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var itemMixin = {
  computed: {
    _isFirstChild: function _isFirstChild() {
      if ('_isFirstChild' in this.$parent) {
        return this.$parent._isFirstChild;
      }
      return this.$parent.$slots.default && this.$parent.$slots.default[0] === this.$vnode;
    },
    _isLastChild: function _isLastChild() {
      if ('_isLastChild' in this.$parent) {
        return this.$parent._isLastChild;
      }
      return this.$parent.$slots.default && this.$parent.$slots.default[this.$parent.$slots.default.length - 1] === this.$vnode;
    }
  }
};

exports.default = itemMixin;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(52)
)

/* script */
__vue_exports__ = __webpack_require__(53)

/* template */
var __vue_template__ = __webpack_require__(59)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-list\\item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2013f32a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(54);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmImage = exports.AmDatePicker = exports.AmDatePickerView = exports.AmPopup = exports.AmMask = exports.AmHtml = exports.AmPicker = exports.AmPickerView = exports.AmNativeTabContainerItem = exports.AmNativeTabContainer = exports.AmTabContainerItem = exports.AmTabContainer = exports.AmTabs = exports.AmSegmentedControl = exports.AmTabBarItem = exports.AmTabBar = exports.AmNavBar = exports.AmIcon = exports.AmGrid = exports.AmSwitch = exports.AmWingBlank = exports.AmWhiteSpace = exports.AmListCheckbox = exports.AmListRadio = exports.AmListTextarea = exports.AmListInput = exports.AmListItem = exports.AmList = exports.AmCheckbox = exports.AmFlexItem = exports.AmFlex = exports.AmButton = exports.Utils = undefined;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _amButton = __webpack_require__(30);

var _amButton2 = _interopRequireDefault(_amButton);

var _amFlex = __webpack_require__(9);

var _amFlex2 = _interopRequireDefault(_amFlex);

var _amFlexItem = __webpack_require__(10);

var _amFlexItem2 = _interopRequireDefault(_amFlexItem);

var _amCheckbox = __webpack_require__(11);

var _amCheckbox2 = _interopRequireDefault(_amCheckbox);

var _amList = __webpack_require__(46);

var _amList2 = _interopRequireDefault(_amList);

var _amListItem = __webpack_require__(51);

var _amListItem2 = _interopRequireDefault(_amListItem);

var _amListInput = __webpack_require__(60);

var _amListInput2 = _interopRequireDefault(_amListInput);

var _amListTextarea = __webpack_require__(65);

var _amListTextarea2 = _interopRequireDefault(_amListTextarea);

var _amListRadio = __webpack_require__(70);

var _amListRadio2 = _interopRequireDefault(_amListRadio);

var _amListCheckbox = __webpack_require__(75);

var _amListCheckbox2 = _interopRequireDefault(_amListCheckbox);

var _amWhiteSpace = __webpack_require__(80);

var _amWhiteSpace2 = _interopRequireDefault(_amWhiteSpace);

var _amWingBlank = __webpack_require__(85);

var _amWingBlank2 = _interopRequireDefault(_amWingBlank);

var _amSwitch = __webpack_require__(90);

var _amSwitch2 = _interopRequireDefault(_amSwitch);

var _amGrid = __webpack_require__(95);

var _amGrid2 = _interopRequireDefault(_amGrid);

var _amIcon = __webpack_require__(4);

var _amIcon2 = _interopRequireDefault(_amIcon);

var _amNavBar = __webpack_require__(6);

var _amNavBar2 = _interopRequireDefault(_amNavBar);

var _amTabBar = __webpack_require__(104);

var _amTabBar2 = _interopRequireDefault(_amTabBar);

var _amTabBarItem = __webpack_require__(109);

var _amTabBarItem2 = _interopRequireDefault(_amTabBarItem);

var _amSegmentedControl = __webpack_require__(114);

var _amSegmentedControl2 = _interopRequireDefault(_amSegmentedControl);

var _amTabs = __webpack_require__(119);

var _amTabs2 = _interopRequireDefault(_amTabs);

var _amTabContainer = __webpack_require__(124);

var _amTabContainer2 = _interopRequireDefault(_amTabContainer);

var _amTabContainerItem = __webpack_require__(128);

var _amTabContainerItem2 = _interopRequireDefault(_amTabContainerItem);

var _amNativeTabContainer = __webpack_require__(131);

var _amNativeTabContainer2 = _interopRequireDefault(_amNativeTabContainer);

var _amNativeTabContainerItem = __webpack_require__(135);

var _amNativeTabContainerItem2 = _interopRequireDefault(_amNativeTabContainerItem);

var _amPickerView = __webpack_require__(7);

var _amPickerView2 = _interopRequireDefault(_amPickerView);

var _amPicker = __webpack_require__(147);

var _amPicker2 = _interopRequireDefault(_amPicker);

var _amHtml = __webpack_require__(160);

var _amHtml2 = _interopRequireDefault(_amHtml);

var _amMask = __webpack_require__(13);

var _amMask2 = _interopRequireDefault(_amMask);

var _amPopup = __webpack_require__(8);

var _amPopup2 = _interopRequireDefault(_amPopup);

var _amDatePickerView = __webpack_require__(14);

var _amDatePickerView2 = _interopRequireDefault(_amDatePickerView);

var _amDatePicker = __webpack_require__(167);

var _amDatePicker2 = _interopRequireDefault(_amDatePicker);

var _amImage = __webpack_require__(172);

var _amImage2 = _interopRequireDefault(_amImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Utils = _utils2.default;
exports.AmButton = _amButton2.default;
exports.AmFlex = _amFlex2.default;
exports.AmFlexItem = _amFlexItem2.default;
exports.AmCheckbox = _amCheckbox2.default;
exports.AmList = _amList2.default;
exports.AmListItem = _amListItem2.default;
exports.AmListInput = _amListInput2.default;
exports.AmListTextarea = _amListTextarea2.default;
exports.AmListRadio = _amListRadio2.default;
exports.AmListCheckbox = _amListCheckbox2.default;
exports.AmWhiteSpace = _amWhiteSpace2.default;
exports.AmWingBlank = _amWingBlank2.default;
exports.AmSwitch = _amSwitch2.default;
exports.AmGrid = _amGrid2.default;
exports.AmIcon = _amIcon2.default;
exports.AmNavBar = _amNavBar2.default;
exports.AmTabBar = _amTabBar2.default;
exports.AmTabBarItem = _amTabBarItem2.default;
exports.AmSegmentedControl = _amSegmentedControl2.default;
exports.AmTabs = _amTabs2.default;
exports.AmTabContainer = _amTabContainer2.default;
exports.AmTabContainerItem = _amTabContainerItem2.default;
exports.AmNativeTabContainer = _amNativeTabContainer2.default;
exports.AmNativeTabContainerItem = _amNativeTabContainerItem2.default;
exports.AmPickerView = _amPickerView2.default;
exports.AmPicker = _amPicker2.default;
exports.AmHtml = _amHtml2.default;
exports.AmMask = _amMask2.default;
exports.AmPopup = _amPopup2.default;
exports.AmDatePickerView = _amDatePickerView2.default;
exports.AmDatePicker = _amDatePicker2.default;
exports.AmImage = _amImage2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(100);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(139);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(151);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(35);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = __webpack_require__(38);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_item).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(42);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var props = function props() {
  return {
    title: {
      type: String,
      default: null
    },
    titleNumber: {
      type: Number,
      default: 0
    },
    titleDisabled: {
      type: Boolean,
      default: false
    },
    extra: {
      type: String,
      default: null
    },
    arrow: {
      type: String,
      default: 'right'
    },
    thumb: {
      type: String,
      default: null
    },
    thumbStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    brief: {
      type: String,
      default: null
    },
    tapActive: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'middle'
      // multiple: {
      //   type: Boolean,
      //   default: false
      // }
    } };
};

exports.default = props;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(154);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(164);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    format: {
      type: String,
      default: 'YYYY-MM-DD HH:mm'
    },
    value: {
      type: String,
      default: null
    },
    minDate: {
      type: String,
      default: '2000-01-01'
    },
    maxDate: {
      type: String,
      default: '2030-12-31'
    },
    hourList: {
      type: Array,
      default: null
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    formatYear: {
      type: String,
      default: '{value}'
    },
    formatMonth: {
      type: String,
      default: '{value}'
    },
    formatDay: {
      type: String,
      default: '{value}'
    },
    formatHour: {
      type: String,
      default: '{value}'
    },
    formatMinute: {
      type: String,
      default: '{value}'
    }
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global Vue*/

/* weex initialized here, please do not move this line */
var router = __webpack_require__(17);
var App = __webpack_require__(227);
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router: router }, App));
router.push('/home');

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueRouter = __webpack_require__(18);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _HelloWorld = __webpack_require__(19);

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _bar = __webpack_require__(27);

var _bar2 = _interopRequireDefault(_bar);

var _home = __webpack_require__(178);

var _home2 = _interopRequireDefault(_home);

var _myCooker = __webpack_require__(182);

var _myCooker2 = _interopRequireDefault(_myCooker);

var _oven = __webpack_require__(186);

var _oven2 = _interopRequireDefault(_oven);

var _steam = __webpack_require__(190);

var _steam2 = _interopRequireDefault(_steam);

var _steamMicro = __webpack_require__(198);

var _steamMicro2 = _interopRequireDefault(_steamMicro);

var _cooker = __webpack_require__(202);

var _cooker2 = _interopRequireDefault(_cooker);

var _sink = __webpack_require__(206);

var _sink2 = _interopRequireDefault(_sink);

var _sterilizer = __webpack_require__(210);

var _sterilizer2 = _interopRequireDefault(_sterilizer);

var _islandMachine = __webpack_require__(214);

var _islandMachine2 = _interopRequireDefault(_islandMachine);

var _dishWasher = __webpack_require__(218);

var _dishWasher2 = _interopRequireDefault(_dishWasher);

var _heater = __webpack_require__(222);

var _heater2 = _interopRequireDefault(_heater);

var _moreMenu = __webpack_require__(223);

var _moreMenu2 = _interopRequireDefault(_moreMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default);
module.exports = new _vueRouter2.default({
  routes: [{
    path: "/",
    redirect: "/home"
  }, {
    path: "/home",
    name: 'home',
    component: _home2.default
  }, {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: _HelloWorld2.default

  }, {
    path: '/bar',
    name: 'bar',
    component: _bar2.default

  }, {
    path: '/myCooker',
    name: 'myCooker',
    component: _myCooker2.default

  }, {
    path: '/steam',
    name: 'steam',
    component: _steam2.default

  }, {
    path: '/steamMicro',
    name: 'steamMicro',
    component: _steamMicro2.default

  }, {
    path: '/oven',
    name: 'oven',
    component: _oven2.default

  }, {
    path: '/cooker',
    name: 'cooker',
    component: _cooker2.default
  }, {
    path: '/heater',
    name: 'heater',
    component: _heater2.default
  }, {
    path: '/dishWasher',
    name: 'dishWasher',
    component: _dishWasher2.default
  }, {
    path: '/islandMachine',
    name: 'islandMachine',
    component: _islandMachine2.default
  }, {
    path: '/sink',
    name: 'sink',
    component: _sink2.default
  }, {
    path: '/sterilizer',
    name: 'sterilizer',
    component: _sterilizer2.default
  }, {
    path: '/moreMenu',
    name: 'moreMenu',
    component: _moreMenu2.default
  }]
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
  * vue-router v3.0.2
  * (c) 2018 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
      ? 'router-link-active'
      : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
      ? 'router-link-exact-active'
      : globalExactActiveClass;
    var activeClass = this.activeClass == null
      ? activeClassFallback
      : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
      ? exactActiveClassFallback
      : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  window.history.replaceState({ key: getStateKey() }, '', window.location.href.replace(window.location.origin, ''));
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : decodeURI(href.slice(index + 1))
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.2';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(26)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-656039f0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "width": "750",
    "height": "2595",
    "backgroundColor": "#F4F4F4",
    "paddingTop": "20",
    "paddingLeft": "20",
    "paddingBottom": "20"
  },
  "boxCommon": {
    "display": "flex",
    "flexDirection": "row",
    "textAlign": "center"
  },
  "boxone": {
    "width": "710",
    "height": "565",
    "backgroundColor": "#ffffff"
  },
  "mangerbox": {
    "height": "121",
    "width": "650",
    "marginLeft": "30",
    "marginRight": "30",
    "borderBottomColor": "#CED7DB",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "display": "flex",
    "justifyContent": "space-between",
    "flexDirection": "row"
  },
  "mangerinfo": {
    "fontSize": "32",
    "fontFamily": "PingFang-SC-Medium",
    "fontWeight": "500",
    "color": "rgba(88,88,88,1)",
    "marginTop": "45"
  },
  "deviceinfo": {
    "fontSize": "27",
    "fontFamily": "PingFang-SC-Medium",
    "fontWeight": "500",
    "color": "rgba(154,154,154,1)",
    "marginTop": "48"
  },
  "enviromentinfo": {
    "fontSize": "31",
    "fontFamily": "PingFang-SC-Bold",
    "fontWeight": "bold",
    "color": "rgba(102,102,102,1)"
  },
  "boxwifi": {
    "marginTop": "48",
    "marginLeft": "34"
  },
  "environment": {
    "marginTop": "40",
    "width": "210",
    "height": "280",
    "borderTopRightRadius": "8",
    "borderTopLeftRadius": "8",
    "borderBottomLeftRadius": "8",
    "borderBottomRightRadius": "8",
    "backgroundColor": "rgba(249,249,249,1)",
    "textAlign": "center",
    "marginLeft": "20",
    "alignItems": "center"
  },
  "title": {
    "fontSize": "23",
    "lineHeight": "23",
    "fontFamily": "PingFang-SC-Medium",
    "fontWeight": "500",
    "color": "rgba(102,102,102,1)",
    "marginTop": "24"
  },
  "wuxielouimg": {
    "width": "59",
    "height": "69",
    "marginTop": "43"
  },
  "xieloutext": {
    "fontSize": "31",
    "lineHeight": "31",
    "fontFamily": "PingFang-SC-Bold",
    "fontWeight": "bold",
    "color": "rgba(73,73,73,1)",
    "marginTop": "49"
  },
  "comfortLevel": {
    "fontSize": "60",
    "lineHeight": "60",
    "fontFamily": "PingFang-SC-Bold",
    "fontWeight": "bold",
    "color": "rgba(102,102,102,1)",
    "marginTop": "51"
  },
  "goodinfo": {
    "marginTop": "51",
    "fontSize": "70",
    "lineHeight": "70",
    "fontFamily": "PingFang-SC-Bold",
    "fontWeight": "bold",
    "color": "rgba(200,175,112,1)"
  },
  "mypro": {
    "width": "174",
    "height": "6",
    "backgroundColor": "rgba(232,238,245,1)",
    "borderRadius": "3",
    "marginTop": "46"
  },
  "justSo": {
    "marginTop": "55"
  },
  "protext": {
    "width": "174",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": "23"
  },
  "proinfo": {
    "fontSize": "23",
    "lineHeight": "23",
    "fontFamily": "PingFangSC-Semibold",
    "fontWeight": "600",
    "color": "rgba(102,102,102,1)"
  },
  "secondnav": {
    "width": "670",
    "height": "133",
    "marginLeft": "20",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "rgba(206,215,219,1)",
    "paddingTop": "62",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "myChufang": {
    "fontSize": "32",
    "lineHeight": "32",
    "fontFamily": "PingFang-SC-Medium",
    "fontWeight": "500",
    "color": "rgba(102,102,102,1)"
  },
  "addDevice": {
    "fontSize": "27",
    "lineHeight": "27",
    "fontFamily": "PingFang-SC-Medium",
    "fontWeight": "500",
    "color": "rgba(154,154,154,1)",
    "marginRight": "0"
  },
  "boxtwo": {
    "width": "670",
    "height": "110",
    "marginLeft": "20",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "tastyLife": {
    "fontSize": "31",
    "lineHeight": "31",
    "marginTop": "36",
    "fontFamily": "PingFang-SC-Bold",
    "fontWeight": "bold",
    "color": "rgba(35,38,39,1)"
  },
  "viewOpen": {
    "width": "44",
    "height": "44",
    "marginTop": "29"
  },
  "viewClose": {
    "width": "44",
    "height": "44",
    "marginTop": "29"
  },
  "boxOpen": {
    "width": "710",
    "height": "188",
    "position": "relative"
  },
  "infoboxOpen": {
    "width": "710",
    "height": "188",
    "position": "absolute",
    "top": "0",
    "left": "0",
    "backgroundColor": "rgba(200,175,112,1)",
    "opacity": 0.9
  },
  "boxClose": {
    "width": "710",
    "height": "188",
    "display": "flex",
    "flex": 2,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "textAlign": "center",
    "flexWrap": "wrap"
  },
  "perBoxOpen": {
    "width": "700",
    "height": "180",
    "marginBottom": "20",
    "backgroundColor": "#ffffff",
    "borderTopRightRadius": "20",
    "borderTopLeftRadius": "20",
    "borderBottomLeftRadius": "20",
    "borderBottomRightRadius": "20"
  },
  "perBoxClose": {
    "width": "220",
    "height": "180",
    "marginBottom": "20",
    "backgroundColor": "#ffffff",
    "borderTopRightRadius": "20",
    "borderTopLeftRadius": "20",
    "borderBottomLeftRadius": "20",
    "borderBottomRightRadius": "20"
  },
  "image": {
    "width": "120",
    "height": "108",
    "marginTop": "40",
    "marginLeft": "52"
  },
  "info": {
    "fontSize": "31",
    "lineHeight": "31",
    "marginTop": "56",
    "marginLeft": "262",
    "fontFamily": "PingFang-SC-Medium",
    "fontWeight": "500",
    "color": "rgba(255,255,255,1)"
  },
  "status": {
    "fontSize": "27",
    "lineHeight": "27",
    "marginTop": "24",
    "marginLeft": "262",
    "fontFamily": "PingFang-SC-Medium",
    "fontWeight": "500",
    "color": "rgba(255,255,255,1)"
  },
  "EveryBoxOpen": {
    "display": "flex",
    "flexDirection": "row"
  },
  "emptybox": {
    "width": "220",
    "height": "180"
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcMinibar = __webpack_require__(1);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var closebtn = '/src/assets/viewTwo.png';
var toggelbtn = '/src/assets/viewOne.png';
exports.default = {
  components: { WxcMinibar: _wxcMinibar2.default },
  name: "HelloWorld",
  data: function data() {
    return {
      msg: 'jump to bar',
      activeClass: "viewOpen",
      errorClass: 'viewClose',
      isActive: true,
      isActiveTwo: true,
      activeBox: 'boxOpen',
      inactiveBox: 'boxClose',
      activePerBox: 'perBoxOpen',
      activeInfoBox: "infoboxOpen",
      inactiveInfoBox: "infoboxClose",
      inactivePerBox: 'perBoxClose',
      activeEveryBox: 'EveryBoxOpen',
      inactiveEveryBox: 'EveryBoxClose',
      a: "",
      openbtn: '/src/assets/viewOne.png',
      list: [{ img: "/src/assets/daoshiji1.png", text: "蒸箱", id: "steam", status: '联网' }, { img: "/src/assets/youyanji1.png", text: "烤箱", id: "oven", status: "故障" }, { img: "/src/assets/zhengwei1.png", text: "蒸微一体机", id: "steamMicro", status: "运行中" }, { img: "/src/assets/zaoju.png", text: "灶具", id: "cooker", status: "待机" }, { img: "/src/assets/daoshiji1.png", text: "蒸箱", id: "steam", status: '联网' }],
      listTwo: [{ img: "/src/assets/daoshiji1.png", text: "蒸箱", id: "steam", status: '联网' }, { img: "/src/assets/youyanji1.png", text: "烤箱", id: "oven", status: "故障" }, { img: "/src/assets/zhengwei1.png", text: "蒸微一体机", id: "steamMicro", status: "运行中" }, { img: "/src/assets/zaoju.png", text: "灶具", id: "cooker", status: "待机" }, { img: "/src/assets/daoshiji1.png", text: "蒸箱", id: "steam", status: '联网' }],
      //  listTwo:[{img:"/src/assets/add-dev.png",text:"消毒柜",id:"sterilizer"},{img:"/src/assets/add-dev.png",text:"岛式机",id:'islandMachine'},{img:"/src/assets/add-dev.png",text:"热水器",id:'heater'},{img:"/src/assets/add-dev.png",text:"洗碗槽",id:'sink'},{img:"/src/assets/add-dev.png",text:"水槽洗碗机",id:'dishWasher'}],
      count: 0,
      flag: 0,
      info: null
    };
  },

  methods: {
    link: function link(e) {
      console.log(e);
      this.$router.push(e);
    },
    back: function back() {
      this.$router.go(-1);
    },
    jump: function jump(e) {
      this.$router.push(e);
    },
    changeView: function changeView(e) {
      switch (e) {
        case 'one':
          this.count++;
          this.isActive = !this.isActive;
          if (this.count % 2 == 1) {
            this.a = "fjijij";
            this.openbtn = closebtn;
          } else {
            this.a = "hhhhhhhh";
            this.openbtn = toggelbtn;
          }
          break;
        case 'two':
          this.flag++;
          this.isActiveTwo = !this.isActiveTwo;
          if (this.flag % 2 == 1) {
            this.a = "fjijij", this.openbtn = closebtn;
          } else {
            this.a = "hhhhhhhh";
            this.openbtn = toggelbtn;
          }
          break;

      }
    },
    detil: function detil(e) {
      console.log(e);
      this.$router.push(e);
    }
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(23)
)

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(25)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e026d130"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-minibar": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#009ff0"
  },
  "left": {
    "width": "180",
    "paddingLeft": "32"
  },
  "middle-title": {
    "fontSize": "30",
    "color": "#ffffff",
    "height": "36",
    "lineHeight": "34"
  },
  "right": {
    "width": "180",
    "paddingRight": "32",
    "alignItems": "flex-end"
  },
  "left-button": {
    "width": "21",
    "height": "36"
  },
  "right-button": {
    "width": "32",
    "height": "32"
  },
  "icon-text": {
    "fontSize": "28",
    "color": "#ffffff"
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Navigator = weex.requireModule('navigator');
exports.default = {
  props: {
    backgroundColor: {
      type: String,
      default: '#FFC900'
    },
    leftButton: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png'
    },
    textColor: {
      type: String,
      default: '#3D3D3D'
    },
    rightButton: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    useDefaultReturn: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    },
    barStyle: {
      type: Object
    }
  },
  computed: {
    newBarStyle: function newBarStyle() {
      var backgroundColor = this.backgroundColor,
          barStyle = this.barStyle;

      return _extends({
        backgroundColor: backgroundColor
      }, barStyle);
    }
  },
  methods: {
    leftButtonClicked: function leftButtonClicked() {
      if (this.useDefaultReturn) {
        Navigator.pop({}, function (e) {});
      }
      this.$emit('wxcMinibarLeftButtonClicked', {});
    },
    rightButtonClicked: function rightButtonClicked() {
      var hasRightContent = this.rightText || this.rightButton || this.$slots && this.$slots.right;
      hasRightContent && this.$emit('wxcMinibarRightButtonClicked', {});
    }
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wxc-minibar"],
    style: _vm.newBarStyle
  }, [_c('div', {
    staticClass: ["left"],
    attrs: {
      "ariaLabel": "返回",
      "accessible": true
    },
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_vm._t("left", [(_vm.leftButton && !_vm.leftText) ? _c('image', {
    staticClass: ["left-button"],
    attrs: {
      "src": _vm.leftButton
    }
  }) : _vm._e(), (_vm.leftText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.leftText))]) : _vm._e()])], 2), _vm._t("middle", [_c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right", [(_vm.rightButton && !_vm.rightText) ? _c('image', {
    staticClass: ["right-button"],
    attrs: {
      "src": _vm.rightButton,
      "ariaHidden": true
    }
  }) : _vm._e(), (_vm.rightText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()])], 2)], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', [_c('wxc-minibar', {
    staticStyle: {
      height: "100px"
    },
    attrs: {
      "title": "虚拟体验",
      "backgroundColor": "#fff",
      "textColor": "#000"
    }
  }), _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["boxone"],
    on: {
      "click": function($event) {
        _vm.link('myCooker')
      }
    }
  }, [_vm._m(0), _vm._m(1), _vm._m(2)]), _vm._m(3), _c('div', {
    staticClass: ["boxtwo", "boxCommon"]
  }, [_c('text', {
    staticClass: ["tastyLife"]
  }, [_vm._v("美味生活")]), _c('image', {
    class: [_vm.isActive ? _vm.activeClass : _vm.errorClass],
    attrs: {
      "src": _vm.openbtn
    },
    on: {
      "click": function($event) {
        _vm.changeView('one')
      }
    }
  })]), _c('div', {
    class: [_vm.isActive ? _vm.activeBox : _vm.inactiveBox]
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: index,
      class: [_vm.isActive ? _vm.activePerBox : _vm.inactivePerBox],
      on: {
        "click": function($event) {
          _vm.detil(item.id)
        }
      }
    }, [_c('div', {
      class: [_vm.isActive ? _vm.activeEveryBox : _vm.inactiveEveryBox]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "src": item.img,
        "alt": ""
      }
    }), _c('div', {
      class: [_vm.isActive ? _vm.activeInfoBox : _vm.inactiveInfoBox]
    }, [_c('text', {
      staticClass: ["info"]
    }, [_vm._v(_vm._s(item.text))]), _c('text', {
      staticClass: ["status"]
    }, [_vm._v(_vm._s(item.status))])])])])
  }))]), _c('div', [_c('router-view')], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["boxCommon", "mangerbox"]
  }, [_c('text', {
    staticClass: ["mangerinfo"]
  }, [_vm._v("我的大厨管家")]), _c('text', {
    staticClass: ["deviceinfo"]
  }, [_vm._v("已连接的设备 >")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["boxCommon", "boxwifi"]
  }, [_c('text', {
    staticClass: ["enviromentinfo"]
  }, [_vm._v("当前环境")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["boxCommon"]
  }, [_c('div', {
    staticClass: ["environment"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("空气质量")]), _c('text', {
    staticClass: ["goodinfo"]
  }, [_vm._v("优")]), _c('div', {
    staticClass: ["mypro"]
  }), _c('div', {
    staticClass: ["protext"]
  }, [_c('text', {
    staticClass: ["proinfo"]
  }, [_vm._v("pm")]), _c('text', {
    staticClass: ["proinfo"]
  }, [_vm._v("2.5")])])]), _c('div', {
    staticClass: ["environment"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("燃气")]), _c('image', {
    staticClass: ["wuxielouimg"],
    attrs: {
      "src": "/src/assets/wuxielou.png"
    }
  }), _c('text', {
    staticClass: ["xieloutext"]
  }, [_vm._v("无泄漏")])]), _c('div', {
    staticClass: ["environment"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("舒适指数")]), _c('text', {
    staticClass: ["comfortLevel"]
  }, [_vm._v("一般 ")]), _c('div', {
    staticClass: ["mypro", "justSo"]
  }), _c('div', {
    staticClass: ["protext"]
  }, [_c('text', {
    staticClass: ["proinfo"]
  }, [_vm._v("湿度")]), _c('text', {
    staticClass: ["proinfo"]
  }, [_vm._v("40%")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["boxCommon", "secondnav"]
  }, [_c('text', {
    staticClass: ["myChufang"]
  }, [_vm._v("我的智能厨房")]), _c('text', {
    staticClass: ["addDevice"]
  }, [_vm._v("添加设备  >")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(177)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\bar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1e084a5a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
  "button": {
    "width": "600",
    "marginTop": "30"
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexAmui = __webpack_require__(5);

exports.default = {
  name: 'bar',
  components: { AmNavBar: _weexAmui.AmNavBar, AmPopup: _weexAmui.AmPopup, AmButton: _weexAmui.AmButton, AmFlex: _weexAmui.AmFlex, AmWingBlank: _weexAmui.AmWingBlank },
  data: function data() {
    return {
      show: false,
      position: 'bottom',
      offset: {},
      autoClose: true,
      style: {}
    };
  },

  methods: {
    showPopup: function showPopup() {
      console.log('ppppp');
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(31);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(34)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-button\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2801363e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
  "am-button": {
    "height": "94",
    "lineHeight": "94",
    "textAlign": "center",
    "borderWidth": 1,
    "borderStyle": "solid",
    "borderRadius": "10",
    "fontSize": "36",
    "lines": 1,
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "am-button-default": {
    "color": "#000000",
    "backgroundColor": "#ffffff",
    "borderColor": "#dddddd"
  },
  "am-button-default-active": {
    "backgroundColor": "#dddddd",
    "borderColor": "#dddddd"
  },
  "am-button-default-disabled": {
    "opacity": 0.6,
    "color": "rgba(0,0,0,0.6)"
  },
  "am-button-primary": {
    "color": "#ffffff",
    "backgroundColor": "#108ee9",
    "borderColor": "#108ee9"
  },
  "am-button-primary-active": {
    "backgroundColor": "#0e80d2",
    "borderColor": "#0e80d2",
    "color": "rgba(255,255,255,0.3)"
  },
  "am-button-primary-disabled": {
    "opacity": 0.4,
    "color": "rgba(255,255,255,0.6)"
  },
  "am-button-warning": {
    "color": "#ffffff",
    "backgroundColor": "#e94f4f",
    "borderColor": "#e94f4f"
  },
  "am-button-warning-active": {
    "backgroundColor": "#d24747",
    "borderColor": "#d24747",
    "color": "rgba(255,255,255,0.3)"
  },
  "am-button-warning-disabled": {
    "opacity": 0.6,
    "color": "rgba(255,255,255,0.6)"
  },
  "am-button-ghost": {
    "backgroundColor": "rgba(0,0,0,0)",
    "borderColor": "#108ee9",
    "color": "#108ee9"
  },
  "am-button-ghost-active": {
    "color": "rgba(16,142,233,0.6)",
    "borderColor": "rgba(16,142,233,0.6)"
  },
  "am-button-ghost-disabled": {
    "color": "rgba(0,0,0,0.1)",
    "borderColor": "rgba(0,0,0,0.1)"
  },
  "am-button-small": {
    "fontSize": "26",
    "height": "60",
    "lineHeight": "60"
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'am-button',
  props: {
    width: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: '确认'
    },
    size: {
      type: String,
      default: 'large'
    },
    type: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      active: false
    };
  },

  computed: {
    btnClass: function btnClass() {
      var classMap = {
        'am-button': true
      };

      classMap['am-button-' + this.type] = true;
      classMap['am-button-' + this.type + '-active'] = !this.disabled && this.active;
      classMap['am-button-' + this.type + '-disabled'] = this.disabled;
      classMap['am-button-small'] = this.size === 'small';
      return Object.keys(classMap).filter(function (val) {
        return classMap[val];
      });
    },
    _style: function _style() {
      var _style = this.btnStyle;
      if (this.width) {
        _style.width = this.width;
      }
      return _style;
    }
  },
  methods: {
    _touchstart: function _touchstart() {
      this.active = true;
    },
    _touchend: function _touchend() {
      this.active = false;
    },
    handleClick: function handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    }
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    class: _vm.btnClass,
    style: _vm._style,
    on: {
      "touchstart": _vm._touchstart,
      "touchend": _vm._touchend,
      "touchcancel": _vm._touchend,
      "click": _vm.handleClick
    }
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(37)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-flex\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'am-flex',
  props: {
    gutter: {
      type: Number,
      default: 16
    },
    direction: {
      type: String,
      default: 'row',
      validator: function validator(value) {
        return ['column', 'row'].indexOf(value) !== -1;
      }
    },
    justify: {
      type: String,
      default: 'flex-start',
      validator: function validator(value) {
        return ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: 'stretch',
      validator: function validator(value) {
        return ['stretch', 'flex-start', 'flex-end', 'center'].indexOf(value) !== -1;
      }
    },
    wrap: {
      type: String,
      default: 'nowrap',
      validator: function validator(value) {
        return ['nowrap', 'wrap', 'wrap-reverse'];
      }
    }
  },
  computed: {
    style: function style() {
      return {
        flexDirection: this.direction,
        justifyContent: this.justify,
        alignItems: this.align,
        flexWrap: this.wrap
      };
    }
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["am-flex"],
    style: _vm.style
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(39)
)

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(41)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-flex\\item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1c9ccd70"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'am-flex-item',
  props: {
    flex: {
      type: Number,
      default: 1
    }
  },
  computed: {
    isFirstChild: function isFirstChild() {
      return this.$parent && this.$parent.$slots.default[0] === this.$vnode;
    },
    style: function style() {
      var marginLeft = !this.isFirstChild && this.$parent.gutter ? this.$parent.gutter : 0;
      return {
        flex: this.flex,
        marginLeft: marginLeft + 'px'
      };
    }
  },
  created: function created() {
    // console.log(this.gutter, this.$parent)
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["am-flex-item"],
    style: _vm.style
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(45)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-checkbox\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4b693be2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {
  "am-checkbox": {
    "overflow": "hidden",
    "width": "44",
    "height": "44",
    "borderWidth": "2",
    "borderColor": "#cccccc",
    "borderRadius": 50
  },
  "am-checkbox-checked": {
    "backgroundColor": "#108ee9",
    "borderColor": "#108ee9"
  },
  "am-checkbox-disabled": {
    "opacity": 0.3,
    "borderColor": "#888888",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "am-checkbox-inner": {
    "position": "relative",
    "flex": 1
  },
  "am-checkbox-icon-checked": {
    "position": "absolute",
    "top": "4",
    "right": "13",
    "width": "13",
    "height": "26",
    "borderStyle": "solid",
    "borderRightWidth": "2",
    "borderBottomWidth": "2",
    "borderColor": "#ffffff",
    "transform": "rotate(45deg)"
  },
  "am-checkbox-icon-disabled": {
    "borderColor": "#888888"
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'am-checkbox',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      test: false
    };
  },

  // created () {
  //   setInterval(() => {
  //     this.test = !this.test
  //   }, 3000)
  // },
  computed: {
    wrapClass: function wrapClass() {
      return _utils2.default.makeClassList({
        'am-checkbox': true,
        'am-checkbox-checked': this.checked,
        'am-checkbox-disabled': this.disabled
      });
    },
    iconClass: function iconClass() {
      return _utils2.default.makeClassList({
        // 'am-checkbox-icon': true,
        'am-checkbox-icon-checked': this.checked,
        'am-checkbox-icon-disabled': this.disabled
      });
    },
    style: function style() {
      var style = {};
      if (this.color) {
        if (this.checked && !this.disabled) {
          style.backgroundColor = this.color;
          style.borderColor = this.color;
        } else {
          // android里如果不设置，切换之后class里的样式就不见了， 应该是weex的bug
          style.borderColor = '#ccc';
        }
      }
      return style;
    }
  }
}; //
//
//
//
//
//
//
//

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.wrapClass,
    style: _vm.style
  }, [(_vm.checked) ? _c('div', {
    staticClass: ["am-checkbox-inner"]
  }, [_c('div', {
    class: _vm.iconClass
  })]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(47);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(48)
)

/* script */
__vue_exports__ = __webpack_require__(49)

/* template */
var __vue_template__ = __webpack_require__(50)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-list\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-60e8d02a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {
  "am-list-header": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "18",
    "paddingLeft": "30",
    "fontSize": "28",
    "color": "#888888",
    "boxSizing": "border-box",
    "backgroundColor": "#f5f5f9"
  },
  "am-list-footer": {
    "paddingTop": "18",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "fontSize": "28",
    "color": "#888888",
    "backgroundColor": "#f5f5f9"
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'am-list',
  props: {
    header: {
      type: String,
      default: null
    },
    footer: {
      type: String,
      default: null
    },
    headerStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    footerStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    noBorder: {
      type: Boolean,
      default: false
    }
  },
  provide: function provide() {
    return {
      noBorder: this.noBorder
    };
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["am-list"]
  }, [_vm._t("header", [(_vm.header) ? _c('text', {
    staticClass: ["am-list-header"],
    style: _vm.headerStyle
  }, [_vm._v(_vm._s(_vm.header))]) : _vm._e()]), _vm._t("default"), _vm._t("footer", [(_vm.footer) ? _c('text', {
    staticClass: ["am-list-footer"],
    style: _vm.footerStyle
  }, [_vm._v(_vm._s(_vm.footer))]) : _vm._e()])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = __webpack_require__(3);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_item).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {
  "am-list-extra": {
    "color": "#888888",
    "fontSize": "32"
  },
  "am-list-item": {
    "position": "relative",
    "paddingLeft": "30",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "am-list-item-tap": {
    "backgroundColor:active": "#dddddd"
  },
  "am-list-item-first": {
    "borderColor": "#dddddd",
    "borderTopWidth": 1
  },
  "am-list-item-last": {
    "borderColor": "#dddddd",
    "borderBottomWidth": 1
  },
  "am-list-line": {
    "flexDirection": "row",
    "alignItems": "center",
    "flex": 1,
    "paddingRight": "30",
    "paddingTop": "20",
    "paddingBottom": "18",
    "minHeight": "88"
  },
  "am-list-line-border": {
    "borderBottomColor": "#dddddd",
    "borderBottomWidth": 1
  },
  "am-list-line-last": {
    "borderBottomWidth": 0
  },
  "am-list-line-align-top": {
    "alignItems": "flex-start"
  },
  "am-list-line-align-middle": {
    "alignItems": "center"
  },
  "am-list-line-align-bottom": {
    "alignItems": "flex-end"
  },
  "am-list-thumb": {
    "marginRight": "30",
    "width": "44",
    "height": "44"
  },
  "am-list-content": {
    "flex": 1,
    "marginRight": "10"
  },
  "am-list-content-text": {
    "color": "#000000",
    "fontSize": "34",
    "lineHeight": "51"
  },
  "am-list-content-text-disabled": {
    "color": "#bbbbbb"
  },
  "am-list-content-text-2": {
    "maxWidth": "68"
  },
  "am-list-content-text-3": {
    "maxWidth": "102"
  },
  "am-list-content-text-4": {
    "maxWidth": "136"
  },
  "am-list-content-text-5": {
    "maxWidth": "170"
  },
  "am-list-content-text-6": {
    "maxWidth": "204"
  },
  "am-list-content-text-7": {
    "maxWidth": "238"
  },
  "am-list-content-brief": {
    "color": "#888888",
    "fontSize": "30",
    "lineHeight": "51"
  },
  "am-list-arrow": {
    "marginLeft": "16",
    "color": "#C7C7CC"
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _itemProps = __webpack_require__(12);

var _itemProps2 = _interopRequireDefault(_itemProps);

var _itemMixin = __webpack_require__(2);

var _itemMixin2 = _interopRequireDefault(_itemMixin);

var _amIcon = __webpack_require__(4);

var _amIcon2 = _interopRequireDefault(_amIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const arrowUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABnUlEQVRYR82XTW7CMBCFZzRehFW5SYlKkbwq3ABOULgBPQm9QekJ4AbQDUioKHCTsCKLRFMZRJVWceKfRG2WiZ332TOeN0YoeaIoaidJtiCil14vPJSNdf2GuolK/HxOV4jYYYYYkUdSPq5dhXTztADb7eccAJ5/TsSJlA/qfW1P6Q4kSboEwKcmIbQAN9Gmd6ISQIEUQ8Bcyu7ENxZGAE1CGAM0BWEFUAKxDgIahWEY24bEGkAJbDb7KSLP8mLMfGi1xMAWwgnguhP7MQC/+UI4A5RBCCEmpqXbC0APAbEQNDCB8AbwhagFIAfxCgB3t7wwMbHaAJTobhd1sixTjvkNcYXRm1jtAGmarRChbWpgtQGoY8nMs1/iJwAelvURtQAU1QQAOBFRv+okeAP4iF+yw7Z258drxI9ENK5a+e0/zgA68SCgvo0fOAEUmREAHG3FnUJQ3B3xRxCIoc3KnUKgac3epeyOXXPJOARNiBuHoClxI4A/a8vzVzPTuu6SB//9anax1ntV16tMxWX1lTlwvZ6nSyIxNS2ttiBf02PsISPWB9wAAAAASUVORK5CYII='
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'am-list-item',
  components: { AmIcon: _amIcon2.default },
  mixins: [_itemMixin2.default],
  props: (0, _itemProps2.default)(),
  data: function data() {
    return {
      // arrowUrl: arrowUrl
    };
  },

  inject: ['noBorder'],
  computed: {
    showArrow: function showArrow() {
      return this.arrow && this.arrow !== 'empty';
    },
    itemClass: function itemClass() {
      return _utils2.default.makeClassList({
        'am-list-item-tap': this.tapActive,
        'am-list-item-first': !this.noBorder && this._isFirstChild,
        'am-list-item-last': !this.noBorder && this._isLastChild
      });
    },
    lineClass: function lineClass() {
      return _utils2.default.makeClassList({
        'am-list-line-border': !this.noBorder,
        'am-list-line-align-top': this.align === 'top',
        'am-list-line-align-middle': this.align === 'middle',
        'am-list-line-align-bottom': this.align === 'bottom',
        // 'am-list-line-multiple': this.multiple || !!this.brief,
        'am-list-line-last': this._isLastChild
      });
    },

    // arrowClass () {
    //   return Utils.makeClassList({
    //     'am-list-arrow-vertical': this.arrow === 'down',
    //     'am-list-arrow-vertical-up': this.arrow === 'up'
    //   })
    // },
    contentTextClass: function contentTextClass() {
      return _utils2.default.makeClassList({
        'am-list-content-text-disabled': this.titleDisabled
      });
    }
  },
  methods: {
    handleClick: function handleClick($event) {
      this.$emit('click', $event);
    }
  }
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(55)
)

/* script */
__vue_exports__ = __webpack_require__(56)

/* template */
var __vue_template__ = __webpack_require__(58)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-icon\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-efcaf376"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {
  "am-icon-xxs": {
    "fontSize": "30",
    "lineHeight": "30"
  },
  "am-icon-xs": {
    "fontSize": "36",
    "lineHeight": "36"
  },
  "am-icon-sm": {
    "fontSize": "42",
    "lineHeight": "42"
  },
  "am-icon-md": {
    "fontSize": "44",
    "lineHeight": "44"
  },
  "am-icon-lg": {
    "fontSize": "72",
    "lineHeight": "72"
  }
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(57);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom'); //
//
//
//
//
//
//
//
//

exports.default = {
  name: 'am-icon',
  props: {
    type: {
      type: String,
      default: null
    },
    size: {
      type: [String, Number],
      default: 'md' // xxs,xs,sm,md,lg
    },
    color: {
      type: String,
      default: null
    },
    fontFamily: {
      type: String,
      default: 'AMUIIconFont'
    }
  },
  data: function data() {
    return {
      Icon: _icon2.default
    };
  },

  computed: {
    iconClass: function iconClass() {
      if (isNaN(this.size)) {
        return ['am-icon-' + this.size];
      } else {
        return null;
      }
    },
    iconStyle: function iconStyle() {
      var style = {
        color: this.color,
        fontFamily: this.fontFamily
      };
      if (!isNaN(this.size)) {
        style.fontSize = this.size + 'px';
        style.lineHeight = this.size + 'px';
      }
      return style;
    }
  },
  beforeCreate: function beforeCreate() {
    dom.addRule('fontFace', {
      'fontFamily': 'AMUIIconFont',
      'src': "url('https://at.alicdn.com/t/font_666184_6i47o5l7pbiysyvi.ttf')"
    });
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Icon = {
  'search': '\uEEA3',
  'reload': '\uEE47',
  'arrow-down': '\uEE4A',
  'arrow-up': '\uEE4B',
  'arrow-right': '\uEE4C',
  'arrow-left': '\uEE4D',
  'down': '\uEE4E',
  'up': '\uEE4F',
  'right': '\uEE50',
  'left': '\uEE51',
  'warning-circle': '\uEE5D',
  'warning-circle-o': '\uEE5E',
  'close-circle': '\uEE5F',
  'close-circle-o': '\uEE60',
  'check-circle': '\uEE61',
  'check-circle-o': '\uEE62',
  'check': '\uEE63',
  'clock-circle': '\uEE71',
  'clock-circle-o': '\uEE72',
  'ellipsis': '\uEEE4',
  'loading': '\uEEE3'
};
exports.default = Icon;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.type) ? _c('text', {
    staticClass: ["am-icon"],
    class: _vm.iconClass,
    style: _vm.iconStyle
  }, [_vm._v(_vm._s(_vm.Icon[_vm.type] || _vm.type))]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["am-list-item"],
    class: _vm.itemClass,
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("thumb", [(_vm.thumb) ? _c('image', {
    staticClass: ["am-list-thumb"],
    style: _vm.thumbStyle,
    attrs: {
      "src": _vm.thumb
    }
  }) : _vm._e()]), _c('div', {
    staticClass: ["am-list-line"],
    class: _vm.lineClass
  }, [(!!_vm.title) ? _c('div', {
    class: ['am-list-content', ("am-list-content-text-" + _vm.titleNumber)]
  }, [_c('text', {
    staticClass: ["am-list-content-text"],
    class: _vm.contentTextClass
  }, [_vm._v(_vm._s(_vm.title))]), _vm._t("brief", [(_vm.brief) ? _c('text', {
    staticClass: ["am-list-content-brief"]
  }, [_vm._v(_vm._s(_vm.brief))]) : _vm._e()])], 2) : _vm._e(), _vm._t("extra", [(_vm.extra) ? _c('text', {
    staticClass: ["am-list-extra"]
  }, [_vm._v(_vm._s(_vm.extra))]) : _vm._e()]), (_vm.showArrow) ? _c('am-icon', {
    staticClass: ["am-list-arrow"],
    attrs: {
      "type": _vm.arrow,
      "site": "xxs"
    }
  }) : _vm._e()], 2)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(61);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(62)
)

/* script */
__vue_exports__ = __webpack_require__(63)

/* template */
var __vue_template__ = __webpack_require__(64)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-list-input\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7d27e2b2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {
  "am-list-extra": {
    "color": "#888888",
    "fontSize": "32"
  },
  "am-list-input": {
    "color": "#000000",
    "fontSize": "34",
    "appearance": "none",
    "paddingTop": "4",
    "paddingBottom": "4",
    "borderWidth": 0,
    "backgroundColor": "rgba(0,0,0,0)",
    "boxSizing": "border-box",
    "flex": 1
  },
  "am-list-input-disabled": {
    "color": "#bbbbbb",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = __webpack_require__(3);

var _item2 = _interopRequireDefault(_item);

var _itemMixin = __webpack_require__(2);

var _itemMixin2 = _interopRequireDefault(_itemMixin);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'am-list-input',
  mixins: [_itemMixin2.default],
  components: {
    Item: _item2.default
  },
  props: {
    type: {
      type: String,
      default: 'text' // text，date，datetime，email， password，tel，time，url，number
    },
    value: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleNumber: {
      type: Number,
      default: 5
    },
    placeholder: {
      type: String,
      default: ''
    },
    thumb: {
      type: String,
      default: ''
    },
    thumbStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    align: {
      type: String,
      default: 'left'
    },
    extra: {
      type: String,
      default: ''
    },
    editable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    returnKeyType: {
      type: String,
      default: 'default' // defalut;go;next;search;send,done
    },
    maxLength: {
      type: Number,
      default: null
    },
    max: {
      type: String,
      default: null
    },
    min: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      inputValue: ''
    };
  },

  computed: {
    inputListeners: function inputListeners() {
      return Object.assign({},
      // 我们从父级添加所有的监听器
      this.$listeners,
      // 除了input事件， 其他事件和weex的input一样
      {
        // 这里确保组件配合 `v-model` 的工作
        input: this.onInput
      });
    },
    inputClass: function inputClass() {
      return _utils2.default.makeClassList({
        'am-list-input': true,
        'am-list-input-disabled': this.disabled,
        'am-list-input-uneditable': this.uneditable
      });
    },
    inputStyle: function inputStyle() {
      return {
        textAlign: this.align
      };
    },
    computeDisabled: function computeDisabled() {
      return this.disabled || !this.editable;
    }
  },
  methods: {
    onInput: function onInput($event) {
      this.inputValue = $event.value;
      // let args = ['input', ...arguments]
      this.$emit('input', this.inputValue);
    },

    // onChange () {
    //   let args = ['change', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onFocus () {
    //   let args = ['focus', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onBlur () {
    //   let args = ['blur', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onReturn () {
    //   let args = ['return', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onLongpress () {
    //   let args = ['longpress', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onAppear () {
    //   let args = ['appear', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onDisappear () {
    //   let args = ['disappear', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    focus: function focus() {
      typeof this.$refs.input.focus === 'function' && this.$refs.input.focus();
    },
    blur: function blur() {
      typeof this.$refs.input.blur === 'function' && this.$refs.input.blur();
    },
    setSelectionRange: function setSelectionRange(selectionStart, selectionEnd) {
      typeof this.$refs.input.setSelectionRange === 'function' && this.$refs.input.setSelectionRange(selectionStart, selectionEnd);
    },
    getSelectionRange: function getSelectionRange(callback) {
      typeof this.$refs.input.getSelectionRange === 'function' && this.$refs.input.getSelectionRange(callback);
    },

    // 0.18
    setTextFormatter: function setTextFormatter(params) {
      typeof this.$refs.input.setTextFormatter === 'function' && this.$refs.input.setTextFormatter(params);
    }
  },
  watch: {
    value: function value(val) {
      if (this.inputValue !== val) {
        this.inputValue = val;
      }
    },
    computeDisabled: function computeDisabled(val) {
      var _this = this;

      // web 里动态修改 disabled input 的 value 会被清空
      if (_utils2.default.isWeb()) {
        this.$nextTick(function () {
          _this.$refs.input.$el.value = _this.inputValue;
        });
      }
    }
  },
  mounted: function mounted() {
    console.log(this.$listeners);
    this.inputValue = this.value;
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('item', {
    attrs: {
      "arrow": "",
      "title": _vm.title,
      "titleNumber": _vm.titleNumber,
      "tapActive": false,
      "thumb": _vm.thumb,
      "thumbStyle": _vm.thumbStyle,
      "titleDisabled": _vm.disabled
    }
  }, [_c('template', {
    slot: "thumb"
  }, [_vm._t("thumb")], 2), _c('template', {
    slot: "extra"
  }, [_c('input', _vm._g({
    ref: "input",
    class: _vm.inputClass,
    style: _vm.inputStyle,
    attrs: {
      "placeholder": _vm.placeholder,
      "disabled": _vm.computeDisabled,
      "value": _vm.inputValue,
      "returnKeyType": _vm.returnKeyType,
      "autofocus": _vm.autofocus,
      "maxLength": _vm.maxLength,
      "max": _vm.max,
      "min": _vm.min,
      "type": _vm.type
    }
  }, _vm.inputListeners)), _vm._t("extra", [(_vm.extra) ? _c('text', {
    staticClass: ["am-list-extra"]
  }, [_vm._v(_vm._s(_vm.extra))]) : _vm._e()])], 2)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(66);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(67)
)

/* script */
__vue_exports__ = __webpack_require__(68)

/* template */
var __vue_template__ = __webpack_require__(69)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-list-textarea\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-747dcfce"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = {
  "am-list-extra": {
    "color": "#888888",
    "fontSize": "32"
  },
  "am-list-textarea-control": {
    "flex": 1,
    "fontSize": "34"
  },
  "am-list-textarea-placeholder": {
    "fontSize": "34",
    "opacity": 0
  },
  "am-list-textarea": {
    "color": "#000000",
    "fontSize": "34",
    "appearance": "none",
    "borderWidth": 0,
    "backgroundColor": "rgba(0,0,0,0)",
    "lineHeight": "51",
    "flex": 1,
    "resize": "none"
  },
  "am-list-textarea-disabled": {
    "color": "#bbbbbb",
    "backgroundColor": "#ffffff"
  },
  "am-list-textarea-auto-height": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = __webpack_require__(3);

var _item2 = _interopRequireDefault(_item);

var _itemMixin = __webpack_require__(2);

var _itemMixin2 = _interopRequireDefault(_itemMixin);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'am-list-textarea',
  mixins: [_itemMixin2.default],
  components: {
    Item: _item2.default
  },
  props: {
    type: {
      type: String,
      default: 'text' // text，date，datetime，email， password，tel，time，url，number
    },
    value: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    titleNumber: {
      type: Number,
      default: 5
    },
    placeholder: {
      type: String,
      default: null
    },
    rows: {
      type: Number,
      default: 2
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    thumb: {
      type: String,
      default: null
    },
    align: {
      type: String,
      default: 'left'
    },
    extra: {
      type: String,
      default: null
    },
    editable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    returnKeyType: {
      type: String,
      default: null // defalut;go;next;search;send,done
    }
  },
  data: function data() {
    return {
      textareaValue: this.value || ''
    };
  },

  computed: {
    textareaListeners: function textareaListeners() {
      return Object.assign({},
      // 我们从父级添加所有的监听器
      this.$listeners,
      // 除了input事件， 其他事件和weex的input一样
      {
        // 这里确保组件配合 `v-model` 的工作
        input: this.onInput
      });
    },
    textareaClass: function textareaClass() {
      return _utils2.default.makeClassList({
        'am-list-textarea': true,
        // 'am-list-textarea-auto-height': this.autoHeight,
        'am-list-textarea-disabled': this.disabled,
        'am-list-textarea-uneditable': this.uneditable
      });
    },
    textareaStyle: function textareaStyle() {
      return {
        textAlign: this.align
      };
    },
    computeDisabled: function computeDisabled() {
      return this.disabled || !this.editable;
    },
    computeRows: function computeRows() {
      if (this.autoHeight) {
        return Math.max(this.rows, this.textareaValue.split('\n').length);
      }
      return this.rows;
    },
    placeholderText: function placeholderText() {
      return this.textareaValue;
    }
  },
  methods: {
    onInput: function onInput($event) {
      this.textareaValue = $event.value;
      this.$emit('input', this.textareaValue);
    },

    // onChange () {
    //   let args = ['change', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onFocus () {
    //   let args = ['focus', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onBlur () {
    //   let args = ['blur', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onReturn () {
    //   let args = ['return', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onLongpress () {
    //   let args = ['longpress', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onAppear () {
    //   let args = ['appear', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    // onDisappear () {
    //   let args = ['disappear', ...arguments]
    //   this.$emit.apply(this, args)
    // },
    focus: function focus() {
      typeof this.$refs.textarea.focus === 'function' && this.$refs.textarea.focus();
    },
    blur: function blur() {
      typeof this.$refs.textarea.blur === 'function' && this.$refs.textarea.blur();
    },
    setSelectionRange: function setSelectionRange(selectionStart, selectionEnd) {
      typeof this.$refs.textarea.setSelectionRange === 'function' && this.$refs.textarea.setSelectionRange(selectionStart, selectionEnd);
    },
    getSelectionRange: function getSelectionRange(callback) {
      typeof this.$refs.textarea.getSelectionRange === 'function' && this.$refs.textarea.getSelectionRange(callback);
    },

    // 0.18
    setTextFormatter: function setTextFormatter(params) {
      typeof this.$refs.textarea.setTextFormatter === 'function' && this.$refs.textarea.setTextFormatter(params);
    }
  },
  watch: {
    value: function value(val) {
      if (this.textareaValue !== val) {
        this.textareaValue = val;
      }
    },
    computeDisabled: function computeDisabled(val) {
      var _this = this;

      // web 里动态修改 disabled input 的 value 会被清空
      if (_utils2.default.isWeb()) {
        this.$nextTick(function () {
          _this.$refs.textarea.$el.value = _this.textareaValue;
        });
      }
    },
    computeRows: function computeRows() {
      var _this2 = this;

      if (_utils2.default.isWeb()) {
        this.$nextTick(function () {
          _this2.$refs.textarea.$el.value = _this2.textareaValue;
        });
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('item', {
    attrs: {
      "arrow": "",
      "title": _vm.title,
      "titleNumber": _vm.titleNumber,
      "tapActive": false,
      "thumb": _vm.thumb,
      "titleDisabled": _vm.disabled,
      "align": "top",
      "multiple": true
    }
  }, [_c('template', {
    slot: "thumb"
  }, [_vm._t("thumb")], 2), _c('template', {
    slot: "extra"
  }, [_c('textarea', _vm._g({
    ref: "textarea",
    class: _vm.textareaClass,
    style: _vm.textareaStyle,
    attrs: {
      "placeholder": _vm.placeholder,
      "disabled": _vm.computeDisabled,
      "value": _vm.textareaValue,
      "returnKeyType": _vm.returnKeyType,
      "autofocus": _vm.autofocus,
      "rows": _vm.computeRows
    }
  }, _vm.textareaListeners)), _vm._t("extra", [(_vm.extra) ? _c('text', {
    staticClass: ["am-list-extra"]
  }, [_vm._v(_vm._s(_vm.extra))]) : _vm._e()])], 2)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(71);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(72)
)

/* script */
__vue_exports__ = __webpack_require__(73)

/* template */
var __vue_template__ = __webpack_require__(74)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-list-radio\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-021ffcd0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {
  "am-radio": {
    "marginRight": "16",
    "transform": "rotate(45deg)"
  },
  "am-radio-inner": {
    "width": "16",
    "height": "32",
    "borderStyle": "solid",
    "borderRightWidth": "3",
    "borderBottomWidth": "3",
    "borderColor": "#108ee9",
    "boxSizing": "content-box"
  },
  "am-radio-inner-disabled": {
    "borderColor": "#bbbbbb"
  }
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _itemMixin = __webpack_require__(2);

var _itemMixin2 = _interopRequireDefault(_itemMixin);

var _item = __webpack_require__(3);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'am-list-radio',
  components: {
    Item: _item2.default
  },
  mixins: [_itemMixin2.default],
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    thumb: {
      type: String,
      default: null
    },
    thumbStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    brief: {
      type: String,
      default: null
    },
    align: {
      type: String,
      default: 'middle'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {};
  },

  computed: {
    innerClass: function innerClass() {
      return _utils2.default.makeClassList({
        'am-radio-inner': true,
        'am-radio-inner-disabled': this.disabled
      });
    },
    innerStyle: function innerStyle() {
      var style = {};
      if (this.color && !this.disabled) {
        style.borderColor = this.color;
      }
      return style;
    }
  },
  methods: {
    handleClick: function handleClick($event) {
      if (this.disabled) return;
      this.$emit('change', $event);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('item', {
    attrs: {
      "arrow": "",
      "title": _vm.title,
      "thumb": _vm.thumb,
      "thumbStyle": _vm.thumbStyle,
      "titleDisabled": _vm.disabled,
      "tapActive": !_vm.disabled,
      "brief": _vm.brief,
      "align": _vm.align
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('template', {
    slot: "thumb"
  }, [_vm._t("thumb")], 2), _c('template', {
    slot: "brief"
  }, [_vm._t("brief")], 2), (_vm.checked) ? _c('div', {
    staticClass: ["am-radio"],
    attrs: {
      "slot": "extra"
    },
    slot: "extra"
  }, [_c('div', {
    class: _vm.innerClass,
    style: _vm.innerStyle
  })]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(76);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(77)
)

/* script */
__vue_exports__ = __webpack_require__(78)

/* template */
var __vue_template__ = __webpack_require__(79)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-list-checkbox\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e6c1b53c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = {
  "am-list-checkbox-left": {
    "marginRight": "30"
  }
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _item = __webpack_require__(3);

var _item2 = _interopRequireDefault(_item);

var _amCheckbox = __webpack_require__(11);

var _amCheckbox2 = _interopRequireDefault(_amCheckbox);

var _itemMixin = __webpack_require__(2);

var _itemMixin2 = _interopRequireDefault(_itemMixin);

var _itemProps = __webpack_require__(12);

var _itemProps2 = _interopRequireDefault(_itemProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var props = (0, _itemProps2.default)();
props.arrow.default = 'empty';
delete props.tapActive;

exports.default = {
  name: 'am-list-checkbox',
  components: {
    Item: _item2.default,
    AmCheckbox: _amCheckbox2.default
  },
  mixins: [_itemMixin2.default],
  props: _extends({}, props, {
    value: {},
    checkedValues: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null
    },
    left: {
      type: Boolean,
      default: false
    }
  }),
  computed: {
    classList: function classList() {
      return _utils2.default.makeClassList({
        'am-list-checkbox-left': this.left
      });
    },
    checked: function checked() {
      return this.checkedValues.indexOf(this.value) > -1;
    },
    itemProps: function itemProps() {
      var _this = this;

      var itemProps = {};
      Object.keys(props).map(function (name) {
        itemProps[name] = _this[name];
      });
      itemProps.titleDisabled = this.disabled;
      itemProps.tapActive = !this.disabled;
      return itemProps;
    }
  },
  methods: {
    handleClick: function handleClick() {
      if (this.disabled) return;
      var data = [].concat(_toConsumableArray(this.checkedValues));
      if (this.checked) {
        data.splice(this.checkedValues.indexOf(this.value), 1);
      } else {
        data.push(this.value);
      }
      this.$emit('update:checkedValues', data);
      // this.$emit('change', data)
    }
  }
};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('item', _vm._b({
    on: {
      "click": _vm.handleClick
    }
  }, 'item', _vm.itemProps, false), [_c('template', {
    slot: "brief"
  }, [_vm._t("brief")], 2), _c('template', {
    slot: !_vm.left ? 'thumb' : 'extra'
  }, [_vm._t(!_vm.left ? 'thumb' : 'extra')], 2), _c('am-checkbox', {
    class: _vm.classList,
    attrs: {
      "slot": _vm.left ? 'thumb' : 'extra',
      "checked": _vm.checked,
      "disabled": _vm.disabled,
      "color": _vm.color
    },
    slot: _vm.left ? 'thumb' : 'extra'
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(81);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(82)
)

/* script */
__vue_exports__ = __webpack_require__(83)

/* template */
var __vue_template__ = __webpack_require__(84)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-white-space\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-15fcb832"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = {
  "am-white-space-xs": {
    "height": "6"
  },
  "am-white-space-sm": {
    "height": "12"
  },
  "am-white-space-md": {
    "height": "18"
  },
  "am-white-space-lg": {
    "height": "30"
  },
  "am-white-space-xl": {
    "height": "42"
  }
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

exports.default = {
  name: 'am-white-space',
  props: {
    size: {
      type: String,
      default: 'md' // xs,sm,md,lg,xl
    }
  }
};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [("am-white-space-" + _vm.size)]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(86);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(87)
)

/* script */
__vue_exports__ = __webpack_require__(88)

/* template */
var __vue_template__ = __webpack_require__(89)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-wing-blank\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2197e91e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = {
  "am-wing-blank-sm": {
    "marginLeft": "10",
    "marginRight": "10"
  },
  "am-wing-blank-md": {
    "marginLeft": "16",
    "marginRight": "16"
  },
  "am-wing-blank-lg": {
    "marginLeft": "30",
    "marginRight": "30"
  }
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'am-wing-blank',
  props: {
    size: {
      type: String,
      default: 'lg'
    }
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [("am-wing-blank-" + _vm.size)]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(91);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(92)
)

/* script */
__vue_exports__ = __webpack_require__(93)

/* template */
var __vue_template__ = __webpack_require__(94)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-switch\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-48302bc0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = {
  "am-switch": {
    "width": "102",
    "height": "62",
    "borderRadius": "62",
    "boxSizing": "border-box",
    "backgroundColor": "#e5e5e5",
    "position": "relative",
    "overflow": "hidden"
  },
  "am-switch-checked": {
    "backgroundColor": "#4dd865"
  },
  "am-switch-disabled": {
    "opacity": 0.3
  },
  "am-switch-inner": {
    "height": "56",
    "width": "56",
    "borderRadius": "56",
    "backgroundColor": "#ffffff",
    "position": "absolute",
    "zIndex": 2,
    "left": "3",
    "top": "3",
    "transitionProperty": "left",
    "transitionDuration": 200,
    "boxShadow": "4px 4px 8px rgba(0, 0, 0, 0.21)"
  },
  "@TRANSITION": {
    "am-switch-inner": {
      "property": "left",
      "duration": 200
    },
    "am-switch-animate": {
      "property": "transform",
      "duration": 200
    }
  },
  "am-switch-inner-checked": {
    "left": "43"
  },
  "am-switch-animate": {
    "position": "absolute",
    "left": "3",
    "top": "3",
    "width": "96",
    "height": "56",
    "borderRadius": "56",
    "boxSizing": "border-box",
    "backgroundColor": "#ffffff",
    "zIndex": 1,
    "transitionProperty": "transform",
    "transitionDuration": 200,
    "transform": "scale(1)"
  },
  "am-switch-animate-checked": {
    "transform": "scale(0)"
  }
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = weex.requireModule('animation'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'am-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null
    },
    native: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isIOS: _utils2.default.isIOS(),
      checked: this.value
    };
  },

  computed: {
    showNative: function showNative() {
      return this.native || this.isIOS && !this.color;
    },
    switchClass: function switchClass() {
      return _utils2.default.makeClassList({
        'am-switch-checked': this.checked,
        'am-switch-disabled': this.disabled
      });
    },
    switchInnerClass: function switchInnerClass() {
      return _utils2.default.makeClassList({
        'am-switch-inner-checked': this.checked
      });
    },
    switchAnimateClass: function switchAnimateClass() {
      return _utils2.default.makeClassList({
        'am-switch-animate-checked': this.checked
      });
    },
    switchStyle: function switchStyle() {
      var style = {};
      if (this.color) {
        style.backgroundColor = this.checked ? this.color : '#e5e5e5';
      }
      return style;
    }
  },
  methods: {
    handleClick: function handleClick() {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.$emit('input', this.checked);
        this.$emit('change', this.checked);
      }
    }
  },
  watch: {
    value: function value(newVal) {
      this.checked = newVal;
    },
    checked: function checked(val) {
      // ios  css 的 scale 动画 有问题， 所以这里用 animation 实现
      if (this.isIOS && this.color) {
        animation.transition(this.$refs.animate, {
          styles: {
            transform: 'scale(' + (val ? '0' : '1') + ')'
          },
          duration: 300, // ms
          timingFunction: 'ease',
          needLayout: false,
          delay: 0 // ms
        });
      }
      // animation.transition(this.$refs.inner, {
      //   styles: {
      //     transform: `translateX(${val ? '40' : '0'})`
      //   },
      //   duration: 300, // ms
      //   timingFunction: 'ease',
      //   needLayout: false,
      //   delay: 0 // ms
      // })
    }
  }
};

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isIOS && !_vm.color) ? _c('switch', {
    attrs: {
      "checked": _vm.checked,
      "disabled": _vm.disabled
    },
    on: {
      "change": _vm.handleClick
    }
  }) : _c('div', {
    staticClass: ["am-switch"],
    class: _vm.switchClass,
    style: _vm.switchStyle,
    on: {
      "click": _vm.handleClick
    }
  }, [_c('div', {
    ref: "animate",
    staticClass: ["am-switch-animate"],
    class: _vm.switchAnimateClass
  }), _c('div', {
    staticClass: ["am-switch-inner"],
    class: _vm.switchInnerClass
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(96);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(97)
)

/* script */
__vue_exports__ = __webpack_require__(98)

/* template */
var __vue_template__ = __webpack_require__(99)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-grid\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-82190e5c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = {
  "am-grid-line": {
    "borderColor": "#dddddd",
    "borderBottomWidth": 1,
    "borderLeftWidth": 1
  },
  "am-grid-item": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "am-grid-item-line": {
    "borderRightWidth": 1,
    "borderTopWidth": 1,
    "borderColor": "#dddddd"
  },
  "am-grid-item-tap": {
    "backgroundColor:active": "#dddddd"
  },
  "am-grid-icon": {
    "marginTop": "18"
  },
  "am-grid-text": {
    "marginTop": "18",
    "fontSize": "24",
    "color": "#000000"
  }
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _amFlex = __webpack_require__(9);

var _amFlex2 = _interopRequireDefault(_amFlex);

var _amFlexItem = __webpack_require__(10);

var _amFlexItem2 = _interopRequireDefault(_amFlexItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'am-grid',
  components: {
    AmFlex: _amFlex2.default,
    AmFlexItem: _amFlexItem2.default
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    columnNum: {
      type: Number,
      default: 4
    },
    hasLine: {
      type: Boolean,
      default: true
    },
    itemStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    iconStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    rowArr: function rowArr() {
      var _this = this;

      var rowArr = [];
      var rowCount = void 0;
      this.data.forEach(function (item, index) {
        rowCount = Math.floor(index / _this.columnNum);
        if (!rowArr[rowCount]) {
          rowArr[rowCount] = [];
        }
        rowArr[rowCount].push(item);
      });

      while (rowArr[rowCount].length !== this.columnNum) {
        rowArr[rowCount].push(false);
      }
      return rowArr;
    },
    gridClass: function gridClass() {
      return _utils2.default.makeClassList({
        'am-grid': true,
        'am-grid-line': this.hasLine
      });
    },
    itemClass: function itemClass() {
      return _utils2.default.makeClassList({
        'am-grid-item': true,
        'am-grid-item-line': this.hasLine
      });
    },
    itemWidth: function itemWidth() {
      return 750 / this.columnNum;
    },
    _itemStyle: function _itemStyle() {
      return _extends({
        height: this.itemWidth + 'px'
      }, this.itemStyle);
    },
    _iconStyle: function _iconStyle() {
      var width = this.itemWidth * 0.28 + 'px';
      return _extends({
        width: width,
        height: width
      }, this.iconStyle);
    }
  },
  methods: {
    handleClick: function handleClick($event, item) {
      if (item) {
        this.$emit('click', item, this.data.indexOf(item));
      }
    },
    getItemClass: function getItemClass(item) {
      return _utils2.default.makeClassList({
        'am-grid-item': true,
        'am-grid-item-line': this.hasLine,
        'am-grid-item-tap': !!item
      });
    }
  }
};

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.gridClass
  }, _vm._l((_vm.rowArr), function(row, rowIndex) {
    return _c('am-flex', {
      key: rowIndex,
      staticClass: ["am-grid-row"],
      attrs: {
        "gutter": 0
      }
    }, _vm._l((row), function(item, index) {
      return _c('div', {
        key: index,
        class: _vm.getItemClass(item),
        style: _vm._itemStyle,
        on: {
          "click": function($event) {
            _vm.handleClick($event, item)
          }
        }
      }, [(item) ? [_c('image', {
        staticClass: ["am-grid-icon"],
        style: _vm._iconStyle,
        attrs: {
          "src": item.icon
        }
      }), (item.text) ? _c('text', {
        staticClass: ["am-grid-text"]
      }, [_vm._v(_vm._s(item.text))]) : _vm._e()] : _vm._e()], 2)
    }))
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(101)
)

/* script */
__vue_exports__ = __webpack_require__(102)

/* template */
var __vue_template__ = __webpack_require__(103)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-nav-bar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6980630e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = {
  "am-nav-bar": {
    "alignItems": "stretch",
    "height": "90",
    "backgroundColor": "#108ee9",
    "flexDirection": "row"
  },
  "am-nav-bar-left": {
    "flex": 1,
    "alignItems": "stretch",
    "flexDirection": "row"
  },
  "am-nav-bar-right": {
    "flex": 1,
    "alignItems": "stretch",
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  "am-nav-bar-title": {
    "flex": 2,
    "textAlign": "center",
    "alignSelf": "center",
    "fontSize": "36",
    "whiteSpace": "nowrap",
    "color": "#ffffff"
  },
  "am-nav-bar-btn": {
    "minWidth": "90",
    "paddingLeft": "23",
    "paddingRight": "23",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor:active": "#0e80d2"
  },
  "am-nav-bar-btn-icon": {
    "color": "#ffffff"
  },
  "am-nav-bar-btn-text": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "am-nav-bar-light": {
    "backgroundColor": "#ffffff"
  },
  "am-nav-bar-light-title": {
    "color": "#000000"
  },
  "am-nav-bar-light-btn": {
    "backgroundColor:active": "#dddddd"
  },
  "am-nav-bar-light-btn-icon": {
    "color": "#108ee9"
  },
  "am-nav-bar-light-btn-text": {
    "color": "#108ee9"
  }
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Utils from '../utils/index'
exports.default = {
  name: 'am-nav-bar',
  props: {
    mode: {
      type: String,
      default: 'dark' // dark, light
    },
    title: {
      type: String,
      default: null
    },
    leftBtn: {
      type: Array,
      default: function _default() {
        return [{
          is: 'icon',
          type: 'left',
          onClick: function onClick() {
            Navigator.pop({}, function (e) {});
          }
        }];
      }
    },
    rightBtn: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  components: { AmIcon: _index2.default },
  computed: {
    navBarClass: function navBarClass() {
      return ['am-nav-bar-' + this.mode];
    },
    titleClass: function titleClass() {
      return ['am-nav-bar-' + this.mode + '-title'];
    },
    left: function left() {
      return this.makeBtn(this.leftBtn);
    },
    right: function right() {
      return this.makeBtn(this.rightBtn);
    }
  },
  methods: {
    makeBtn: function makeBtn(btns) {
      return btns.map(function (item) {
        var option = item;
        if (typeof item === 'string') {
          option = {
            is: 'icon',
            type: item
          };
        }
        return option;
      });
    },
    handleClick: function handleClick(item) {
      if (typeof item.onClick === 'function') {
        item.onClick();
      } else {
        this.$emit('click', item.key || item.type || item.text || item.src);
      }
    }
  }
};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['am-nav-bar', ("am-nav-bar-" + _vm.mode)]
  }, [_c('div', {
    staticClass: ["am-nav-bar-left"]
  }, [_vm._t("left", _vm._l((_vm.left), function(item, index) {
    return _c('div', {
      key: index,
      class: ['am-nav-bar-btn', ("am-nav-bar-" + _vm.mode + "-btn")],
      on: {
        "click": function($event) {
          _vm.handleClick(item)
        }
      }
    }, [(item.is === 'icon') ? _c('am-icon', {
      class: ['am-nav-bar-btn-icon', ("am-nav-bar-" + _vm.mode + "-btn-icon")],
      attrs: {
        "type": item.type
      }
    }) : (item.is === 'text') ? _c('text', {
      class: ['am-nav-bar-btn-text', ("am-nav-bar-" + _vm.mode + "-btn-text")]
    }, [_vm._v(_vm._s(item.text))]) : _vm._e()], 1)
  }))], 2), _vm._t("title", [_c('text', {
    class: ['am-nav-bar-title', ("am-nav-bar-" + _vm.mode + "-title")],
    on: {
      "click": function($event) {
        _vm.handleClick({
          key: 'title'
        })
      }
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["am-nav-bar-right"]
  }, [_vm._t("right", _vm._l((_vm.right), function(item, index) {
    return _c('div', {
      key: index,
      class: ['am-nav-bar-btn', ("am-nav-bar-" + _vm.mode + "-btn")],
      on: {
        "click": function($event) {
          _vm.handleClick(item)
        }
      }
    }, [(item.is === 'icon') ? _c('am-icon', {
      class: ['am-nav-bar-btn-icon', ("am-nav-bar-" + _vm.mode + "-btn-icon")],
      attrs: {
        "type": item.type
      }
    }) : (item.is === 'text') ? _c('text', {
      class: ['am-nav-bar-btn-text', ("am-nav-bar-" + _vm.mode + "-btn-text")]
    }, [_vm._v(_vm._s(item.text))]) : _vm._e()], 1)
  }))], 2)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(105);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(106)
)

/* script */
__vue_exports__ = __webpack_require__(107)

/* template */
var __vue_template__ = __webpack_require__(108)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-tab-bar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-abd2952a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = {
  "am-tab-bar": {
    "height": "100",
    "borderColor": "#dddddd",
    "borderTopWidth": 1,
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "stretch"
  }
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

// import Utils from '../utils'

exports.default = {
  name: 'am-tab-bar',
  props: {
    barTintColor: {
      type: String,
      default: 'white'
    },
    tintColor: {
      type: String,
      default: '#108ee9'
    },
    unselectedTintColor: {
      type: String,
      default: '#888888'
    },
    iconSize: {
      type: [Number, String],
      default: null
    },
    iconFontFamily: {
      type: String,
      default: null
    },
    imageSize: {
      type: [Number, Array],
      default: null // [width, height]
    }
  },
  computed: {
    style: function style() {
      var style = {};
      if (this.barTintColor) {
        style.backgroundColor = this.barTintColor;
      }
      return style;
    }
  }
};

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["am-tab-bar"],
    style: _vm.style
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = __webpack_require__(110);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_item).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(111)
)

/* script */
__vue_exports__ = __webpack_require__(112)

/* template */
var __vue_template__ = __webpack_require__(113)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-tab-bar\\item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7e7415ec"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = {
  "am-tab-bar-item": {
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "am-tab-bar-item-wrap": {
    "alignItems": "center",
    "paddingLeft": "8",
    "paddingRight": "8"
  },
  "am-tab-bar-item-image": {
    "height": "44",
    "width": "44"
  },
  "am-tab-bar-item-title": {
    "fontSize": "24",
    "marginTop": "6",
    "lineHeight": "24"
  },
  "am-tab-bar-item-dot": {
    "position": "absolute",
    "right": 0,
    "top": 0,
    "backgroundColor": "#ff5b05",
    "width": "16",
    "height": "16",
    "borderRadius": "16"
  }
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _amIcon = __webpack_require__(4);

var _amIcon2 = _interopRequireDefault(_amIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'am-tab-bar-item',
  components: { AmIcon: _amIcon2.default },
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    iconSize: {
      type: [Number, String],
      default: null
    },
    iconFontFamily: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    imageActive: {
      type: String,
      default: null
    },
    imageSize: {
      type: [Number, Array],
      default: null // [width, height]
    },
    title: {
      type: String,
      default: null
    },
    tintColor: {
      type: String,
      default: null
    },
    unselectedTintColor: {
      type: String,
      default: null
    },
    dot: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    textStyle: function textStyle() {
      return {
        color: this.selected ? this.tintColor || this.$parent.tintColor : this.unselectedTintColor || this.$parent.unselectedTintColor
      };
    },
    iconProps: function iconProps() {
      var props = {
        type: this.icon,
        color: this.textStyle.color
      };
      if (this.iconFontFamily || this.$parent.iconFontFamily) {
        props.fontFamily = this.iconFontFamily || this.$parent.iconFontFamily;
      }
      if (this.iconSize || this.$parent.iconSize) {
        props.size = this.iconSize || this.$parent.iconSize;
      }
      return props;
    },
    imageStyle: function imageStyle() {
      var style = {};

      if (this.imageSize || this.$parent.imageSize) {
        var size = this.imageSize || this.$parent.imageSize;
        if (Array.isArray(size)) {
          style.width = size[0] + 'px';
          style.height = size[1] + 'px';
        } else {
          style.width = size + 'px';
          style.height = size + 'px';
        }
      }
      return style;
    }
  },
  methods: {
    handelClick: function handelClick($event) {
      console.log('click');
      this.$emit('click', $event);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Utils from '../utils'

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["am-tab-bar-item"],
    on: {
      "click": _vm.handelClick
    }
  }, [_c('div', {
    staticClass: ["am-tab-bar-item-wrap"]
  }, [(_vm.icon) ? _c('am-icon', _vm._b({
    staticClass: ["am-tab-bar-item-icon"]
  }, 'am-icon', _vm.iconProps, false)) : (_vm.image) ? _c('image', {
    staticClass: ["am-tab-bar-item-image"],
    style: _vm.imageStyle,
    attrs: {
      "src": _vm.selected && _vm.imageActive ? _vm.imageActive : _vm.image
    }
  }) : _vm._e(), (_vm.dot) ? _c('div', {
    staticClass: ["am-tab-bar-item-dot"]
  }) : _vm._e()], 1), (_vm.title) ? _c('text', {
    staticClass: ["am-tab-bar-item-title"],
    style: _vm.textStyle
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(115);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(116)
)

/* script */
__vue_exports__ = __webpack_require__(117)

/* template */
var __vue_template__ = __webpack_require__(118)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-segmented-control\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5f3481f2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = {
  "am-segment": {
    "flexDirection": "row",
    "height": "54",
    "opacity": 1
  },
  "am-segment-disabled": {
    "opacity": 0.5
  },
  "am-segment-item": {
    "flex": 1,
    "textAlign": "center",
    "color": "#108ee9",
    "fontSize": "28",
    "lineHeight": "54",
    "borderColor": "#108ee9",
    "borderRightWidth": 1,
    "borderBottomWidth": 1,
    "borderTopWidth": 1
  },
  "am-segment-item-first": {
    "borderLeftWidth": 1,
    "borderTopLeftRadius": "10",
    "borderBottomLeftRadius": "10"
  },
  "am-segment-item-last": {
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10"
  },
  "am-segment-item-selected": {
    "backgroundColor": "#108ee9",
    "color": "#ffffff"
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'am-segmented-control',
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    values: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    selected: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tintColor: {
      type: String,
      default: null
    }
  },
  computed: {
    segmentClass: function segmentClass() {
      return _index2.default.makeClassList({
        'am-segment': true,
        'am-segment-disabled': this.disabled
      });
    }
  },
  methods: {
    getItemClass: function getItemClass(index) {
      return _index2.default.makeClassList({
        'am-segment-item': true,
        'am-segment-item-first': index === 0,
        'am-segment-item-last': index === this.values.length - 1,
        'am-segment-item-selected': this.selected === index
      });
    },
    getSegmentItemStyle: function getSegmentItemStyle(index) {
      var style = {};
      if (this.tintColor) {
        style.borderColor = this.tintColor;
        if (this.selected === index) {
          style.backgroundColor = this.tintColor;
          style.color = '#ffffff';
        } else {
          style.color = this.tintColor;
        }
      }
      return style;
    },
    handleClick: function handleClick(index, value) {
      if (this.disabled) return;
      this.$emit('change', index, value);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.segmentClass
  }, _vm._l((_vm.values), function(value, index) {
    return _c('text', {
      key: index,
      class: _vm.getItemClass(index),
      style: _vm.getSegmentItemStyle(index),
      on: {
        "click": function($event) {
          _vm.handleClick(index, value)
        }
      }
    }, [_vm._v(_vm._s(value))])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(120);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(121)
)

/* script */
__vue_exports__ = __webpack_require__(122)

/* template */
var __vue_template__ = __webpack_require__(123)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-tabs\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-37e389ec"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = {
  "am-tabs": {
    "backgroundColor": "#ffffff",
    "borderColor": "#dddddd",
    "display": "flex"
  },
  "am-tabs-wrap-horizontal": {
    "height": "88",
    "overflowY": "hidden",
    "overflowX": "scroll"
  },
  "am-tabs-wrap-vertical": {
    "overflowX": "hidden",
    "overflowY": "scroll"
  },
  "am-tabs-top": {
    "borderBottomWidth": 1
  },
  "am-tabs-bottom": {
    "borderTopWidth": 1
  },
  "am-tabs-left": {
    "borderRightWidth": 1
  },
  "am-tabs-right": {
    "borderLeftWidth": 1
  },
  "am-tabs-horizontal": {
    "flexDirection": "row"
  },
  "am-tabs-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "height": "87"
  },
  "am-tabs-item-text": {
    "fontSize": "30"
  },
  "am-tabs-item-text-selected": {
    "color": "#108ee9"
  },
  "am-tabs-item-underline": {
    "position": "absolute",
    "borderColor": "#108ee9",
    "borderWidth": "1"
  },
  "am-tabs-item-underline-top": {
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "am-tabs-item-underline-bottom": {
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "am-tabs-item-underline-left": {
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "am-tabs-item-underline-right": {
    "top": 0,
    "left": 0,
    "bottom": 0
  }
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'am-tabs',
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    tabs: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    selected: {
      type: Number,
      default: 0
    },
    tabBarPosition: {
      type: String,
      default: 'top' // top, bottom, left, right
    },
    // tabDirection: {
    //   type: String,
    //   default: 'horizontal' // 'horizontal' | 'vertical'
    // },
    tabWidth: {
      type: Number,
      default: null
    }
  },
  data: function data() {
    return {
      isWeb: _index2.default.isWeb()
    };
  },

  computed: {
    tabDirection: function tabDirection() {
      return this.tabBarPosition === 'top' || this.tabBarPosition === 'bottom' ? 'horizontal' : 'vertical';
    },
    underlineStyle: function underlineStyle() {
      var style = {};
      if (this.tabBarPosition === 'top' || this.tabBarPosition === 'bottom') {}
      return style;
    },
    itemStyle: function itemStyle() {
      var style = {};
      if (this.tabWidth) {
        style.width = this.tabWidth + 'px';
      } else if (this.tabDirection === 'horizontal') {
        style.flex = 1;
      }
      return style;
    }
  },
  methods: {
    handleClick: function handleClick(index, value) {
      if (this.disabled) return;
      this.$emit('change', index, value);
    }
    // renderMain (h) {
    //   return this.tabs.map((title, index) => {
    //     return h(
    //       'div',
    //       {
    //         key: index,
    //         ref: 'tab',
    //         'class': ['am-tabs-item', `am-tabs-item-${this.tabDirection}`],
    //         style: this.itemStyle,
    //         on: {
    //           click: () => this.handleClick(index, title)
    //         }
    //       },
    //       [
    //         h('text', {'class': ['am-tabs-item-text', this.selected === index ? 'am-tabs-item-text-selected' : '']}, [title])
    //       ]
    //     )
    //   })
    // }

  }

  // render (h) {
  //   return h('div', {'class': ['am-tabs-wrap', `am-tabs-wrap-${this.tabDirection}`]}, [
  //     h(this.itemStyle.flex === 1 ? 'div' : 'scroller', {
  //       'class': ['am-tabs', `am-tabs-${this.tabDirection}`, `am-tabs-${this.tabBarPosition}`]
  //     }, this.renderMain(h))
  //   ])
  // }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['am-tabs-wrap', ("am-tabs-wrap-" + _vm.tabDirection)]
  }, [_c(_vm.itemStyle.flex === 1 ? 'div' : 'scroller', {
    tag: "component",
    class: ['am-tabs', ("am-tabs-" + _vm.tabDirection), ("am-tabs-" + _vm.tabBarPosition)],
    attrs: {
      "scrollDirection": _vm.tabDirection
    }
  }, _vm._l((_vm.tabs), function(title, index) {
    return _c('div', {
      key: index,
      class: ['am-tabs-item', ("am-tabs-item-" + _vm.tabDirection)],
      style: _vm.itemStyle,
      on: {
        "click": function($event) {
          _vm.handleClick(index, title)
        }
      }
    }, [_c('text', {
      class: ['am-tabs-item-text', _vm.selected === index ? 'am-tabs-item-text-selected' : '']
    }, [_vm._v(_vm._s(title))]), (_vm.selected === index) ? _c('div', {
      class: ['am-tabs-item-underline', ("am-tabs-item-underline-" + _vm.tabBarPosition)],
      style: _vm.underlineStyle
    }) : _vm._e()])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(125);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(126)
)

/* script */
__vue_exports__ = __webpack_require__(127)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-tab-container\\index.vue"
__vue_options__._scopeId = "data-v-36a704d9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = {
  "am-tab-container": {
    "flex": 1,
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "@TRANSITION": {
    "am-tab-container-animation": {
      "property": "transform",
      "duration": 300
    }
  },
  "am-tab-container-animation": {
    "transitionProperty": "transform",
    "transitionDuration": 300
  }
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'am-tab-container',
  props: {
    index: {
      type: Number,
      default: 0
    },
    animation: {
      type: Boolean,
      default: true
    },
    width: {
      type: [Number, String],
      default: 750
    }
  },
  computed: {
    style: function style() {
      return {
        width: this.width * this.$slots.default.filter(function (VNode) {
          return VNode.tag;
        }).length + 'px',
        transform: 'translateX(-' + this.width * this.index + 'px)'
      };
    },
    classList: function classList() {
      return _utils2.default.makeClassList({
        'am-tab-container': true,
        'am-tab-container-animation': this.animation
      });
    }
  },
  render: function render(h) {
    return h('div', {
      class: this.classList,
      style: this.style
    }, this.$slots.default);
  }
}; //

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = __webpack_require__(129);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_item).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(130)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-tab-container\\item.vue"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'am-tab-container-item',
  props: {
    lazy: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style: function style() {
      var width = (this.$parent.width || 750) + 'px';
      if (_utils2.default.isWeb()) {
        width = this._px2rem(width, weex.config.env.rootValue);
      }
      var style = this.$slots.default[0].data.style || {};
      style.width = width;
      style.overflowX = 'hidden';
      return style;
    }
  },
  render: function render(h) {
    if (!this.$slots.default[0].data) {
      this.$slots.default[0].data = {};
    }
    this.$slots.default[0].data.style = this.style;
    return this.$slots.default[0];
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(132);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(133)

/* template */
var __vue_template__ = __webpack_require__(134)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-native-tab-container\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
  name: 'am-native-tab-container',
  props: {
    index: {
      type: Number,
      default: 0
    },
    width: {
      type: [Number, String],
      default: 750
    }
  },
  methods: {
    handelChange: function handelChange($event) {
      this.$emit('update:index', $event.index);
      this.$emit('change', $event.index);
    }
  },
  watch: {
    index: function index(val) {
      if (val !== this.index) {
        this.$emit('update:index', val);
      }
    }
  }
};

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slider', {
    style: {
      flex: 1
    },
    attrs: {
      "infinite": false,
      "index": _vm.index
    },
    on: {
      "change": _vm.handelChange
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = __webpack_require__(136);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_item).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(137)

/* template */
var __vue_template__ = __webpack_require__(138)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-native-tab-container\\item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'am-native-tab-container-item',
  props: {
    lazy: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style: function style() {
      var width = (this.$parent.width || 750) + 'px';
      return {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: width
      };
    }
  }
};

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["am-tab-container-item"],
    style: _vm.style
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(140)
)

/* script */
__vue_exports__ = __webpack_require__(141)

/* template */
var __vue_template__ = __webpack_require__(146)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-picker-view\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6b6523d4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = {
  "am-picker-view": {
    "flexDirection": "row",
    "overflow": "hidden",
    "height": "476"
  }
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _col = __webpack_require__(142);

var _col2 = _interopRequireDefault(_col);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'am-picker-view',
  components: {
    Col: _col2.default
  },
  props: {
    data: {
      type: Array, // Array<Array<{value, label, children: Array}>>
      default: function _default() {
        return [];
      }
    },
    value: {
      type: Array,
      default: null
    }
  },
  data: function data() {
    return {
      selected: [],
      currentData: []
    };
  },

  computed: {
    isCascade: function isCascade() {
      return this.data[0] && _utils2.default.isPlainObject(this.data[0]);
    },
    selectedValue: function selectedValue() {
      return this.selected.map(function (item) {
        return item.value;
      });
    }
  },
  methods: {
    init: function init() {
      var _this = this;

      this.selected = [];
      this.currentData = [];
      var index = 0;
      var current = this.isCascade ? this.data : this.data[index];
      while (current && Array.isArray(current) && current.length) {
        this.currentData.push(current);

        if (this.value && this.value[index] !== undefined) {
          current.some(function (item) {
            if (item.value === _this.value[index]) {
              _this.selected[index] = item;
              return true;
            }
          });
        }

        if (!this.selected[index]) {
          this.selected[index] = current[0];
        }
        index++;
        current = this.isCascade ? this.selected[this.selected.length - 1].children : this.data[index];
      }
    },

    // initData () {
    //   console.log('initData')
    //   this.currentData = []
    //   if (this.data[0]) {
    //     if (!this.isCascade) {
    //       this.currentData = this.data
    //     } else {
    //       this.currentData.push(this.data)
    //       let colIndex = 0
    //       while (true) {
    //         const item = this.selected[colIndex] && this.currentData[colIndex].indexOf(this.selected[colIndex]) >= 0 ? this.selected[colIndex] : this.currentData[colIndex][0]
    //         if (item.children && Array.isArray(item.children) && item.children.length > 0) {
    //           this.currentData.push(item.children)
    //           colIndex++
    //         } else {
    //           break
    //         }
    //       }
    //     }
    //   }
    // },
    getCol: function getCol(index) {
      return this.currentData[index];
    },
    onChange: function onChange(item, colIndex) {
      this.selected.splice(colIndex, 1, item);
      if (this.isCascade) {
        this.selected.splice(colIndex + 1, this.selected.length - 1);
        this.currentData.splice(colIndex + 1, this.currentData.length - 1);
        var i = colIndex;
        while (true) {
          var children = this.selected[i].children;
          if (children && Array.isArray(children) && children.length > 0) {
            this.currentData.push(children);
            this.selected.push(children[0]);
            i++;
          } else {
            break;
          }
        }
      }

      this.$emit('change', this.selected);
    }
  },
  created: function created() {
    this.init();
  },

  watch: {
    value: function value(val) {
      if (val.join() !== this.selectedValue.join()) {
        this.init();
      }
    },
    selectedValue: function selectedValue(val) {
      if (this.value && val.join() !== this.value.join()) {
        this.$emit('input', this.selectedValue);
      }
    },
    data: function data() {
      this.init();
    }
  }
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(143)
)

/* script */
__vue_exports__ = __webpack_require__(144)

/* template */
var __vue_template__ = __webpack_require__(145)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-picker-view\\col.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-73ce6ffc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = {
  "am-picker-col": {
    "flex": 1
  },
  "am-picker-col-content": {
    "paddingTop": "204",
    "paddingBottom": "204"
  },
  "am-picker-col-item": {
    "textAlign": "center",
    "fontSize": "32",
    "height": "68",
    "lineHeight": "68",
    "color": "#000000",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "am-picker-col-item-selected": {
    "fontSize": "34"
  },
  "am-picker-col-items": {
    "textAlign": "center",
    "fontSize": "32",
    "lineHeight": "68",
    "color": "#000000"
  },
  "am-picker-col-mask": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "am-picker-col-mask-top": {
    "height": "204",
    "backgroundImage": "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6))",
    "backgroundRepeat": "no-repeat"
  },
  "am-picker-col-mask-bottom": {
    "height": "204",
    "backgroundImage": "linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6))",
    "backgroundRepeat": "no-repeat"
  },
  "am-picker-col-indicator": {
    "height": "68",
    "borderColor": "#dddddd",
    "borderTopWidth": 1,
    "borderBottomWidth": 1
  }
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = weex.requireModule('animation'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');

var itemLineHeight = {
  _callbackList: [],
  value: _utils2.default.isAndroid() ? null : 68,
  status: _utils2.default.isAndroid() ? 0 : 2, // 0: 没有，1：计算中, 2:完成
  compute: function compute(vm) {
    var _this = this;

    if (this.status >= 1) return;
    this.status = 1;
    var sid = setInterval(function () {
      return next();
    }, 100);

    var next = function next() {
      dom.getComponentRect(vm.$refs.items, function (options) {
        if (options.result && options.size.height) {
          _this.finish(options.size.height / vm.data.length);
        } else {
          setTimeout(function () {
            return next();
          }, 100);
        }
      });
      clearInterval(sid);
    };
  },
  onFinish: function onFinish(callback) {
    if (this.status === 2) {
      callback(this.value);
    } else {
      this._callbackList.push(callback);
    }
  },
  finish: function finish(height) {
    this.status = 2;
    this.value = height;
    this._callbackList.forEach(function (callback) {
      return callback(height);
    });
  }
};

exports.default = {
  name: 'am-picker-view-col',
  props: {
    data: {
      type: Array, // Array<{value, label}>
      default: function _default() {
        return [];
      }
    },
    value: null
  },
  data: function data() {
    var selected = this.data.indexOf(this.value);
    if (selected < 0) selected = 0;
    return {
      selected: selected,
      itemHeight: itemLineHeight.value || 68,
      scrollHanders: {},
      isWeb: _utils2.default.isWeb(),
      isAndroid: _utils2.default.isAndroid()
    };
  },
  created: function created() {
    var _this2 = this;

    var scrollHanders = function () {
      var scrollY = -1;
      var lastY = 0;
      var startY = 0;
      var scrollDisabled = false;
      var isMoving = false;
      // let animationIntervalId = 0

      var setAnimation = function setAnimation(ref, styles) {
        var timingFunction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
        var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

        duration && _this2.isAndroid && (scrollDisabled = true);
        animation.transition(ref, {
          styles: styles,
          duration: duration, // ms
          timingFunction: timingFunction,
          needLayout: false,
          delay: 0 // ms
        }, function () {
          duration && _this2.isAndroid && (scrollDisabled = false);

          if (typeof callback === 'function') {
            callback();
          }
        });
      };

      var scrollingComplete = function scrollingComplete() {
        if (!isMoving && scrollY >= 0) {
          var index = computeChildIndex(scrollY, _this2.itemHeight, _this2.data.length);
          _this2.selected = index;
        }
      };

      var scrollTo = function scrollTo(_x, y) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.3;

        if (scrollY !== y) {
          scrollY = y;
          setAnimation(_this2.$refs.content, { transform: 'translateY(' + -scrollY + 'px)' }, time === 0 ? 'linear' : 'cubic-bezier(0,0,0.2,1.15)', time * 1000, scrollingComplete);
        }
      };

      var Velocity = function () {
        var minInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
        var maxInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

        var _time = 0;
        var _y = 0;
        var _velocity = 0;
        var recorder = {
          record: function record(y) {
            var now = +new Date();
            _velocity = (y - _y) / (now - _time);
            if (now - _time >= minInterval) {
              _velocity = now - _time <= maxInterval ? _velocity : 0;
              _y = y;
              _time = now;
            }
          },
          getVelocity: function getVelocity(y) {
            if (y !== _y) {
              recorder.record(y);
            }
            return _velocity;
          }
        };
        return recorder;
      }();

      var onFinish = function onFinish() {
        isMoving = false;
        var targetY = scrollY;

        var height = (_this2.data.length - 1) * _this2.itemHeight;

        var time = 0.3;

        var velocity = Velocity.getVelocity(targetY) * 4;
        if (velocity) {
          targetY = velocity * 40 + targetY;
          time = Math.abs(velocity) * 0.1;
        }

        if (targetY % _this2.itemHeight !== 0) {
          targetY = Math.round(targetY / _this2.itemHeight) * _this2.itemHeight;
        }

        if (targetY < 0) {
          targetY = 0;
        } else if (targetY > height) {
          targetY = height;
        }

        scrollTo(0, targetY, time < 0.3 ? 0.3 : time);
        onScrollChange();
      };

      var onStart = function onStart(y) {
        if (scrollDisabled) {
          return;
        }

        isMoving = true;
        startY = y;
        lastY = scrollY;
      };

      var onMove = function onMove(y) {
        if (scrollDisabled || !isMoving) {
          return;
        }

        scrollY = lastY - y + startY;
        Velocity.record(scrollY);

        onScrollChange();
        setAnimation(_this2.$refs.content, { transform: 'translateY(' + -scrollY + 'px)' });
      };

      var onScrollChange = function onScrollChange() {
        // const top = scrollHanders.getValue()
        // if (top >= 0) {
        //   const item = this.data
        //   const index = computeChildIndex(top, this.itemHeight, item.length)
        //   if (this.scrollValue !== index) {
        //     this.scrollValue = index
        //     const child = item[index]
        //     if (child) {
        //       console.log('selected', index)
        //       // this.props.onScrollChange(child.props.value)
        //     } else if (!child && console.warn) {
        //       console.warn('child not found', item, index)
        //     }
        //   }
        // }
      };

      var computeChildIndex = function computeChildIndex(top, itemHeight, itemLength) {
        var index = Math.round(top / itemHeight);
        return Math.min(index, itemLength - 1);
      };

      return {
        touchstart: function touchstart(evt) {
          return onStart(evt.changedTouches[0].screenY);
        },
        // mousedown: (evt) => onStart(evt.screenY),
        touchmove: function touchmove(evt) {
          // evt.preventDefault()
          onMove(evt.changedTouches[0].screenY);
        },
        // mousemove: (evt) => {
        //   evt.preventDefault()
        //   onMove(evt.screenY)
        // },
        touchend: function touchend() {
          return onFinish();
        },
        // touchcancel: () => onFinish(),
        // mouseup: () => onFinish(),
        getValue: function getValue() {
          return scrollY;
        },
        scrollTo: scrollTo,
        setDisabled: function setDisabled() {
          var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          scrollDisabled = disabled;
        }
      };
    }();
    // Object.keys(scrollHanders).forEach(key => {
    //   if (key.indexOf('touch') === 0) {
    //     this.$set(this.listeners, key, scrollHanders[key])
    //   }
    // })
    this.scrollHanders = scrollHanders;
  },
  mounted: function mounted() {
    var _this3 = this;

    this.selected > 0 && this.scrollToItem(this.selected);
    if (this.isAndroid) {
      itemLineHeight.compute(this);
      itemLineHeight.onFinish(function (height) {
        _this3.itemHeight = height;
        _this3.scrollToItem(_this3.selected);
      });
    }
  },

  methods: {
    getItemIndex: function getItemIndex(value) {
      if (!value) return 0;
      var len = this.data.length;
      for (var i = 0; i < len; i++) {
        if (this.data[i].value === value) {
          return i;
        }
      }
      return 0;
    },
    scrollToItem: function scrollToItem(index) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (index < 0) index = 0;
      this.scrollHanders.scrollTo(0, index * this.itemHeight, time);
    }
  },
  watch: {
    selected: function selected(val, oldVal) {
      if (this.data[val] !== this.value) {
        this.$emit('input', this.data[val]);
      }
    },
    value: function value(val) {
      if (val !== this.data[this.selected]) {
        this.scrollToItem(this.data.indexOf(val));
      }
    }
  },
  computed: {
    items: function items() {
      return this.data.map(function (item) {
        return item.label;
      }).join('\n');
    }
  }
};

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["am-picker-col"],
    on: {
      "panstart": _vm.scrollHanders.touchstart,
      "panmove": _vm.scrollHanders.touchmove,
      "panend": _vm.scrollHanders.touchend
    }
  }, [_c('div', {
    ref: "content",
    staticClass: ["am-picker-col-content"]
  }, [(_vm.isWeb) ? _vm._l((_vm.data), function(item, index) {
    return _c('div', {
      key: item.value,
      ref: "item",
      refInFor: true
    }, [_c('text', {
      class: ['am-picker-col-item', _vm.selected === index ? 'am-picker-col-item-selected' : '']
    }, [_vm._v(_vm._s(item.label))])])
  }) : _c('text', {
    ref: "items",
    staticClass: ["am-picker-col-items"]
  }, [_vm._v(_vm._s(_vm.items))])], 2), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["am-picker-col-mask"]
  }, [_c('div', {
    staticClass: ["am-picker-col-mask-top"]
  }), _c('div', {
    staticClass: ["am-picker-col-indicator"]
  }), _c('div', {
    staticClass: ["am-picker-col-mask-bottom"]
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["am-picker-view"]
  }, _vm._l((_vm.currentData), function(items, index) {
    return _c('col', {
      key: index,
      attrs: {
        "data": items,
        "value": _vm.selected[index] || null
      },
      on: {
        "input": function (item) { return _vm.onChange(item, index); }
      }
    })
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(148);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(149)
)

/* script */
__vue_exports__ = __webpack_require__(150)

/* template */
var __vue_template__ = __webpack_require__(159)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-picker\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2801d6cc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = {
  "am-picker-header": {
    "height": "86",
    "borderColor": "#dddddd",
    "borderBottomWidth": 1
  }
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _amPopup = __webpack_require__(8);

var _amPopup2 = _interopRequireDefault(_amPopup);

var _amNavBar = __webpack_require__(6);

var _amNavBar2 = _interopRequireDefault(_amNavBar);

var _amPickerView = __webpack_require__(7);

var _amPickerView2 = _interopRequireDefault(_amPickerView);

var _itemMixin = __webpack_require__(2);

var _itemMixin2 = _interopRequireDefault(_itemMixin);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'am-picker',
  mixins: [_itemMixin2.default],
  components: { AmPopup: _amPopup2.default, AmNavBar: _amNavBar2.default, AmPickerView: _amPickerView2.default },
  model: {
    prop: 'value',
    event: 'ok'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array, // Array<Array<{value, label, children: Array}>>
      default: function _default() {
        return [];
      }
    },
    value: {
      type: Array,
      default: null
    },
    okText: {
      type: String,
      default: '确定'
    },
    dismissText: {
      type: String,
      default: '取消'
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    format: {
      type: [Function, String],
      default: function _default(lables) {
        return lables.join(',');
      }
    }
  },
  data: function data() {
    return {
      currentShow: this.show,
      currentValue: this.value || [],
      selected: null,
      isIPhoneX: _utils2.default.isIPhoneX()
    };
  },

  computed: {
    lables: function lables() {
      return this.selected ? this.selected.map(function (item) {
        return item.label;
      }) : [];
    },
    extra: function extra() {
      return this.format(this.lables) || this.placeholder;
    },
    popupHeight: function popupHeight() {
      return 562 + (this.isIPhoneX ? 78 : 0);
    }
  },
  methods: {
    initData: function initData() {
      var _this = this;

      if (this.currentValue) {
        var isCascade = this.data[0] && _utils2.default.isPlainObject(this.data[0]);
        this.selected = [];
        this.currentValue.some(function (value, index) {
          var current = isCascade ? index === 0 ? _this.data : _this.selected[index - 1].children : _this.data[index];

          current.some(function (item) {
            if (item.value === _this.currentValue[index]) {
              _this.selected[index] = item;
              return true;
            }
          });
          return !_this.selected[index];
        });
      }
    },
    close: function close() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dismiss';

      this.$emit('hide', type);
      this.currentShow = false;
    },
    handleMaskClick: function handleMaskClick() {
      this.close('dismiss');
    },
    handleHeaderClick: function handleHeaderClick(type) {
      switch (type) {
        case 'ok':
          this.selected = [].concat(_toConsumableArray(this.$refs.pickerView.selected));
          this.currentValue = [].concat(_toConsumableArray(this.$refs.pickerView.selectedValue));
          this.$emit('ok', this.currentValue, this.lables);
          this.close('ok');
          break;
        case 'dismiss':
          this.close('dismiss');
          break;
      }
    },
    handlePickerChange: function handlePickerChange() {
      if ('change' in this.$listeners) {
        this.$emit('change', [].concat(_toConsumableArray(this.$refs.pickerView.selectedValue)), this.$refs.pickerView.selected.map(function (item) {
          return item.label;
        }));
      }
    }
  },
  watch: {
    currentShow: function currentShow(val) {
      if (this.show !== val) {
        this.$emit('update:show', val);
      }
    },
    show: function show(val) {
      if (this.currentShow !== val) {
        this.currentShow = val;
      }
    },
    value: function value(val) {
      if (val.join() !== this.currentValue.join()) {
        this.currentValue = val;
        this.initData();
      }
    }
  },
  mounted: function mounted() {
    this.initData();
  }
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(152)
)

/* script */
__vue_exports__ = __webpack_require__(153)

/* template */
var __vue_template__ = __webpack_require__(158)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-popup\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-859a8108"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = {
  "am-popup": {
    "position": "absolute",
    "backgroundColor": "#ffffff",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0
  },
  "am-popup-wrap": {
    "position": "fixed",
    "zIndex": 101,
    "overflow": "hidden"
  }
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _amMask = __webpack_require__(13);

var _amMask2 = _interopRequireDefault(_amMask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = weex.requireModule('animation');
exports.default = {
  name: 'am-popup',
  components: { AmMask: _amMask2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    height: {
      type: [Number, String],
      default: 750
    },
    width: {
      type: [Number, String],
      default: 750
    },
    position: {
      type: String,
      default: 'bottom',
      validator: function validator(val) {
        return ['top', 'right', 'left', 'bottom'].indexOf(val) >= 0;
      }
    },
    offset: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    popupStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      currentShow: this.show,
      maskShow: false,
      wrapBaseStyle: {}
    };
  },

  computed: {
    _popupStyle: function _popupStyle() {
      return _extends({}, this.popupStyle, {
        transform: this.transformHide
      });
    },
    wrapStyle: function wrapStyle() {
      var _this = this;

      var style = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: this.width + 'px',
        height: this.height + 'px'
      };
      Object.keys(this.offset).forEach(function (key) {
        style[key] = _this.offset[key] + 'px';
      });
      switch (this.position) {
        case 'top':
          delete style.bottom;
          delete style.width;
          break;
        case 'right':
          delete style.left;
          delete style.height;
          break;
        case 'bottom':
          delete style.top;
          delete style.width;
          break;
        case 'left':
          delete style.right;
          delete style.height;
          break;
      }
      return style;
    },
    transformShow: function transformShow() {
      return this.transformHide.replace(/\d+/, 0);
    },
    transformHide: function transformHide() {
      var transform = void 0;
      switch (this.position) {
        case 'top':
          transform = 'translateY(-' + this.height + 'px)';
          break;
        case 'right':
          transform = 'translateX(' + this.width + 'px)';
          break;
        case 'bottom':
          transform = 'translateY(' + this.height + 'px)';
          break;
        case 'left':
          transform = 'translateX(-' + this.width + 'px)';
          break;
      }
      return transform;
    }
  },
  methods: {
    handleClickMask: function handleClickMask() {
      this.$emit('clickMask');
      if (this.autoClose) {
        this.switch(false);
      }
    },
    handleClick: function handleClick($event) {
      this.$emit('click', $event);
      if (this.autoClose) {
        this.switch(false);
      }
    },
    setShow: function setShow(show) {
      this.currentShow = show;
      this.$emit('update:show', show);
    },
    switch: function _switch(show) {
      var _this2 = this;

      this.maskShow = show;
      if (show) {
        this.setShow(show);
      }

      setTimeout(function () {
        animation.transition(_this2.$refs.popup, {
          styles: {
            transform: show ? _this2.transformShow : _this2.transformHide
          },
          duration: 150, // ms
          timingFunction: 'ease'
        }, function () {
          show || _this2.setShow(show);
        });
      }, 50);
    }
  },
  watch: {
    show: function show(val) {
      if (val !== this.currentShow) {
        this.switch(val);
      }
    }
  },
  created: function created() {
    if (this.show) {
      this.switch(true);
    }
  }
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(155)
)

/* script */
__vue_exports__ = __webpack_require__(156)

/* template */
var __vue_template__ = __webpack_require__(157)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-mask\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-dab7c610"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = {
  "am-mask": {
    "position": "fixed",
    "zIndex": 100,
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  name: 'am-mask',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    offset: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    animation: {
      type: Boolean,
      default: false
    },
    animationTimingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    animationDuration: {
      type: [Number, String],
      default: 300
    }
  },
  data: function data() {
    return {
      currentShow: this.show
    };
  },

  computed: {
    style: function style() {
      var _this = this;

      var style = {};
      Object.keys(this.offset).forEach(function (key) {
        style[key] = _this.offset[key] + 'px';
      });
      style.backgroundColor = 'rgba(0, 0, 0,' + (!this.animation ? this.opacity : 0.1) + ')';
      return style;
    }
  },
  methods: {
    handleClick: function handleClick($event) {
      this.$emit('click', $event);
      if (this.autoClose) {
        this.switch(false);
      }
    },
    switch: function _switch(show) {
      var _this2 = this;

      if (show || !this.animation) {
        this.currentShow = show;
        this.$emit('update:show', show);
      }
      if (this.animation) {
        setTimeout(function () {
          animation.transition(_this2.$refs.mask, {
            styles: {
              backgroundColor: 'rgba(0, 0, 0, ' + (show ? _this2.opacity : 0) + ')'
            },
            duration: _this2.animationDuration, // ms
            timingFunction: _this2.animationTimingFunction[show ? 0 : 1]
          }, function () {
            if (!show) {
              _this2.currentShow = false;
              _this2.$emit('update:show', false);
            }
          });
        }, 50);
      }
    }
  },
  watch: {
    show: function show(val) {
      if (val !== this.currentShow) {
        this.switch(val);
      }
    }
  },
  created: function created() {
    if (this.show) {
      this.switch(true);
    }
  }
};

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.currentShow) ? _c('div', {
    ref: "mask",
    staticClass: ["am-mask"],
    style: _vm.style,
    on: {
      "click": _vm.handleClick
    }
  }) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.currentShow) ? _c('div', [_c('am-mask', {
    attrs: {
      "show": _vm.maskShow,
      "autoClose": false,
      "animation": true,
      "animationDuration": 150,
      "offset": _vm.offset
    },
    on: {
      "click": _vm.handleClickMask
    }
  }), _c('div', {
    ref: "wrap",
    staticClass: ["am-popup-wrap"],
    style: _vm.wrapStyle,
    on: {
      "click": function () {}
    }
  }, [_c('div', {
    ref: "popup",
    staticClass: ["am-popup"],
    style: _vm._popupStyle
  }, [_vm._t("default")], 2)])], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["am-picker"]
  }, [_c('am-popup', {
    ref: "popup",
    attrs: {
      "show": _vm.currentShow,
      "autoClose": false,
      "height": _vm.popupHeight
    },
    on: {
      "clickMask": _vm.handleMaskClick
    }
  }, [_c('am-nav-bar', {
    staticClass: ["am-picker-header"],
    attrs: {
      "mode": "light",
      "title": _vm.title,
      "leftBtn": [{
        is: 'text',
        text: _vm.dismissText,
        key: 'dismiss'
      }],
      "rightBtn": [{
        is: 'text',
        text: _vm.okText,
        key: 'ok'
      }]
    },
    on: {
      "click": _vm.handleHeaderClick
    }
  }), _c('am-picker-view', {
    ref: "pickerView",
    attrs: {
      "data": _vm.data,
      "value": _vm.currentValue
    },
    on: {
      "change": _vm.handlePickerChange
    }
  })], 1), _vm._t("default", null, {
    extra: _vm.extra,
    show: function () {
      _vm.currentShow = true
    }
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(161);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(162)

/* template */
var __vue_template__ = __webpack_require__(163)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-html\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'am-html',
  props: {
    width: {
      type: Number,
      default: 750
    },
    height: {
      type: Number,
      default: 750
    },
    html: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      isWeb: _index2.default.isWeb(),
      test: ''
    };
  },

  computed: {
    url: function url() {
      return 'javascript:setTimeout(function () {\n          alert(\'123\')\n          var meta = document.createElement(\'meta\');\n          meta.setAttribute(\'name\', \'viewport\');\n          meta.setAttribute(\'content\', \'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\');\n          document.head.appendChild(meta);\n          document.body.innerHTML = \'<style>body, html {margin: 0;}</style>' + this.html + '\'\n        });';
    }
  },
  methods: {
    onPageStart: function onPageStart(e) {
      this.test = e.url;
    }
  },
  created: function created() {
    var modal = weex.requireModule('modal');
    modal.alert({
      message: weex.config.env.weexVersion,
      duration: 0.3
    }, function (value) {
      console.log('alert callback', value);
    });
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', [_vm._v("123" + _vm._s(_vm.url))]), _c('web', {
    ref: "webview",
    staticStyle: {
      width: "730px",
      height: "500px"
    },
    attrs: {
      "url": _vm.url
    },
    on: {
      "pagestart": _vm.onPageStart
    }
  }), _c('text', [_vm._v(_vm._s(_vm.test) + "223")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(165)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-date-picker-view\\index.vue"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _amPickerView = __webpack_require__(7);

var _amPickerView2 = _interopRequireDefault(_amPickerView);

var _date = __webpack_require__(166);

var _date2 = _interopRequireDefault(_date);

var _props = __webpack_require__(15);

var _props2 = _interopRequireDefault(_props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE_MAP = {
  'YYYY': 'Year',
  'MM': 'Month',
  'DD': 'Day',
  'HH': 'Hour',
  'mm': 'Minute'
};

exports.default = {
  name: 'am-date-picker-view',
  props: (0, _props2.default)(),
  data: function data() {
    return {
      dateData: [],
      currentValue: this.strDate2DateMap(this.value, this.format)
    };
  },

  computed: {
    types: function types() {
      return Object.keys(_date2.default.formatStr('', this.format)).map(function (key) {
        return TYPE_MAP[key];
      });
    },
    yearConfig: function yearConfig() {
      return { start: this.minDateMap.Year, end: this.maxDateMap.Year };
    },
    monthConfig: function monthConfig() {
      var config = { start: 1, end: 12 };
      if (this.currentValue.Year === this.minDateMap.Year) {
        config.start = this.minDateMap.Month;
      }
      if (this.currentValue.Year === this.maxDateMap.Year) {
        config.end = this.maxDateMap.Month;
      }
      return config;
    },
    dayConfig: function dayConfig() {
      var config = { start: 1, end: this.getMonthEndDay(this.currentValue.Year, this.currentValue.Month) };
      if (this.currentValue.Year === this.minDateMap.Year && this.currentValue.Month === this.minDateMap.Month) {
        config.start = this.minDateMap.Day;
      }
      if (this.currentValue.Year === this.maxDateMap.Year && this.currentValue.Month === this.maxDateMap.Month) {
        config.end = this.maxDateMap.Day;
      }
      return config;
    },
    hourConfig: function hourConfig() {
      return { start: 0, end: 23, fixedList: this.hourList || null };
    },
    minuteConfig: function minuteConfig() {
      return { start: 0, end: 59, step: this.minuteStep };
    },
    configs: function configs() {
      return {
        Year: this.yearConfig,
        Month: this.monthConfig,
        Day: this.dayConfig,
        Hour: this.hourConfig,
        Minute: this.minuteConfig
      };
    },
    strDate: function strDate() {
      var date = new Date(this.currentValue.Year || 1970, (this.currentValue.Month || 1) - 1, this.currentValue.Day || 1, this.currentValue.Hour || 0, this.currentValue.Minute || 0);
      return _date2.default.format(date, this.format);
    },
    minDateMap: function minDateMap() {
      return this.strDate2DateMap(this.minDate, 'YYYY-MM-DD');
    },
    maxDateMap: function maxDateMap() {
      return this.strDate2DateMap(this.maxDate, 'YYYY-MM-DD');
    }
  },
  methods: {
    strDate2DateMap: function strDate2DateMap(str, fmt) {
      var value = {};
      var result = _date2.default.formatStr(str, fmt);
      Object.keys(result).forEach(function (key) {
        value[TYPE_MAP[key]] = result[key];
      });
      return value;
    },
    markData: function markData() {
      var _this = this;

      var dateData = [];
      Object.keys(this.types).forEach(function (key) {
        var type = _this.types[key];
        if (type) {
          dateData.push(_this.fillValues(type, _this.configs[type]));
        }
      });
      this.dateData = dateData;
    },
    fillValues: function fillValues(type, _ref) {
      var _this2 = this;

      var start = _ref.start,
          end = _ref.end,
          _ref$step = _ref.step,
          step = _ref$step === undefined ? 1 : _ref$step,
          _ref$fixedList = _ref.fixedList,
          fixedList = _ref$fixedList === undefined ? null : _ref$fixedList;

      var getItem = function getItem(value) {
        value = (value < 10 ? '0' : '') + value;
        var label = _this2['format' + type].replace('{value}', value);
        return { value: value, label: label };
      };
      if (fixedList) {
        return fixedList.map(getItem);
      }
      var values = [];
      for (var i = ~~start; i <= end; i += step) {
        values.push(getItem(i));
      }
      return values;
    },
    isLeapYear: function isLeapYear(year) {
      return year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
    },
    isShortMonth: function isShortMonth(month) {
      return ['04', '06', '09', '11'].indexOf(month) > -1;
    },
    getMonthEndDay: function getMonthEndDay(year, month) {
      if (this.isShortMonth(month)) {
        return '30';
      } else if (month === '02') {
        return this.isLeapYear(year) ? '29' : '28';
      } else {
        return '31';
      }
    }
  },
  watch: {
    currentValue: {
      handler: function handler(val) {
        this.markData();
      },

      deep: true
    },
    value: function value() {
      this.currentValue = this.strDate2DateMap(this.value, this.format);
    },
    minDate: function minDate() {
      this.markData();
    },
    maxDate: function maxDate() {
      this.markData();
    }
  },
  created: function created() {
    this.markData();
  },
  render: function render(h) {
    var _this3 = this;

    return h(_amPickerView2.default, {
      props: {
        data: this.dateData,
        value: Object.keys(this.currentValue).map(function (key) {
          return _this3.currentValue[key];
        })
      },
      on: {
        input: function input(val) {
          _this3.types.forEach(function (type, index) {
            _this3.currentValue[type] = val[index];
          });
          _this3.$emit('input', _this3.strDate);
        }
      }
    });
  }
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  format: function format(date) {
    var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm';

    var MAP = {
      'Y+': date.getFullYear(),
      'M+': date.getMonth() + 1,
      'D+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes()
    };

    Object.keys(MAP).forEach(function (key) {
      if (new RegExp('(' + key + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ('0' + MAP[key]).substr(-Math.max(MAP[key].toString().length, 2)));
      }
    });

    return fmt;
  },
  formatStr: function formatStr(str) {
    var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm';

    if (typeof str !== 'string' || str.length !== fmt.length) {
      str = this.format(new Date(), fmt);
    }
    var TYPES = ['YYYY', 'MM', 'DD', 'HH', 'mm'];
    var result = {};
    for (var i = 0; i < TYPES.length; i++) {
      var type = TYPES[i];
      var index = fmt.indexOf(type);
      if (index > -1) {
        result[type] = str.substr(index, type.length);
        // 格式错误，用返回当前时间
        if (!/^\d+$/.test(result[type])) {
          return this.formatStr(this.format(new Date(), fmt), fmt);
        }
      }
    }
    TYPES.forEach(function (type) {
      var index = fmt.indexOf(type);
      if (index > -1) {
        result[type] = str.substr(index, type.length);
      }
    });
    return result;
  }
  // isLeapYear (year) {
  //   return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)
  // },
  // isShortMonth (month) {
  //   return [4, 6, 9, 11].indexOf(~~month) > -1
  // }

};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(168);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(169)
)

/* script */
__vue_exports__ = __webpack_require__(170)

/* template */
var __vue_template__ = __webpack_require__(171)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-date-picker\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7c49539d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = {
  "am-picker-header": {
    "height": "86",
    "borderColor": "#dddddd",
    "borderBottomWidth": 1
  }
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _amPopup = __webpack_require__(8);

var _amPopup2 = _interopRequireDefault(_amPopup);

var _amNavBar = __webpack_require__(6);

var _amNavBar2 = _interopRequireDefault(_amNavBar);

var _amDatePickerView = __webpack_require__(14);

var _amDatePickerView2 = _interopRequireDefault(_amDatePickerView);

var _itemMixin = __webpack_require__(2);

var _itemMixin2 = _interopRequireDefault(_itemMixin);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prpos = __webpack_require__(15).default();

exports.default = {
  name: 'am-date-picker',
  mixins: [_itemMixin2.default],
  components: { AmPopup: _amPopup2.default, AmNavBar: _amNavBar2.default, AmDatePickerView: _amDatePickerView2.default },
  model: {
    prop: 'value',
    event: 'ok'
  },
  props: _extends({}, prpos, {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: '确定'
    },
    dismissText: {
      type: String,
      default: '取消'
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  }),
  data: function data() {
    return {
      currentShow: this.show,
      currentValue: this.value || '',
      selected: null,
      isIPhoneX: _utils2.default.isIPhoneX()
    };
  },

  computed: {
    datePickerViewPrpos: function datePickerViewPrpos() {
      var _this = this;

      var val = {};
      Object.keys(prpos).forEach(function (key) {
        if (key !== 'value') {
          val[key] = _this[key];
        }
      });
      return val;
    },
    extra: function extra() {
      return this.currentValue || this.value || this.placeholder;
    },
    popupHeight: function popupHeight() {
      return 562 + (this.isIPhoneX ? 78 : 0);
    }
  },
  methods: {
    close: function close() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dismiss';

      this.$emit('hide', type);
      this.currentShow = false;
    },
    handleMaskClick: function handleMaskClick() {
      this.close('dismiss');
    },
    handleHeaderClick: function handleHeaderClick(type) {
      switch (type) {
        case 'ok':
          this.currentValue = this.$refs.pickerView.strDate;
          this.$emit('ok', this.currentValue);
          this.close('ok');
          break;
        case 'dismiss':
          this.close('dismiss');
          break;
      }
    },
    handleHeaderChange: function handleHeaderChange() {
      this.$emit('change', this.$refs.pickerView.strDate);
    }
  },
  watch: {
    currentShow: function currentShow(val) {
      if (this.show !== val) {
        this.$emit('update:show', val);
      }
    },
    show: function show(val) {
      if (this.currentShow !== val) {
        this.currentShow = val;
      }
    },
    value: function value(val) {
      if (val !== this.currentValue) {
        this.currentValue = val;
      }
    }
  }
};

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["am-picker"]
  }, [_c('am-popup', {
    ref: "popup",
    attrs: {
      "show": _vm.currentShow,
      "autoClose": false,
      "height": _vm.popupHeight
    },
    on: {
      "clickMask": _vm.handleMaskClick
    }
  }, [_c('am-nav-bar', {
    staticClass: ["am-picker-header"],
    attrs: {
      "mode": "light",
      "title": _vm.title,
      "leftBtn": [{
        is: 'text',
        text: _vm.dismissText,
        key: 'dismiss'
      }],
      "rightBtn": [{
        is: 'text',
        text: _vm.okText,
        key: 'ok'
      }]
    },
    on: {
      "click": _vm.handleHeaderClick
    }
  }), _c('am-date-picker-view', _vm._b({
    ref: "pickerView",
    attrs: {
      "value": _vm.currentValue
    },
    on: {
      "input": _vm.handleHeaderChange
    }
  }, 'am-date-picker-view', _vm.datePickerViewPrpos, false))], 1), _vm._t("default", null, {
    extra: _vm.extra,
    show: function () {
      _vm.currentShow = true
    }
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(173);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(174)
)

/* script */
__vue_exports__ = __webpack_require__(175)

/* template */
var __vue_template__ = __webpack_require__(176)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\node_modules\\weex-amui\\packages\\am-image\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8d81ad2a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = {
  "am-icon-xxs": {
    "fontSize": "30",
    "lineHeight": "30"
  },
  "am-icon-xs": {
    "fontSize": "36",
    "lineHeight": "36"
  },
  "am-icon-sm": {
    "fontSize": "42",
    "lineHeight": "42"
  },
  "am-icon-md": {
    "fontSize": "44",
    "lineHeight": "44"
  },
  "am-icon-lg": {
    "fontSize": "72",
    "lineHeight": "72"
  }
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
exports.default = {
  name: 'am-image',
  props: {
    autoWidth: {
      type: Boolean,
      default: false
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    resize: {
      type: String,
      default: 'stretch',
      validator: function validator(val) {
        return ['cover', 'contain', 'stretch'].indexOf(val) >= 0;
      }
    },
    src: {
      type: String,
      default: ''
    },
    imageStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      loaded: false,
      widht: null,
      height: null
    };
  },

  computed: {
    props: function props() {
      var data = {
        src: this.src,
        resize: this.resize
      };
      if (this.placeholder) {
        data.placeholder = this.placeholder;
      }
      return data;
    },
    style: function style() {
      var style = _extends({
        width: '0.1px',
        height: '0.1px'
      }, this.imageStyle);
      if (this.loaded) {
        style.width = this.width ? this.width + 'px' : style.width;
        style.height = this.height ? this.height + 'px' : style.height;
      }
      return style;
    }
  },
  methods: {
    handleLoad: function handleLoad($event) {
      var _this = this;

      this.$emit('load', $event);
      if ($event.success && (this.autoWidth || this.autoHeight)) {
        dom.getComponentRect(this.$refs.image, function (option) {
          if (!option.result) return;
          if (_this.autoWidth) {
            _this.width = option.size.height / $event.size.naturalHeight * $event.size.naturalWidth;
          } else {
            _this.height = option.size.width / $event.size.naturalWidth * $event.size.naturalHeight;
          }
          _this.loaded = true;
        });
      }
    },
    save: function save() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      typeof this.$refs.image.save === 'function' && this.$refs.image.save(next);
    }
  }
};

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('image', {
    ref: "image",
    style: _vm.style,
    attrs: {
      "src": _vm.src,
      "resize": _vm.resize,
      "placeholder": _vm.placeholder
    },
    on: {
      "load": _vm.handleLoad
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', [_c('am-nav-bar', {
    staticClass: ["nav-bar-color"],
    attrs: {
      "title": "test"
    }
  }), _c('am-flex', {
    style: {
      flex: 1
    },
    attrs: {
      "direction": "column",
      "justify": "center",
      "align": "center"
    }
  }, [_c('am-button', {
    staticClass: ["button"],
    on: {
      "click": function($event) {
        _vm.showPopup()
      }
    }
  }, [_vm._v("上")]), _c('am-popup', {
    attrs: {
      "show": _vm.show,
      "position": _vm.position,
      "offset": _vm.offset,
      "autoClose": _vm.autoClose,
      "popupStyle": _vm.style,
      "width": "500",
      "height": "400"
    },
    on: {
      "update:show": function($event) {
        _vm.show = $event
      }
    }
  }, [_c('am-wing-blank', [_c('text', {
    style: {
      fontSize: '40px'
    }
  }, [_vm._v("popup")]), _c('am-white-space'), _c('am-button', {
    attrs: {
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.show = true
      }
    }
  }, [_vm._v("点我关闭")])], 1)], 1)], 1)], 1), _c('div', [_c('router-view')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(179)
)

/* script */
__vue_exports__ = __webpack_require__(180)

/* template */
var __vue_template__ = __webpack_require__(181)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7cbbe74f"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "relative"
  },
  "icon": {
    "fontFamily": "awesomefont"
  },
  "pic": {
    "width": "50",
    "height": "50",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "headernav": {
    "width": "750",
    "height": "88",
    "display": "flex",
    "flexDirection": "row",
    "textAlign": "center",
    "position": "absolute",
    "top": "0",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#cccccc",
    "borderBottomWidth": "1"
  },
  "family": {
    "fontSize": "32",
    "position": "absolute",
    "left": "39",
    "top": "21",
    "color": "#1F1F1F"
  },
  "angle": {
    "position": "absolute",
    "top": "28",
    "left": "119",
    "fontSize": "27"
  },
  "chitench": {
    "height": "50",
    "fontSize": "36",
    "fontFamily": "PingFangSC-Medium",
    "fontWeight": "500",
    "color": "#1F1F1F",
    "lineHeight": "50",
    "position": "absolute",
    "top": "18",
    "left": "303"
  },
  "shop": {
    "width": "37",
    "height": "37",
    "position": "absolute",
    "top": "26",
    "left": "598"
  },
  "ring": {
    "position": "absolute",
    "right": "40",
    "bottom": "24",
    "fontSize": "17"
  },
  "adddev": {
    "textAlign": "center",
    "alignItems": "center",
    "width": "750",
    "height": "400",
    "marginTop": "196"
  },
  "addpicbox": {
    "width": "268",
    "height": "268",
    "paddingTop": "17",
    "paddingLeft": "26"
  },
  "addpic": {
    "width": "216",
    "height": "216"
  },
  "addtext": {
    "fontSize": "32",
    "color": "#9A9A9A"
  },
  "devbox": {
    "width": "750",
    "height": "800",
    "backgroundColor": "#faf8f8",
    "marginTop": "83",
    "paddingLeft": "32"
  },
  "dev": {
    "width": "686",
    "height": "340"
  },
  "devsecond": {
    "marginTop": "20"
  }
}

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexAmui = __webpack_require__(5);

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
exports.default = {
  components: {
    AmIcon: _weexAmui.AmIcon
  },
  data: function data() {
    return {
      msg: 'HelloWorld',
      navmsg: '我的厨房'
    };
  },

  methods: {
    link: function link(e) {
      console.log(e);
      this.$router.push(e);
    }

  }
};

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["headernav"]
  }, [_c('text', {
    staticClass: ["family"]
  }, [_vm._v("家庭")]), _c('am-icon', {
    staticClass: ["angle"],
    attrs: {
      "type": "down",
      "size": "md"
    }
  }), _c('text', {
    staticClass: ["chitench"]
  }, [_vm._v("我的厨房")]), _c('image', {
    staticClass: ["shop"],
    attrs: {
      "src": "/src/assets/shop.png"
    }
  }), _c('am-icon', {
    staticClass: ["ring"],
    attrs: {
      "type": "ellipsis"
    }
  })], 1), _vm._m(0), _c('div', {
    staticClass: ["devbox"]
  }, [_c('div', {
    on: {
      "click": function($event) {
        _vm.link('bar')
      }
    }
  }, [_c('image', {
    staticClass: ["dev"],
    attrs: {
      "src": "/src/assets/many.png"
    }
  })]), _c('div', {
    on: {
      "click": function($event) {
        _vm.link('HelloWorld')
      }
    }
  }, [_c('image', {
    staticClass: ["dev", "devsecond"],
    attrs: {
      "src": "/src/assets/virt.png"
    }
  })])]), _c('div', [_c('router-view')], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["adddev"]
  }, [_c('div', {
    staticClass: ["addpicbox"]
  }, [_c('image', {
    staticClass: ["addpic"],
    attrs: {
      "src": "/src/assets/add.png"
    }
  })]), _c('text', {
    staticClass: ["addtext"]
  }, [_vm._v("点击添加设备")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(183)
)

/* script */
__vue_exports__ = __webpack_require__(184)

/* template */
var __vue_template__ = __webpack_require__(185)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\myCooker.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1098d831"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "width": "750",
    "backgroundColor": "#F4F4F4",
    "paddingTop": "20",
    "paddingLeft": "20",
    "paddingBottom": "20"
  },
  "boxCommon": {
    "display": "flex",
    "flexDirection": "row",
    "textAlign": "center"
  },
  "boxone": {
    "width": "710",
    "height": "565",
    "backgroundColor": "#ffffff"
  },
  "mangerbox": {
    "height": "121",
    "width": "650",
    "marginLeft": "30",
    "marginRight": "30",
    "borderBottomColor": "#CED7DB",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "display": "flex",
    "justifyContent": "space-between",
    "flexDirection": "row"
  },
  "mangerinfo": {
    "fontSize": "32",
    "fontFamily": "PingFang-SC-Medium",
    "fontWeight": "500",
    "color": "rgba(88,88,88,1)",
    "marginTop": "45"
  },
  "deviceinfo": {
    "fontSize": "27",
    "fontFamily": "PingFang-SC-Medium",
    "fontWeight": "500",
    "color": "rgba(154,154,154,1)",
    "marginTop": "48"
  },
  "enviromentinfo": {
    "fontSize": "31",
    "fontFamily": "PingFang-SC-Bold",
    "fontWeight": "bold",
    "color": "rgba(102,102,102,1)"
  },
  "boxwifi": {
    "marginTop": "48",
    "marginLeft": "34"
  },
  "environment": {
    "marginTop": "40",
    "width": "210",
    "height": "280",
    "borderTopRightRadius": "8",
    "borderTopLeftRadius": "8",
    "borderBottomLeftRadius": "8",
    "borderBottomRightRadius": "8",
    "backgroundColor": "rgba(249,249,249,1)",
    "textAlign": "center",
    "marginLeft": "20",
    "alignItems": "center"
  },
  "title": {
    "fontSize": "23",
    "lineHeight": "23",
    "fontFamily": "PingFang-SC-Medium",
    "fontWeight": "500",
    "color": "rgba(102,102,102,1)",
    "marginTop": "24"
  },
  "wuxielouimg": {
    "width": "59",
    "height": "69",
    "marginTop": "43"
  },
  "xieloutext": {
    "fontSize": "31",
    "lineHeight": "31",
    "fontFamily": "PingFang-SC-Bold",
    "fontWeight": "bold",
    "color": "rgba(73,73,73,1)",
    "marginTop": "49"
  },
  "comfortLevel": {
    "fontSize": "60",
    "lineHeight": "60",
    "fontFamily": "PingFang-SC-Bold",
    "fontWeight": "bold",
    "color": "rgba(102,102,102,1)",
    "marginTop": "51"
  },
  "goodinfo": {
    "marginTop": "51",
    "fontSize": "70",
    "lineHeight": "70",
    "fontFamily": "PingFang-SC-Bold",
    "fontWeight": "bold",
    "color": "rgba(200,175,112,1)"
  },
  "mypro": {
    "width": "174",
    "height": "6",
    "backgroundColor": "rgba(232,238,245,1)",
    "borderRadius": "3",
    "marginTop": "46"
  },
  "protext": {
    "width": "174",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": "23"
  },
  "justSo": {
    "marginTop": "55"
  },
  "proinfo": {
    "fontSize": "23",
    "lineHeight": "23",
    "fontFamily": "PingFangSC-Semibold",
    "fontWeight": "600",
    "color": "rgba(102,102,102,1)"
  },
  "networkbox": {
    "width": "750",
    "textAlign": "center",
    "alignItems": "center"
  },
  "networkinfo": {
    "fontSize": "23",
    "fontFamily": "PingFangSC-Semibold",
    "fontWeight": "600",
    "color": "rgba(102,102,102,1)",
    "marginTop": "24"
  },
  "bottominfo": {
    "borderTopWidth": "1",
    "borderTopColor": "#aba7a7",
    "borderTopStyle": "solid",
    "borderLeftWidth": "1",
    "borderLeftColor": "#aba7a7",
    "borderLeftStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#aba7a7",
    "borderRightStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#aba7a7",
    "borderBottomStyle": "solid",
    "borderTopRightRadius": "10",
    "borderTopLeftRadius": "10",
    "borderBottomLeftRadius": "10",
    "borderBottomRightRadius": "10",
    "marginTop": "20",
    "marginLeft": "60",
    "marginBottom": "20",
    "width": "600",
    "height": "80",
    "display": "flex",
    "justifyContent": "center",
    "flexDirection": "row"
  },
  "bottompic": {
    "width": "50",
    "height": "50",
    "marginTop": "15"
  },
  "bottomtext": {
    "fontSize": "20",
    "marginTop": "30"
  }
}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcMinibar = __webpack_require__(1);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMinibar: _wxcMinibar2.default },
    name: 'myCooker',
    data: function data() {
        return {};
    },

    methods: {
        back: function back() {
            this.$router.go(-1);
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('wxc-minibar', {
    staticStyle: {
      height: "100px"
    },
    attrs: {
      "title": "虚拟体验",
      "backgroundColor": "#fff",
      "textColor": "#000"
    }
  }), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["boxone"]
  }, [_c('div', {
    staticClass: ["boxCommon", "boxwifi"]
  }, [_c('text', {
    staticClass: ["enviromentinfo"]
  }, [_vm._v("当前环境")]), _c('image', {
    staticClass: ["wifisty"],
    attrs: {
      "src": "/src/assets/wifi.png"
    }
  })]), _c('div', {
    staticClass: ["boxCommon"]
  }, [_c('div', {
    staticClass: ["environment"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("空气质量")]), _c('text', {
    staticClass: ["goodinfo"]
  }, [_vm._v("优")]), _c('div', {
    staticClass: ["mypro"]
  }), _c('div', {
    staticClass: ["protext"]
  }, [_c('text', {
    staticClass: ["proinfo"]
  }, [_vm._v("pm")]), _c('text', {
    staticClass: ["proinfo"]
  }, [_vm._v("2.5")])])]), _c('div', {
    staticClass: ["environment"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("燃气")]), _c('image', {
    staticClass: ["wuxielouimg"],
    attrs: {
      "src": "/src/assets/wuxielou.png"
    }
  }), _c('text', {
    staticClass: ["xieloutext"]
  }, [_vm._v("无泄漏")])]), _c('div', {
    staticClass: ["environment"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("舒适指数")]), _c('text', {
    staticClass: ["comfortLevel"]
  }, [_vm._v("一般 ")]), _c('div', {
    staticClass: ["mypro", "justSo"]
  }), _c('div', {
    staticClass: ["protext"]
  }, [_c('text', {
    staticClass: ["proinfo"]
  }, [_vm._v("湿度")]), _c('text', {
    staticClass: ["proinfo"]
  }, [_vm._v("40%")])])])]), _c('div', {
    staticClass: ["networkbox"]
  }, [_c('text', {
    staticClass: ["networkinfo"]
  }, [_vm._v("请先开启设备端配网模式")])]), _c('div', {
    staticClass: ["bottominfo"]
  }, [_c('image', {
    staticClass: ["bottompic"],
    attrs: {
      "src": "/src/assets/1.png"
    }
  }), _c('text', {
    staticClass: ["bottomtext"]
  }, [_vm._v("搜索设备")])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(187)
)

/* script */
__vue_exports__ = __webpack_require__(188)

/* template */
var __vue_template__ = __webpack_require__(189)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\oven.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8df06280"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "100"
  }
}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcMinibar = __webpack_require__(1);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMinibar: _wxcMinibar2.default },
    name: 'oven'
}; //
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('wxc-minibar', {
    attrs: {
      "title": "蒸箱",
      "backgroundColor": "#000000",
      "textColor": "#FFFFFF"
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("this is oven")]), _c('div', [_c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(191)
)

/* script */
__vue_exports__ = __webpack_require__(192)

/* template */
var __vue_template__ = __webpack_require__(197)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\steam.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-532d00e0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "100"
  },
  "navbox": {
    "width": "750",
    "height": "900",
    "background": "cover"
  },
  "bgimg": {
    "width": "750",
    "height": "900",
    "position": "absolute",
    "top": "0",
    "left": "0"
  },
  "switchButton": {
    "width": "50",
    "height": "50",
    "position": "absolute",
    "top": "10",
    "right": "10"
  },
  "mainpic": {
    "width": "200",
    "height": "200",
    "position": "absolute",
    "top": "350",
    "left": "275"
  },
  "bottompicBox": {
    "width": "720",
    "height": "150",
    "lineHeight": "150",
    "position": "absolute",
    "bottom": "20",
    "left": "15",
    "backgroundColor": "#cccccc",
    "borderTopRightRadius": "20",
    "borderTopLeftRadius": "20",
    "borderBottomLeftRadius": "20",
    "borderBottomRightRadius": "20",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "textAlign": "center",
    "alignItems": "center"
  },
  "bottompic": {
    "width": "80",
    "height": "80"
  },
  "zhengqi": {
    "fontSize": "30"
  },
  "zhengqibox": {
    "alignItems": "center"
  },
  "nav": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "width": "750",
    "height": "88"
  },
  "nav-item-selecte": {
    "width": "250",
    "height": "88",
    "lineHeight": "88",
    "color": "#FFFF00",
    "fontSize": "25",
    "textAlign": "center"
  },
  "nav-selecte-normal": {
    "width": "250",
    "height": "88",
    "lineHeight": "88",
    "color": "#000000",
    "fontSize": "25",
    "textAlign": "center"
  },
  "lists": {
    "width": "750",
    "height": "100",
    "display": "flex",
    "justifyContent": "space-around"
  }
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcMinibar = __webpack_require__(1);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

var _weexAmui = __webpack_require__(5);

var _assert = __webpack_require__(193);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: { WxcMinibar: _wxcMinibar2.default, AmTabs: _weexAmui.AmTabs },
  name: 'steam',
  data: function data() {
    return {
      selectpath: 'caipu',
      listTwo: [1, 2, 3]
    };
  },

  methods: {
    link: function link(e) {
      this._data.selectpath = e;
      switch (e) {
        case 'caipu':
          this.listTwo = [1, 2, 3];
          break;
        case 'caidan':
          this.listTwo = [4, 5, 6];
          break;
        case "moreMenu":
          this.$router.push(e);
          break;
      }
    }
  }
};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(194);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = Object({"NODE_ENV":"development"}).NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(195);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(196);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 196 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('wxc-minibar', {
    attrs: {
      "title": "蒸箱",
      "backgroundColor": "#000000",
      "textColor": "#FFFFFF"
    }
  }), _vm._m(0), _c('div', [_c('div', {
    staticClass: ["nav"]
  }, [_c('text', {
    class: [_vm.selectpath == 'caipu' ? 'nav-item-selecte' : 'nav-selecte-normal'],
    on: {
      "click": function($event) {
        _vm.link('caipu')
      }
    }
  }, [_vm._v("蒸箱菜谱")]), _c('text', {
    class: [_vm.selectpath == 'caidan' ? 'nav-item-selecte' : 'nav-selecte-normal'],
    on: {
      "click": function($event) {
        _vm.link('caidan')
      }
    }
  }, [_vm._v("蒸箱菜单")]), _c('text', {
    class: [_vm.selectpath == 'moreMenu' ? 'nav-item-selecte' : 'nav-selecte-normal'],
    on: {
      "click": function($event) {
        _vm.link('moreMenu')
      }
    }
  }, [_vm._v("更多智能菜谱>")])]), _vm._l((_vm.listTwo), function(item, index) {
    return _c('list', {
      key: index,
      staticClass: ["lists"]
    }, [_c('cell', {
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_vm._v(_vm._s(item))])])
  })], 2), _c('div', [_c('router-view')], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["navbox"]
  }, [_c('image', {
    staticClass: ["bgimg"],
    attrs: {
      "src": "/src/assets/steambg.png"
    }
  }), _c('image', {
    staticClass: ["switchButton"],
    attrs: {
      "src": "/src/assets/switchoff.png"
    }
  }), _c('image', {
    staticClass: ["mainpic"],
    attrs: {
      "src": "/src/assets/steammain.png"
    }
  }), _c('div', {
    staticClass: ["bottompicBox"]
  }, [_c('div', [_c('image', {
    staticClass: ["bottompic"],
    attrs: {
      "src": "/src/assets/lightoff.png"
    }
  })]), _c('div', [_c('image', {
    staticClass: ["bottompic"],
    attrs: {
      "src": "/src/assets/zhengxiang_water@2x.png"
    }
  })]), _c('div', {
    staticClass: ["zhengqibox"]
  }, [_c('image', {
    staticClass: ["bottompic"],
    attrs: {
      "src": "/src/assets/pengren.png"
    }
  }), _c('text', {
    staticClass: ["zhengqi"]
  }, [_vm._v("蒸汽烹饪")])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(199)
)

/* script */
__vue_exports__ = __webpack_require__(200)

/* template */
var __vue_template__ = __webpack_require__(201)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\steamMicro.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-fb18c578"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "100"
  }
}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcMinibar = __webpack_require__(1);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMinibar: _wxcMinibar2.default },
    name: 'steamMicro'
}; //
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('wxc-minibar', {
    attrs: {
      "title": "蒸微一体机",
      "backgroundColor": "#000000",
      "textColor": "#FFFFFF"
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("this is steamMicro")]), _c('div', [_c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(203)
)

/* script */
__vue_exports__ = __webpack_require__(204)

/* template */
var __vue_template__ = __webpack_require__(205)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\cooker.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3acbe936"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "100"
  }
}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcMinibar = __webpack_require__(1);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMinibar: _wxcMinibar2.default },
    name: 'cooker'
}; //
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('wxc-minibar', {
    attrs: {
      "title": "蒸箱",
      "backgroundColor": "#000000",
      "textColor": "#FFFFFF"
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("this is cooker")]), _c('div', [_c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(207)
)

/* script */
__vue_exports__ = __webpack_require__(208)

/* template */
var __vue_template__ = __webpack_require__(209)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\sink.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8fe651fa"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "100"
  }
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcMinibar = __webpack_require__(1);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMinibar: _wxcMinibar2.default },
    name: 'sink'
}; //
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('wxc-minibar', {
    attrs: {
      "title": "蒸微一体机",
      "backgroundColor": "#000000",
      "textColor": "#FFFFFF"
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("this is steamMicro")]), _c('div', [_c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(211)
)

/* script */
__vue_exports__ = __webpack_require__(212)

/* template */
var __vue_template__ = __webpack_require__(213)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\sterilizer.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3371c1ff"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "100"
  }
}

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcMinibar = __webpack_require__(1);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMinibar: _wxcMinibar2.default },
    name: 'sterilizer'
}; //
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('wxc-minibar', {
    attrs: {
      "title": "蒸微一体机",
      "backgroundColor": "#000000",
      "textColor": "#FFFFFF"
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("this is steamMicro")]), _c('div', [_c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(215)
)

/* script */
__vue_exports__ = __webpack_require__(216)

/* template */
var __vue_template__ = __webpack_require__(217)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\islandMachine.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-421d75b2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "100"
  }
}

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcMinibar = __webpack_require__(1);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMinibar: _wxcMinibar2.default },
    name: 'islandMachine'
}; //
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('wxc-minibar', {
    attrs: {
      "title": "蒸微一体机",
      "backgroundColor": "#000000",
      "textColor": "#FFFFFF"
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("this is steamMicro")]), _c('div', [_c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(219)
)

/* script */
__vue_exports__ = __webpack_require__(220)

/* template */
var __vue_template__ = __webpack_require__(221)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\dishWasher.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1d1a96b6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "100"
  }
}

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcMinibar = __webpack_require__(1);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMinibar: _wxcMinibar2.default },
    name: 'dishWasher'
}; //
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('wxc-minibar', {
    attrs: {
      "title": "蒸微一体机",
      "backgroundColor": "#000000",
      "textColor": "#FFFFFF"
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("this is steamMicro")]), _c('div', [_c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 222 */
/***/ (function(module, exports) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\heater.vue"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(224)
)

/* script */
__vue_exports__ = __webpack_require__(225)

/* template */
var __vue_template__ = __webpack_require__(226)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\components\\moreMenu.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-54b1d644"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "100"
  }
}

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcMinibar = __webpack_require__(1);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMinibar: _wxcMinibar2.default },
    name: 'moreMenu'
}; //
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('wxc-minibar', {
    attrs: {
      "title": "蒸微一体机",
      "backgroundColor": "#000000",
      "textColor": "#FFFFFF"
    }
  }), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("this is moreMenu")]), _c('div', [_c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(228)
)

/* script */
__vue_exports__ = __webpack_require__(229)

/* template */
var __vue_template__ = __webpack_require__(230)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\project\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {
  name: "App",
  data: function data() {
    return {
      mas: ""
    };
  }
};

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);