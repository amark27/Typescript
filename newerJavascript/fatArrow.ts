//different way of writing functions
//lexically captures meaning of this and its arguments

//fat arrow captures this
function Person(age) {
    this.age = age;
    this.growOld = () => {
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000);

setTimeout(function() { console.log(person.age); },2000); // 2

//does the same as above
function Person(age) {
    this.age = age;
    var _this = this;  // capture this
    this.growOld = function() {
        _this.age++;   // use the captured this
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000);

setTimeout(function() { console.log(person.age); },2000); // 2

//------------------------------------------

//arrow functions work fine with inheritance
class Adder {
    constructor(public a: number) {}
    add = (b: number): number => {
        return this.a + b;
    }
}
class Child extends Adder {
    //automatically calls base classes constructor when invoked
    callAdd(b: number) {
        return this.add(b);
    }
}
// Demo to show it works
const child = new Child(123);
console.log(child.callAdd(123)); // 246

//arrow functions don't work if you need to use super keyword
//work around is to create a variable which stores the add that was overrided
class Adder {
    constructor(public a: number) {}
    // This function is now safe to pass around
    add = (b: number): number => {
        return this.a + b;
    }
}

class ExtendedAdder extends Adder {
    // Create a copy of parent before creating our own
    private superAdd = this.add;
    // Now create our override
    add = (b: number): number => {
        return this.superAdd(b);
    }
}
