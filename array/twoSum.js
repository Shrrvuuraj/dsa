// "Given an array of numbers and a target number, find two numbers in the array whose sum equals the target. Also, return their indexes."

// Example:
// [2, 7, 11, 15] and target = 9

let array = [2, 7, 11, 15];

let target = 90;

const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(array[i]+array[j]===target){
          return [i,j] ;  
          
      }
      
    }
  }
  return "Not possible"
};
console.log(twoSum(array,target))


// this code will improve this code have time efficeiency of o(n^2)