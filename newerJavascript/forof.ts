//to iterate through either an array or string, can use for of loop

//common mistake - for in loop is used but this iterates through the keys of the object
var someArray = [9, 2, 5];
for (var item in someArray) {
    console.log(item); // 0,1,2
}

//proper way is to use for of
var someArray = [9, 2, 5];
for (var item of someArray) {
    console.log(item); // 9,2,5
}

//can also use it on a string
var hello = "is it me you're looking for?";
for (var char of hello) {
    console.log(char); // is it me you're looking for?
}