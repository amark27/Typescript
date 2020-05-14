// let allows you to bring true block-scope into javascript
// var is function scoped

var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo); // 456

let foo = 123;
if (true) {
    let foo = 456;
}
console.log(foo); // 123

//important to use in loops

var index = 0;
var array = [1, 2, 3];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log(index); // 0

//----------------------------------------

//functions create a new scope here
var foo = 123;
function test() {
    var foo = 456;
}
test();
console.log(foo); // 123

//----------------------------------------

//can use let in a switch statement to reuse variable names
switch (name) {
    case 'x': {
        let x = 5;
        // ...
        break;
    }
    case 'y': {
        let x = 10;
        // ...
        break;
    }
}

//------------------------------------------

//let in closures 

var funcs = [];
// create a bunch of functions
for (var i = 0; i < 3; i++) {
    funcs.push(function() {
        console.log(i);
    })
}
// call them
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
//prints 3 all 3 times; not 0,1,2
//because i has a value of 3 when the 2nd loop is run

//to get 0,1,2 can use let that will create a copy of i every loop iteration
var funcs = [];
// create a bunch of functions
for (let i = 0; i < 3; i++) { // Note the use of let
    funcs.push(function() {
        console.log(i);
    })
}
// call them
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
//prints 0,1,2
