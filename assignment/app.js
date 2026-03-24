// Write a program to find largest number in an array

let arr=[5, 8, 10, 7, 65];

let largeNum = arr[0];

for(let i=0; i< arr.length; i++){
    if(arr[i] > largeNum){
        largeNum = arr[i];
    }
}
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

for(let i=0; i<arr1.length; i++){
    for (let j = i + 1; j < arr1.length; j++) {

        if (arr[j] > arr[i]) {
            let k = arr[i];
            arr[i] = arr[j];
            arr[j] = k;
        }
    }
}

let fourthlargeNum = arr1[3];

console.log(fourthlargeNum);

// Write a program to reverse Guvi to ivug

function reverseString(str){

    let revStr=""
    
    for (let i = str.length-1; i >=0; i--) {
         revStr += str[i];
        
    }
    return revStr
    
}
console.log(reverseString("Guvi"));