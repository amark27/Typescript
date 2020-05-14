// array and object destructuring (breaking up a structure)

var rect = { x: 0, y: 10, width: 15, height: 20 };

// Object Destructuring assignment
var {x, y, width, height} = rect;
console.log(x, y, width, height); // 0,10,15,20

rect.x = 10;
({x, y, width, height} = rect); // assign to existing variables using outer parentheses
console.log(x, y, width, height); // 10,10,15,20

// can rename the variable that is being used

// structure
const obj = {"some property": "some value"};

// destructure
const {"some property": someProperty} = obj;
console.log(someProperty === "some value"); // true

//getting deep data with destructuring
var foo = { bar: { bas: 123 } };
var {bar: {bas}} = foo; // Effectively `var bas = foo.bar.bas;

//-------------------------------------------

//destructuring with rest operator
var {w, x, ...remaining} = {w: 1, x: 2, y: 3, z: 4};
console.log(w, x, remaining); // 1, 2, {y:3,z:4}

//--------------------------------------------
//array destructuring is similar to above except with arrays

//can ignore a value in the array by leaving that spot empty
var [x, , ...remaining] = [1, 2, 3, 4];
console.log(x, remaining); // 1, [3,4]