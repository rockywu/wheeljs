/**
 * Created by rocky on 16/10/17.
 * 声明指令行为
 */
export function initDirective(Wheel) {
    Wheel.directive = (name, configures) => {
        if(!name || directives[name]) {
            return false;
        } directives[name] = configures;
        return true;
    }
}
