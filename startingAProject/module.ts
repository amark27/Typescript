//all variables by default are part of the global namespace
//declaring var foo in one file, can allow you to access it in another file like var bar = foo

//----------------------------

//can create external modules using import/export statements to restrict the availability of variables
//all variables are then locally scoped within the file
export var foo = 123;

//now can't do
var bar = foo; //in another file

//have to import into the other file to use it
import {foo} from "./foo";
var bar = foo

//-----------------------------

//export/import stuff

// file `foo.ts`
let someVar = 123;
type SomeType = {
  foo: string;
};
export {
  someVar,
  SomeType
};

//export as a different name
// file `foo.ts`
let someVar = 123;
export { someVar as aDifferentName };

//importing with a different name
// file `bar.ts`
import { someVar as aDifferentName } from './foo';

//importing everything in a file
// file `bar.ts`
import * as foo from './foo';
// you can use `foo.someVar` and `foo.SomeType` and anything else that foo might export.

//re-export all the items in foo
export * from './foo';


//paths can be provided using relative paths or can be dynamic look-up
import * as foo from 'foo'; //will look in node modules folder and keep going up until it finds a file like that

//-------------------------------------

//can use global.d.ts to declare all the variables that one will use in the global namespace

//declare adds these variables globally to the project
declare const BUILD_MODE_PRODUCTION: boolean; // can be used for conditional compiling
declare const BUILD_VERSION: string;