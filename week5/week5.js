// 1

// function greet(name) {
//   return "Hello, " + name + "!";
// }

// const greet = name => `Hello ${name}!`
// console.log(greet("Hasan"));

// 2

// const formatName = (firstName, lastName) => {
//   return (
//     lastName.toUpperCase() +
//     ", " +
//     firstName[0].toUpperCase() +
//     firstName.slice(1)
//   );
// };

// console.log(formatName("kola", "man"));

// 3

// let func1 = function() {
// 	console.log('!!!');
// }

// const func1 = () => console.log("!!!");
// func1();

// 4

// let result = filter([1, -2, 3, -4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(result);

// let arr = [1, -2, 3, -4, 5];
// let result = arr.filter((elem) => elem > 0);
// console.log(result);

// 5

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(number) {
//   return number * 2;
// });
// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

// 6

// const ages = [18, 21, 16, 30, 25];

// const adults = ages.filter(function (age) {
//   return age >= 18;
// });

// const adults = ages.filter(age => age >=18);
// console.log(adults);

// 7

// const fruits = ["apple", "banana", "cherry"];

// fruits.forEach(function(fruit) {
//   console.log(fruit);
// });

// fruits.forEach((fruit) => console.log(fruit));

// 8

// const greetings = ["hello", "world", "javascript"]; // ->['HELLO', 'WORLD', 'JAVASCRIPT']

// const upperGreetings = greetings.map((el) => el.toUpperCase());
// console.log(upperGreetings);
