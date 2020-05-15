//Typescript allows you to override the types of certain variablesvar foo = {};

//Example of when it's useful:
var foo = {}; //foo is an empty object
foo.bar = 123; // Error: property 'bar' does not exist on `{}`
foo.bas = 'hello'; // Error: property 'bas' does not exist on `{}`

//fix this with asserting this interface as the type of the object
interface Foo {
    bar: number;
    bas: string;
}
var foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';

//when an assertion is done, you must remember to fill in the members of the object
//or else there may be a bug in the code

//------------------------------------------

//double assertions can be used if Typescript is unable to assert a type on an object

//this can fail 
function handler(event: Event) {
    let element = event as HTMLElement; // Error: Neither 'Event' nor type 'HTMLElement' is assignable to the other
}

//but if you really want that type you can change it to any first then back to the right type
function handler(event: Event) {
    let element = event as any as HTMLElement; // Okay!
}