console.log(5 == "5"); // true   , TS Error
console.log(5 === "5"); // false , TS Error

//below are all TS errors again
console.log("" == "0"); // false
console.log(0 == ""); // true (0 and empty string are falsy so evaluates to true)

console.log("" === "0"); // false
console.log(0 === ""); // false

//should use === to test for equality

//--------------------------------------------

//can't check equality of objects using === or ==
//should use deep-equal npm package to test
console.log({a:123}==={a:123}); // False, doesn't work

import * as deepEqual from "deep-equal";

console.log(deepEqual({a:123},{a:123})); // True