/*!
 * wheel.js v0.0.4
 * (c) 2016 Rocky Wu
 * Released under the MIT License.
 */
var Wheel = (function () {
'use strict';

/**
 * Created by rocky on 16/10/17.
 */

/**
 * 空执行函数
 * @return void
 */


/**
 * 对象或数组遍历
 * @param {Object|Array} obj
 * @param {Function} callback
 * @param {Array} result
 * @result void;
 */

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

}());
