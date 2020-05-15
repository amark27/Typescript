//interface allows you to create a teamplate of the class you make

//these are 2 ways to do the same thing
// Sample A
declare var myPoint: { x: number; y: number; };

// Sample B
interface Point {
    x: number; y: number;
}
declare var myPoint: Point;

//beauty of Sample B is that you can merge an existing declaration of the interface
//with another one

// Lib a.d.ts
interface Point {
    x: number; y: number;
}
declare var myPoint: Point;

// Lib b.d.ts
interface Point {
    z: number;
}

// Your code
var myPoint.z; // Allowed!

//--------------------------------------

//classes implement an interface as a way of showing what is required to declare the class
interface Point {
    x: number; y: number;
    z: number; // New member
}

class MyPoint implements Point { // ERROR : missing member `z`
    x: number; y: number; z: number;
}


var foo: MyPoint = new MyPoint();

//--------------------------------------

//adding a function definition to an interface
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

//---------------------------------------

//writing an interface where the class needs to implement a certain class constructor,
//is more complicated. The constructor is part of the static side of the class, not the instance side.
//Need to create two interfaces so we can work on only the static side, before the instance is made

//createClock checks if the class object has the correct constructor signature
//this prevents clocks that don't have the right signature from being created

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);