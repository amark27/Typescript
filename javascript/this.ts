//this gives the current context of where the function was called

function foo() {
    console.log(this);
}

foo(); // logs out the global e.g. `window` in browsers
let bar = {
    foo
}
bar.foo(); // Logs out `bar` as `foo` was called on `bar`