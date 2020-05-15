//the file contains all the common JS constructs in typescript
//d.ts files include the type annotations for common js libraries so typescript code can access them

//Example: this runs because lib.d.ts has the toString method defined
//this wouldn't work if lib.d.ts was not there
var foo = 123;
var bar = foo.toString();

//----------------------------------

//can extend the interfaces that are defined in the file
//by adding your own interface definition that will be merged with it

//in lib.d.ts
interface Window extends EventTarget, WindowTimers, WindowSessionStorage, WindowLocalStorage, WindowConsole, GlobalEventHandlers, IDBEnvironment, WindowBase64 {
    animationStartTime: number;
    applicationCache: ApplicationCache;
    clientInformation: Navigator;
    closed: boolean;
    crypto: Crypto;
    // so on and so forth...
}

//add a function to it in another file
interface Window {
    helloWorld(): void;
}

//------------------------------------

//should add new implementations in global.d.ts file
// Ensure this is treated as a module.
export {};

declare global {
    interface String {
        endsWith(suffix: string): boolean;
    }
}

String.prototype.endsWith = function(suffix: string): boolean {
    var str: string = this;
    return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
}

console.log('foo bar'.endsWith('bas')); // false
console.log('foo bas'.endsWith('bas')); // true