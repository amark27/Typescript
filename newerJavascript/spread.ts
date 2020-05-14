//spread operator lets you split the array/object into its individual values
var list = [1, 2];
list = [...list, 3, 4];
console.log(list); // [1,2,3,4]

//-------------------------------------

//done with objects
const point2D = {x: 1, y: 2};
/** Create a new object by using all the point2D props along with z */
const point3D = {...point2D, z: 3};

//order mattrs in which the spread is applied (the latter members are the ones transferred)
const point2D = {x: 1, y: 2};
const anotherPoint3D = {x: 5, z: 4, ...point2D};
console.log(anotherPoint3D); // {x: 1, y: 2, z: 4}
const yetAnotherPoint3D = {...point2D, x: 5, z: 4}
console.log(yetAnotherPoint3D); // {x: 5, y: 2, z: 4}