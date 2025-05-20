// "use strict"

// חסן עומר + עיסא לואבנה

// Task 1

// example: addExclamation("Hi") => "Hi!"
const addExclamation = (str) => str + "!";
console.log(addExclamation("Hi"));

// task 2

// example: squareAll([1, 2, 3]) => [1, 4, 9]
const arr = [1, 2, 3];
const squareAll = (arr) => arr.map((el) => el * el);
console.log(squareAll(arr));

// task 3

// example: reverseWords("I love JS") => "JS love I"
let words = "I love JS";
const reverseWords = (sentence) => sentence.split(" ").reverse().join(" ");
console.log(reverseWords(words));

// task 4

// example: filterNames(["Dan", "Jonathan", "Eli"], 3) => ["Jonathan"]
const arrOfNames = ["Dan", "Jonathan", "Eli"];
const filterNames = (names, minLength) => {
  return names.filter((name) => name.length > minLength);
};
console.log(filterNames(arrOfNames, 3));

// task 5

// example: allPositive([1, 5, 8]) => true
// example: allPositive([3, -2, 0]) => false
const allPositive = (numbers) => numbers.every((el) => el > 0);
console.log(allPositive([1, 5, 8]));
console.log(allPositive([3, -2, 0]));
