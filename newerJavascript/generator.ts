//generator is an object that follows the iterator interface

//can use generators as lazy iterators:

//could also make an infinite iterator by replacing the index<3 condition with true
function* idMaker(){
    let index = 0;
    while(index < 3)
      yield index++;
  }
  
  let gen = idMaker();
  
  console.log(gen.next()); // { value: 0, done: false }
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { done: true }

//----------------------------------

//can use generators to control execution
function* generator(){
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
}

var iterator = generator();
console.log('Starting iteration'); // This will execute before anything in the generator function body executes
console.log(iterator.next()); // generator starts execution once next() is called. return: { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
/*
Output

$ node outside.js
Starting iteration
Execution started
{ value: 0, done: false }
Execution resumed
{ value: 1, done: false }
Execution resumed
{ value: undefined, done: true }
*/

//---------------------------------

//can inject values into the generator
function* generator() {
    const bar = yield 'foo'; // bar may be *any* type
    console.log(bar); // bar!
}

const iterator = generator();
// Start execution till we get first yield value
const foo = iterator.next();
console.log(foo.value); // foo

// Resume execution injecting bar
const nextThing = iterator.next('bar'); //nextThing = 'bar' here

//can also inject the generator with an error so the generator will do the error message
function* generator() {
    try {
        yield 'foo';
    }
    catch(err) {
        console.log(err.message); // bar!
    }
}

var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value); // foo
// Resume execution throwing an exception 'bar'
var nextThing = iterator.throw(new Error('bar'));