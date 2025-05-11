// "use strict";

// חסן עומר + עיסא לואבנה

// task 5
// const fruits = ["apple", "banana", "cherry", "date"];

// fruits.splice(1, 1, "blueberry", "blackberry");

// console.log(fruits);

// task 6
// const colors = ["red", "orange", "yellow", "green", "blue"];
// const orYe = colors.slice(1, 3);
// console.log(orYe);

// task 7
const animals1 = ["cat", "dog"];
const animals2 = ["lion", "tiger"];

// const animals = animals1.concat(animals2);
// const animals = [...animals1, ...animals2];
// console.log(animals);

// task 8
// const numbers = [7, 3, 9, 1, 5];
// const sorted = numbers.sort((a, b) => a - b);

// console.log(sorted);

// task 9
// const letters = ["a", "b", "c", "d"];
// const sorted = letters.reverse();
// console.log(sorted);

// task 10
// const sentence = "JavaScript is awesome";
// const arr = sentence.split(" ");
// console.log(arr);

// task 11
// const words = ["Hello", "world"];
// const str = words.join(" ");
// console.log(str);

// task 14
// const students = ["דני", "נועה", "רן", "תמר"];
// students.forEach((student) => {
//   console.log(`Hello ${student} , good luck in the exam!`);
// });

// task 15

// const pricesILS = [100, 250, 75, 320];
// // תוצאה: [28.57, 71.43, 21.43, 91.43]

// const dollar = pricesILS.map((money) => money / 3.5);
// console.log(dollar);

// task 16
// const users = [
//   { username: "Tom", isLoggedIn: true },
//   { username: "Jerry", isLoggedIn: false },
//   { username: "Spike", isLoggedIn: true },
// ];

// const loggedIn = users.filter((user) => user.isLoggedIn);
// console.log(loggedIn);

// task 17

// const products = [
//   { name: "Book", quantity: 3 },
//   { name: "Pen", quantity: 0 },
//   { name: "Notebook", quantity: 5 },
// ];

// const isEmpty = products.some((product) => product.quantity === 0);
// console.log(isEmpty);

// task 18
// const grades = [72, 85, 90, 67, 58];
// // במקרה הזה - צריך להחזיר false

// const passed = grades.every((grade) => grade >= 60);
// console.log(passed);

// task 19
// const employees = [
//   { name: "Sharon", salary: 9500 },
//   { name: "David", salary: 7800 },
//   { name: "Lior", salary: 12000 },
// ];

// const obj = employees.filter((emp) => emp.salary > 8000);
// console.log(obj);
// const names = obj.map((emp) => emp.name.toUpperCase());
// console.log(names);
// תוצאה: ["SHARON", "LIOR"]

// task 20
const books = [
  { title: "Book A", pages: 450 },
  { title: "Book B", pages: 520 },
  { title: "Book C", pages: 600 },
];

const big = books.filter((book) => book.pages > 500);
if (big.length) console.log(big);
