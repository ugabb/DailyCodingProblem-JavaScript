/*

This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

*/

function anyNumberPlus(k,vet){
    for(i = 0; i < vet.length; i++){
      for(j =i + 1; j < vet.length; j++){
        if(vet[i] + vet[j] === k){
          return true;
        }
      }
    }
    return false;
  }
  
  
  let list = [10,15,3,1,16]; 
  
  console.log(anyNumberPlus(17,list))