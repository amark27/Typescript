//js doesn't add numbers properly
console.log(.1 + .2); // 0.30000000000000004

//-------------------------------------------

//Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER are numbers that cannot be the result of some type of rounding error
console.log({max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER});
// {max: 9007199254740991, min: -9007199254740991}

//the unsafe numbers are +-1 away from these max numbers
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true!
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // true!

console.log(Number.MAX_SAFE_INTEGER);      // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1);  // 9007199254740992 - Correct
console.log(Number.MAX_SAFE_INTEGER + 2);  // 9007199254740992 - Rounded!
console.log(Number.MAX_SAFE_INTEGER + 3);  // 9007199254740994 - Rounded - correct by luck
console.log(Number.MAX_SAFE_INTEGER + 4);  // 9007199254740996 - Rounded!

//can check safety with es6
// Safe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true

// Unsafe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

// Because it might have been rounded to it due to overflow
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 10)); // false

//---------------------------------------------

//big.js (package) can help with perfect decimal math and safe out of bound integer values

//---------------------------------------------

//number values can also become not a number -> that's NaN
console.log(Math.sqrt(-1)); // NaN

//To check equality with NaN....
// Don't do this
console.log(NaN === NaN); // false!!

// Do this
console.log(Number.isNaN(NaN)); // true

//---------------------------------------------

//the actual max values that can be represented by a number
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
console.log(-Number.MAX_VALUE); // -1.7976931348623157e+308

//values get clamped if precision doesn't change
console.log(Number.MAX_VALUE + 1 == Number.MAX_VALUE);   // true!
console.log(-Number.MAX_VALUE - 1 == -Number.MAX_VALUE); // true!

//if you go way over, then it evalues to Infinity/-Infinity
console.log(Number.MAX_VALUE + 10**1000);  // Infinity
console.log(-Number.MAX_VALUE - 10**1000); // -Infinity

//both are ways you can write Infinity
console.log(Number.POSITIVE_INFINITY === Infinity);  // true
console.log(Number.NEGATIVE_INFINITY === -Infinity); // true

//can compare numbers properly to Infinity
console.log( Infinity >  1); // true
console.log(-Infinity < -1); // true

//---------------------------------------------

//closest number to 0, any number smaller will be rounded to 0
console.log(Number.MIN_VALUE);  // 5e-324