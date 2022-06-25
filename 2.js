/*
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

const vector = [3,2,1];

//console.log(vector.length)
var mult = 1;

for(let i = 0; i < vector.length; i++){
    mult = mult * vector[i]; 
}

console.log(mult)

let result =[5];

for(let i = 0; i < vector.length; i++){
    result[i] = mult / vector[i] ;
}


console.log(result);