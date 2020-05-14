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
