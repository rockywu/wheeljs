/**
 * Created by rocky on 16/10/17.
 */

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
            if(!callback.call(result, obj[i], i)) {
                break;
            }
        }
    } else {
        for( i in obj) {
            if(!obj.hasOwnProperty(i)) {
                continue;
            }
            if(!callback.call(result, obj[i], i)) {
                break;
            }
        }
    }
}

