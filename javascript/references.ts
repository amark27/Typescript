var foo = {};
var bar = foo; // bar is a reference to the same object

foo.baz = 123;
console.log(bar.baz); // 123

//------------------------------------------------------

//test equality with references
var foo = {};
var bar = foo; // bar is a reference
var baz = {}; // baz is a *new object* distinct from `foo`

console.log(foo === bar); // true
console.log(foo === baz); // false