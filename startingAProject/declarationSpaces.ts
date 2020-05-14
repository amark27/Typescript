//2 declaration spaces: type and variable

/* Type Declaration Space */ 

//declare some types
class Foo {};
interface Bar {};
type Bas = {};

//so now you can use these types to do type annotation
var foo: Foo;
var bar: Bar;
var bas: Bas;

//however can't assign it to a value
var bar = Bar; // ERROR: "cannot find name 'Bar'"

/* Variable Declaration Space */

//can assign a class to a variable so you can pass around classes as variables
//anything that uses var, let, const are in the variable declaration space
class Foo {};
var someVar = Foo;
var someOtherVar = 123;
