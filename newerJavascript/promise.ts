// promises can either be pending/fulfilled/rejected

//looks like this
const promise = new Promise((resolve, reject) => {
    // the resolve / reject functions control the fate of the promise
});

Promise.resolve(res) //creates a promise that resolved already
Promise.reject(err) //creates a promise that was rejected

//promises can be chained
Promise.resolve(123)
    .then((res) => {
        console.log(res); // 123
        return 456;
    })
    .then((res) => {
        console.log(res); // 456
        return Promise.resolve(123); // Notice that we are returning a Promise
    })
    .then((res) => {
        console.log(res); // 123 : Notice that this `then` is called with the resolved value
        return 123;
    })

//errors are caught by the nearest catch statement
Promise.resolve(123)
    .then((res) => {
        throw new Error('something bad happened'); // throw a synchronous error
        return 456;
    })
    .catch((err) => {
        console.log('first catch: ' + err.message); // something bad happened
        return 123;
    })
    .then((res) => {
        console.log(res); // 123
        return Promise.resolve(789);
    })
    .catch((err) => {
        console.log('second catch: ' + err.message); // never called
    })

//-----------------------------------

//In Typescript, promise data types are inferred
function iReturnPromiseAfter1Second(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello world!"), 1000);
    });
}

Promise.resolve(123)
    .then((res) => {
        // res is inferred to be of type `number`
        return iReturnPromiseAfter1Second(); // We are returning `Promise<string>`
    })
    .then((res) => {
        // res is inferred to be of type `string`
        console.log(res); // Hello world!
    });

//-----------------------------------------

//to run promises in parallel call Promise.all

// an async function to simulate loading an item from some server
function loadItem(id: number): Promise<{ id: number }> {
    return new Promise((resolve) => {
        console.log('loading item', id);
        setTimeout(() => { // simulate a server delay
            resolve({ id: id });
        }, 1000);
    });
}

// Chained / Sequential way of running them
let item1, item2;
loadItem(1)
    .then((res) => {
        item1 = res;
        return loadItem(2);
    })
    .then((res) => {
        item2 = res;
        console.log('done');
    }); // overall time will be around 2s

// Concurrent / Parallel way of running them
Promise.all([loadItem(1), loadItem(2)])
    .then((res) => {
        [item1, item2] = res;
        console.log('done');
    }); // overall time will be around 1s


//sometimes we want to run multiple async functions at the same time and when
//the first one returns, we want the other to stop. Use Promise.race
var task1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'one');
});
var task2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000, 'two');
});

Promise.race([task1, task2]).then(function(value) {
  console.log(value); // "one"
  // Both resolve, but task1 resolves faster
});