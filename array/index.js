const number=[1,2,3,45,77,88]

const findByIndex=(arr,index)=>arr[index]
console.log(findByIndex(number,0))
// constant time / O(1)


const findPair=(arr)=>{
     for(let i=0;i<arr.length;i++){
          for(let j=0;j<arr.length;j++){
               console.log(`pair ${arr[i]},${arr[j]}`)
          }
     }
// nested loop 

// n inside n 
// that means n *n = n^2 
// O(n^2)
}
findPair(number)