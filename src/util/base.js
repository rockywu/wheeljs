/**
 * Created by rocky on 16/10/17.
 */
import { rWord } from "./regExp";
import wheel from "../wheel";

/**
 * 空执行函数
 * @return void
 */
export function noop() {}

/**
 * 对象或数组遍历
 * @param {Object|Array} obj
 * @param {Function} callback
 * @param {Array} result
 * @result void;
 */
export function forEach(obj, callback, result) {
    result =  result || [];
    var i;
    if(obj.length) {
        for(i = 0; i < obj.length; i++) {
            if(callback.call(result, obj[i], i) === false) {
                break;
            }
        }
    } else {
        for( i in obj) {
            if(!obj.hasOwnProperty(i)) {
                continue;
            }
            if(callback.call(result, obj[i], i) === false) {
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



