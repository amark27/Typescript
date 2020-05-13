//declare classes like below

class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // {x:10,y:30}

//------------------------------------

//typescript supports single inheritance with extends
class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y); //have to have this line when have inheritance
        this.z = z;
    }
    add(point: Point3D) { //overrides add function
        var point2D = super.add(point); 
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}

//-------------------------------------

//static variables are shared amongst class instances
class Something {
    static instances = 0;
    constructor() {
        Something.instances++;
    }
}

var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2

//--------------------------------------

//can use access modifiers on all members of the class
class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}

// EFFECT ON INSTANCES
var foo = new FooBase();
foo.x; // okay
foo.y; // ERROR : private
foo.z; // ERROR : protected

// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
    constructor() {
      super();
        this.x; // okay
        this.y; // ERROR: private
        this.z; // okay
    }
}

//-----------------------------------------

//abstract classes can't be instantiated directly. A derived class must be instantitated to get it
abstract class FooCommand {}

class BarCommand extends FooCommand {}

const fooCommand: FooCommand = new FooCommand(); // Cannot create an instance of an abstract class.

const barCommand = new BarCommand(); // You can create an instance of a class that inherits from an abstract class.

//abstract members can't be call immediately.  Derived classes need to implement it
abstract class FooCommand {
    abstract execute(): string;
  }
  
class BarErrorCommand  extends FooCommand {} // 'BarErrorCommand' needs implement abstract member 'execute'.

class BarCommand extends FooCommand {
    execute() {
        return `Command Bar executed`;
    }
}

const barCommand = new BarCommand();

barCommand.execute(); // Command Bar executed

//-------------------------------------------

//class constructors are optional.  Below works
class Foo {}
var foo = new Foo();

//---------------------------------------------

//typescript makes a short hand for initializing class variables through a constructor
class Foo {
    x: number;
    constructor(x:number) {
        this.x = x;
    }
}

//notice the access modifier added to the parameter.  That makes it equal to the code above
class Foo {
    constructor(public x:number) {
    }
}

//-------------------------------------------

//can initiazlize the classes members directly inside the class. Doesn't need to be in a constructor
class Foo {
    members = [];  // Initialize directly
    add(x) {
        this.members.push(x);
    }
}
