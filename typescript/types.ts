//3 primitive types: number string, boolean

var num: number;
var str: string;
var bool: boolean;

num = 123;
num = 123.456;
num = '123'; // Error

str = '123';
str = 123; // Error

bool = true;
bool = false;
bool = 'false'; // Error

//-----------------------------------

//arrays can be made by putting [] at the end of a primitive data type
var boolArray: boolean[];

boolArray = [true, false];
console.log(boolArray[0]); // true
console.log(boolArray.length); // 2
boolArray[1] = true;
boolArray = [false, false];

boolArray[0] = 'false'; // Error!
boolArray = 'false'; // Error!
boolArray = [true, 'false']; // Error!

//--------------------------------------

//interfaces lets you do multiple type annotations and combine it into a single annotation
interface Name {
    first: string;
    second: string;
}

var name: Name;
name = {
    first: 'John',
    second: 'Doe'
};

name = {           // Error : `second` is missing
    first: 'John'
};
name = {           // Error : `second` is the wrong type
    first: 'John',
    second: 1337
};

//can also do the above inline with
var name: {
    first: string;
    second: string;
};

//---------------------------------------

//any let's you assign any type to the variable and the compiler will not do any checks
var power: any;

// Takes any and all types
power = '123';
power = 123;

// Is compatible with all types
var num: number;
power = num;
num = power;

//-------------------------------------

//null and undefined don't have a type (are of type any) unless strictNullCheck is true
var num: number;
var str: string;

// These literals can be assigned to anything
num = null;
str = undefined;

//:void signifies that a function doesn't return anything
function log(message): void {
    console.log(message);
}

//------------------------------------

//T is the generic type used when creating teamplate functions
function reverse<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}

var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1

// Safety!
reversed[0] = '1';     // Error!
reversed = ['1', '2']; // Error!

reversed[0] = 1;       // Okay
reversed = [1, 2];     // Okay

//------------------------------------
//union type allows you to declare that a variable can be any of 2 types
//example string[]|string means that the variable can either be an array or just the object

//this function can take a list of strings or just a string itself
function formatCommandline(command: string[]|string) {
    var line = '';
    if (typeof command === 'string') {
        line = command.trim();
    } else {
        line = command.join(' ').trim();
    }

    // Do stuff with line: string
}

//------------------------------------

//intersection type is used to denote the intersection of 2 data types
//example firstName & lastName classes

//use case is when you want to merge two classes into one
function extend<T, U>(first: T, second: U): T & U {
    return { ...first, ...second };
}
  
const x = extend({ a: "hello" }, { b: 42 });

// x now has both `a` and `b`
const a = x.a;
const b = x.b;

//---------------------------------------

//tuples are created by using an array
// : [class1, class2]

var nameNumber: [string, number];

// Okay
nameNumber = ['Jenny', 8675309];

// Error!
nameNumber = ['Jenny', '867-5309'];

//can also destructure
var [name1, number] = nameNumber;

//--------------------------------------

//can create type aliases (typedef in c) in typescript
type StrOrNum = string|number;

// Usage: just like any other notation
var sample: StrOrNum;
sample = 123;
sample = '123';

// Just checking
sample = true; // Error!

//more examples
type Text = string | { text: string };
type Coordinates = [number, number];
type Callback = (data: string) => void;