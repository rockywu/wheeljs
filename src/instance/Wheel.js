/**
 * Created by rocky on 16/10/27.
 */
import parser from "../parser";
import doc from "../browser/document";
function Wheel() {
}
var directives = Wheel.directives = {};

parser(doc.body);



export default new Wheel();
