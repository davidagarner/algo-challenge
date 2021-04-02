/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    // Code goes here
    let bouncerArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) bouncerArray.push(array[i]);
  }
  return bouncerArray
}

module.exports = falsyBouncer