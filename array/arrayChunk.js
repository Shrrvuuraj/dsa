// "Write a function that takes an array and a chunk size, and splits the array into multiple subarrays (chunks) of that size."

// Example Inputs/Outputs:

// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// // Output → [[1, 2, 3], [4, 5, 6], [7, 8]]

// chunkArray([1, 2, 3, 4, 5], 2)
// // Output → [[1, 2], [3, 4], [8]]


const arrayChunk=(array,chunk)=>{
     let i=0
     const mainArray=[]
     while (i<array.length) {
       m=array.slice(i,i+chunk)
       mainArray.push(m)
       

       i=i+chunk
       
          
     }
    return mainArray

}


let array=[1,2,3,4,5,6,7,8,9,10]
console.log(arrayChunk(array,2))