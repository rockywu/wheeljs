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
 * Created by rocky on 16/10/27.
 */
function Wheel$1() {}

/**
 * Created by rocky on 16/10/17.
 * 声明指令行为
 */
var initDirective = (function (Wheel) {
    var directives = Wheel.directives = {};
    Wheel.directive = function (name, configures) {
        if (!name || directives[name]) {
            return false;
        }directives[name] = configures;
        return true;
    };
});

/**
 * Created by rocky on 16/10/27.
 */
initDirective(Wheel$1);

return Wheel$1;

})));
