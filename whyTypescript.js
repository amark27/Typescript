var foo = 123;
foo = '456'; //foo is of type 'number' so can't dassign a string to it
var foo = 123; //says that the variable foo is of type number (annotation like python)
var foo = '123'; //bad becuase assigning a string to a number
var point2D = { x: 0, y: 10 };
var point3D = { x: 0, y: 10, z: 20 };
function iTakePoint2D(point) { }
iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay (needs to have x and y here to be able to infer the point2D type)
iTakePoint2D({ x: 0 }); // Error: missing information `y`
$('.awesome').show(); // Okay! now 
$('.awesome').show(); // Okay!
$(123).show(); // Error: selector needs to be a string
//--------------------------------------------------------
//example class definition
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // { x: 10, y: 30 }
//can use fat arrow operator
var inc = function (x) { return x + 1; };
