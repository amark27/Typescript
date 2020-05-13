var foo = 123;
foo = '456'; //foo is of type 'number' so can't dassign a string to it

var foo: number = 123; //says that the variable foo is of type number (annotation like python)
var foo: number = '123'; //bad becuase assigning a string to a number

//--------------------------------------------------------

//showing structural classes
interface Point2D {
    x: number;
    y: number;
}
interface Point3D {
    x: number;
    y: number;
    z: number;
}
var point2D: Point2D = { x: 0, y: 10 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }
function iTakePoint2D(point: Point2D) { /* do something */ }

iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay (needs to have x and y here to be able to infer the point2D type)
iTakePoint2D({ x: 0 }); // Error: missing information `y`


//even though there may be typescript errors in this code, typescript still converts this file to js

//--------------------------------------------------------

//types can be ambiguous. Ex: porting this jquery code to typescript
declare var $: any; //declare $ as a variable
$('.awesome').show(); // Okay! now 

//can be more specific with the variable type
declare var $: {
    (selector:string): any;
};
$('.awesome').show(); // Okay!
$(123).show(); // Error: selector needs to be a string

//--------------------------------------------------------

//example class definition
class Point {
    constructor(public x: number, public y: number) {
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // { x: 10, y: 30 }

//can use fat arrow operator
var inc = x => x+1;