/**
 * Created by rocky on 16/10/17.
 * wheel声明
 */
import {noop, forEach} from "./util/index";

/**
 * 基础类
 */
function wheel() {
    this.$scope = {};//作用域
    this.noop = noop;
    this.forEach = forEach;
}

/**
 * 当前已有指令
 */
wheel.directives = {};

wheel.directive = function(name, options) {
    wheel.directives[name] = options;
}
/**
 * 动态加载捆绑指令
 */
wheel.$async = function() {

}


var a = document.getElementById("a");
var b = a.children;
forEach(b, function (v) {
    console.log(v.attributes);
});
export default wheel;


