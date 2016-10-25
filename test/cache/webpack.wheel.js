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

	var _index = __webpack_require__(1);

	/**
	 * 基础类
	 */
	function wheel() {
	  this.$scope = {}; //作用域
	  this.noop = _index.noop;
	  this.forEach = _index.forEach;
	}

	/**
	 * 当前已有指令
	 */
	/**
	 * Created by rocky on 16/10/17.
	 * wheel声明
	 */
	wheel.directives = {};

	wheel.directive = function (name, options) {
	  wheel.directives[name] = options;
	};
	/**
	 * 动态加载捆绑指令
	 */
	wheel.$async = function () {};

	var a = document.getElementById("a");
	var b = a.children;
	(0, _index.forEach)(b, function (v) {
	  console.log(v.attributes);
	});
	exports.default = wheel;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(2);

	Object.keys(_base).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _base[key];
	    }
	  });
	});

	var _dom = __webpack_require__(3);

	Object.keys(_dom).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _dom[key];
	    }
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.noop = noop;
	exports.forEach = forEach;

	var _regExp = __webpack_require__(4);

	var _wheel = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../wheel\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _wheel2 = babelHelpers.interopRequireDefault(_wheel);

	/**
	 * 空执行函数
	 * @return void
	 */
	/**
	 * Created by rocky on 16/10/17.
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
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by rocky on 16/10/17.
	 * 定义dom操作
	 */
	"use strict";

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 正则表达式
	 * Created by rocky on 16/10/20.
	 */
	var rWord = exports.rWord = /[^, ]+/g;

/***/ }
/******/ ]);