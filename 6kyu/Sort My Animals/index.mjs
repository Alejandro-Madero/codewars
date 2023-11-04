/*

LINK:
https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4

DESCRIPTION:
Consider the following class:

var Animal = { 
    name: "Cat", 
    numberOfLegs: 4 
}
Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If an empty list is passed in, it should return an empty list back.

*/

// SOLUTION:

export const sortAnimal = function (animal) {
  return animal === null
    ? null
    : [...animal].sort((a, b) => {
        if (a.numberOfLegs === b.numberOfLegs) {
          return a.name.localeCompare(b.name);
        }
        return a.numberOfLegs - b.numberOfLegs;
      });
};
