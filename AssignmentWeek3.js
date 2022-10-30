// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// •	Do not use numbers to reference the last element, find it programmatically, 
// •	ages[7] – ages[0] is not allowed!

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// 1c.	Use a loop to iterate through the array and calculate the average age. 

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages.push(16);

let firstElement = ages[0];
let lastElement = ages[ages.length - 1];

let finalSubtract = lastElement - firstElement;
console.log(finalSubtract);

//1C
var totalAmount = 0;
for(let i = 0; i < ages.length; i++) {
    totalAmount += ages[i];
}
console.log(avg = totalAmount / ages.length);

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let arraySum = 0;
for (let i = 0; i < names.length; i++){
    console.log(names[i].length)
    arraySum+=names[i].length
}
console.log(arraySum);

// 3.	How do you access the last element of any array?
// I believe there are a few ways to go about getting the last element of any array:
//We can use the typical array length property which is (array.length - 1) or we can use array methods such as the slice() method to return a specific element or finally we can also use the pop() method to pop the last element of an array


// 4.	How do you access the first element of any array?
// As the previous question, there are multiple ways to go about this. One of the methods can be to use the [] operator which can get us the first index/element. We can also use an array method called shift(); which can help us in returning the first element from an array but it would also remove it from the array

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array
let nameLengths = [];
for (let i=0; i<names.length; i++){
    console.log(names[i].length);
    nameLengths.push(names[i].length)
}
console.log(nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sum = 0;
for(let i=0; i<nameLengths.length; i++){
    sum+=nameLengths[i];
}
console.log(sum);
// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function myFunction(word, n){
    let concatenated = word.repeat(n);
    console.log(concatenated);
}
// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
// •	The full name should be the first and the last name separated by a space.
function createFullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

var fullName = createFullName('Sam', 'Johnson');
console.log(fullName);

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let array = [3,5,7,9,11];
var arraySumOfNumbers = 0;
function arrayOfNumbers(x){
    for (let i = 0; i < n.length; i++){
        arraySumOfNumbers+=n[i]
    }
    if(arraySumOfNumbers > 100){
        console.log(true); //we can also do the return method here instead of console.log
    }
}

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
var arrayAverageOfNumbers = [2, 4, 6, 8, 10];
var sumAverageOfNumbers = 0;
function averageElements (){
    for (let i = 0; i < arrayAverageOfNumbers.length; i++){
        sumAverageOfNumbers+=arrayAverageOfNumbers[i];
    }
    console.log("Average of all Elements is: " + sumAverageOfNumbers/arrayAverageOfNumbers);
}
// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let array1 = [12, 4, 53, 11];
let array2 = [31, 1, 9, 23];

function twoArrays (){

}
// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (){

}
// 13.	Create a function of your own that solves a problem. 
// •	In comments, write what the function does and why you created it.

//Just a quick function to check whether the temp is hot outside by seeing whether the temperature is over 75 deg 
function isHotOutside(temp){
    if (temp < 75){
        return false;
    } else if (temp >= 75){
        return true;
    }
}