//can annotate the data types that are passed in and returned from a function

//used an interface here but can use other ways of annotation like inline annotations
interface Foo {
    foo: string;
}

// Return type annotated as `: Foo`
function foo(sample: Foo): Foo {
    return sample;
}

//---------------------------------------------

//can use a question mark to indicate an optional parameter

function foo(bar: number, bas?: string): void {
    // ..
}

foo(123); //bas variable doesn't have to be included
foo(123, 'hello');

//or

//indicates that the return value doesn't have to include the value member
function foo(bar: number): {valid: boolean, value?: number} {
    // ..
}

//---------------------------------------------

//function overloading can be done by writing function prototype overloads before the actual
//implementation of the function

// Overloads
function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a: number, b?: number, c?: number, d?: number) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}

//can't call this function with 3 parameters
padding(1); // Okay: all
padding(1,1); // Okay: topAndBottom, leftAndRight
padding(1,1,1,1); // Okay: top, right, bottom, left

padding(1,1,1); // Error: Not a part of the available overloads

//---------------------------------------------

//can declare the type of a function in two ways
type LongHand = {
    (a: number): number;
};

type ShortHand = (a: number) => number;


//can use the first way to provide function overloads
type LongHandAllowsOverloadDeclarations = {
    (a: number): number;
    (a: string): string;
};