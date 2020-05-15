//1. every object is considered fresh when first created
//2. when a fresh object literal is assigned to a variable or passed as a parameter for a
//  non-empty target type, it is an error for the object literal to specify properties that don't exist in the target type
//3. freshness disappears in a type assertion of when the type of an object literal is widened

function logName(something: { name: string }) {
    console.log(something.name);
}

var person = { name: 'matt', job: 'being awesome' };
var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };
var random = { note: `I don't have a name property` };

logName(person); // okay
logName(animal); // okay
logName(random); // Error: property `name` is missing

//problem here because the object literal is passed directly with extra members
function logName(something: { name: string }) {
    console.log(something.name);
}

logName({ name: 'matt' }); // okay
logName({ name: 'matt', job: 'being awesome' }); // Error: object literals must only specify known properties. `job` is excessive here.

//------------------------------------

//can also allow extra properties in the object with index signature
var x: { foo: number, [x: string]: any };
x = { foo: 1, baz: 2, bad: 3 };  // Ok, `baz`, 'bad' matched by index signature