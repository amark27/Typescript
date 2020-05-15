//indicates that the part of an interface is like a function (callable)

interface ReturnString {
    (): string
}
declare const foo: ReturnString;
const bar = foo(); // bar is inferred as a string

//------------------------------------------

//interface can have multiple callable annotations to specify function overloading
interface Overloaded {
    (foo: string): string
    (foo: number): number
}

// example implementation
function stringOrNumber(foo: number): number;
function stringOrNumber(foo: string): string;
function stringOrNumber(foo: any): any {
    if (typeof foo === 'number') {
        return foo * foo;
    } else if (typeof foo === 'string') {
        return `hello ${foo}`;
    }
}

const overloaded: Overloaded = stringOrNumber;

// example usage
const str = overloaded(''); // type of `str` is inferred as `string`
const num = overloaded(123); // type of `num` is inferred as `number`

//---------------------------------------

//can use arrow operator to also show callable signature
const simple: (foo: number) => string
    = (foo) => foo.toString();

//----------------------------------------

//newable is a special callable type annotation with prefix "new"
//just means that you need to call new right before

interface CallMeWithNewToGetString {
    new(): string
  }
// Usage
declare const Foo: CallMeWithNewToGetString;
const bar = new Foo(); // bar is inferred to be of type string