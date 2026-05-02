import { myValue } from "./main.js";
import * as myModule from "./main.js";

console.log(myValue);
console.log(myModule.myValue);
setTimeout(() => {
    console.log(myValue);
    console.log(myModule.myValue);
    myValue = 3;
}, 1000);