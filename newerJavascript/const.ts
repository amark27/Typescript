//const allows you to create an immutable variable
//it's also block scoped like let

// Low readability
if (x > 10) {
}

// Better!
const maxRows = 10;
if (x > maxRows) {
}

//-------------------------------------

const foo; // ERROR: const declarations must be initialized

const foo = 123;
foo = 456; // ERROR: Left-hand side of an assignment expression cannot be a constant

//--------------------------------------

//block scoped
const foo = 123;
if (true) {
    const foo = 456; // Allowed as its a new variable limited to this `if` block
}

//--------------------------------------

//const only stops shallow reassignments of the variable not deep ones

const foo = { bar: 123 };
foo = { bar: 456 }; // ERROR : Left hand side of an assignment expression cannot be a constant

const foo = { bar: 123 };
foo.bar = 456; // Allowed!
console.log(foo); // { bar: 456 }