/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
 */

const array = [1, 2, 0];


function bobblesort(array){
    for(let i = 0; i < array.length - 1; i++){
        for(let j = 0; j < array.length -1 -i; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

const orderedArray = bobblesort(array)


for(let i = 0; i < orderedArray.length - 1; i++){
    if(orderedArray[i+1] != orderedArray[i] + 1){  // se 1 != 0 + 1
        var result = orderedArray[i + 1]
        return result;
    }
}
 
0,1,2          3
0+1 (1)

console.log(result)