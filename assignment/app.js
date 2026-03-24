// Write a program to find largest number in an array

let arr=[5, 8, 10, 7, 65];

let sortArr=arr.sort((a,b)=> b-a);
console.log(sortArr);

let largeNum = sortArr[0];

console.log(largeNum);

//Second assignment: Write a program to count vowels in a string


let text = "Hello Amit prakash singh";
let vowel = 0;
for (let i = 0; i < text.length; i++) {
    let text1 = text[i].toLowerCase();
    if (text1 === 'a' || text1 === 'e' || text1 === 'i' || text1 === 'o' || text1 === 'u') {
        vowel++;
    }
}
console.log(vowel);

// Write a program to find the 4th largest number in an array
let arr1=[5, 8, 10, 7, 65];

let sortArr1=arr1.sort((a,b)=> b-a);
console.log(sortArr);

let fourthlargeNum = sortArr[3];

console.log(fourthlargeNum);