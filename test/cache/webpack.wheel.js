/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Wheel = __webpack_require__(1);

	var _Wheel2 = babelHelpers.interopRequireDefault(_Wheel);

	var _directive = __webpack_require__(2);

	/**
	 * Created by rocky on 16/10/27.
	 */
	(0, _directive.initDirective)(_Wheel2.default);
	exports.default = _Wheel2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _parser = __webpack_require__(3);

	var _parser2 = babelHelpers.interopRequireDefault(_parser);

	var _document = __webpack_require__(6);

	var _document2 = babelHelpers.interopRequireDefault(_document);

	/**
	 * Created by rocky on 16/10/27.
	 */
	function Wheel() {}
	var directives = Wheel.directives = {};

	(0, _parser2.default)(_document2.default.body);

	exports.default = new Wheel();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.initDirective = initDirective;
	/**
	 * Created by rocky on 16/10/17.
	 * 声明指令行为
	 */
	function initDirective(Wheel) {
	    Wheel.directive = function (name, configures) {
	        if (!name || directives[name]) {
	            return false;
	        }directives[name] = configures;
	        return true;
	    };
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parser;

	var _index = __webpack_require__(4);

	function parser(el) {
	    console.log(el);
	    (0, _index.forEach)(directives, function (v, k) {
	        console.log(v, k);
	    });
	} /**
	   * Created by rocky on 16/10/27.
	   */

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(5);

	Object.keys(_base).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _base[key];
	    }
	  });
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.noop = noop;
	exports.forEach = forEach;
	/**
	 * Created by rocky on 16/10/17.
	 * 基础工具
	 */
	/**
	 * 空执行函数
	 * @return void
	 */
	function noop() {}

	/**
	 * 对象或数组遍历
	 * @param {Object|Array} obj
	 * @param {Function} callback
	 * @param {Array} result
	 * @result void;
	 */
	function forEach(obj, callback, result) {
	    result = result || [];
	    var i;
	    if (obj.length) {
	        for (i = 0; i < obj.length; i++) {
	            if (callback.call(result, obj[i], i) === false) {
	                break;
	            }
	        }
	    } else {
	        for (i in obj) {
	            if (!obj.hasOwnProperty(i)) {
	                continue;
	            }
	            if (callback.call(result, obj[i], i) === false) {
	                break;
	            }
	        }
	    }
	}

	//let class2type = {},
	//    isFunStr = 'Boolean Number String Function Array Date RegExp Object Error Undefined Null';
	///**
	// * is函数构造 Boolean Number String Function Array Date RegExp Object Error Undefined Null
	// */
	//isFunStr.replace(rWord, function (name) {
	//    var lower = name.toLowerCase();
	//    class2type['[object ' + name + ']'] = lower;
	//    export ['is' + name] = function (obj) {
	//        return redraw.type(obj) == lower;
	//    }
	//});
	//
	///**
	// * 是否是window对象
	// * @param obj
	// * @return {boolean|*}
	// */
	//redraw.isWindow = function (obj) {
	//    return rWindow.test(tos.call(obj))
	//}
	//
	///**
	// * 取得目标的类型
	// * @param {object} obj
	// * @return {string} 目标类型
	// */
	//redraw.type = function type(obj) {
	//    if (obj == null) {
	//        return String(obj)
	//    }
	//    // 早期的webkit内核浏览器实现了已废弃的ecma262v4标准，可以将正则字面量当作函数使用，因此typeof在判定正则时会返回function
	//    return typeof obj === 'object' || typeof obj === 'function' ?
	//    class2type[toS.call(obj)] || 'object' : typeof obj;
	//}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * export document
	 * Created by rocky on 16/10/25.
	 */

	/**
	 * document
	 * @type {HTMLDocument}
	 */
	exports.default = window.document;

/***/ }
/******/ ]);