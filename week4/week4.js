// "use strict";

// task 1
// let name = "Mary ";
// let activity = "drink tea";
// let bio = "Our guest " + name + activity + ".";

// console.log(bio.length);

// const str =
//   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

// task 2
// let letter = prompt("Enter number to get letter");
// console.log(str.charAt(+letter)); // str[letter]
// console.log(typeof +letter);

// task 3
// let str2 = prompt("Enter string");
// console.log(`last char : ${str2.at(-1)}`);
// console.log(`before last char : ${str2.at(-2)}`);
// console.log(`last char : ${str2[str2.length - 1]}`);
// console.log(`before last char : ${str2[str2.length - 2]}`);

// task 4

// let a = "abcde";
// let b = "";
// for (let i = a.length - 1; i >= 0; i--) {
//   b += a[i];
// }
// console.log(`original : ${a}`);
// console.log(`reversed : ${b}`);

// task 5

// let js = "js";
// console.log(js.toUpperCase());

// task 6

// const str =
//   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
// let str2 = prompt("Enter string");
// alert(str.includes(str2) ? "Your string is found !" : "String not found !");

// task 7

// let nums = "1-2-3-4-5";
// while (nums.includes("-")) {
//   nums = nums.replace("-", ".");
// }
// console.log(nums);

// task 8

// let nums = "1-2-3-4-5";
// console.log(nums.replaceAll("-", "."));

// task 9

// const str = "sdfwe";
// console.log(str.substring(4, 2)); // fw ,  = str.substring(2,4)

// task 10

// const str = "I'm learning javascript!";

// // learning
// console.log(str.substr(4, 8));
// console.log(str.substring(4, 12));
// console.log(str.slice(4, 12));

// // javascript
// console.log(str.substr(13, 10));
// console.log(str.substring(13, 23));
// console.log(str.slice(13, 23));

// task 11
// const str = "http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/";

// console.log(str.indexOf("http://") === 0);

// task 12
// const str = "https://www.notion.html";
// console.log(str.indexOf(".html") === str.length - 5);
