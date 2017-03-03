/**
 * Created by rocky on 16/10/27.
 */
import { forEach } from "./util/index";
export default function parser(el) {
    console.log(el);
    forEach(directives, (v, k) => {
        console.log(v, k);
    });
}

