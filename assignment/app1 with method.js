// Write a program to find largest number in an array

let arr=[5, 8, 10, 7, 65];

let sortArr=arr.sort((a,b)=> b-a);
console.log(sortArr);

let largeNum = sortArr[0];

console.log(largeNum);