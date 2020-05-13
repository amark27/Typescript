//undefined = variable not initialized
//null = something is not currently available

// Both null and undefined are only `==` to themselves and each other:
console.log(null == null); // true (of course)
console.log(undefined == undefined); // true (of course)
console.log(null == undefined); // true

// You don't have to worry about falsy values making through this check
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false

//recommend using == null becuase then you don't need to check for undefined as well

//------------------------------------------

//when checking global variables, can't use == null because referencing it might cause a referenceError
var someglobal;

if (typeof someglobal !== 'undefined') {
    // someglobal is now safe to use
    console.log(someglobal);
}

//------------------------------------------

//instead of this->
function foo(){
    // if Something
    return {a:1,b:2};
    // else
    return {a:1,b:undefined};
}

//write this because this documents the return prototype of the function
//don't need to mention that is b:undefined
function foo():{a:number,b?:number}{
    // if Something
    return {a:1,b:2};
    // else
    return {a:1};
}

//-----------------------------------------

//don't use undefined to denote validity of the return output
function toInt(str: string) {
return str ? parseInt(str) : undefined;
}

//better to write it this way
function toInt(str: string): { valid: boolean, int?: number } {
    const int = parseInt(str);
    if (isNaN(int)) {
        return { valid: false };
    }
    else {
        return { valid: true, int };
    }
}

//---------------------------------------

//any object trying to be converted to json will have all its undefined members
//removed
JSON.stringify({willStay: null, willBeGone: undefined}); // {"willStay":null}