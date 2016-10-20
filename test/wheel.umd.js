/*!
 * wheel.js v0.0.4
 * (c) 2016 Rocky Wu
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Wheel = factory());
}(this, (function () { 'use strict';

/**
 * Created by rocky on 16/10/17.
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
            if (!callback.call(result, obj[i], i)) {
                break;
            }
        }
    } else {
        for (i in obj) {
            if (!obj.hasOwnProperty(i)) {
                continue;
            }
            if (!callback.call(result, obj[i], i)) {
                break;
            }
        }
    }
}

/**
 * Created by rocky on 16/10/17.
 * 定义dom操作
 */

/**
 * Created by rocky on 16/10/17.
 */

/**
 * Created by rocky on 16/10/17.
 * wheel声明
 */
/**
 * 基础类
 */
function wheel() {
  this.$scope = {}; //作用域
  this.noop = noop;
  this.forEach = forEach;
}

/**
 * 当前已有指令
 */
wheel.directives = {};

wheel.directive = function (name, options) {
  wheel.directives[name] = options;
};
/**
 * 动态加载捆绑指令
 */
wheel.$async = function () {};

return wheel;

})));
