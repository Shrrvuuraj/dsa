// "Given an array of stock prices, find the maximum profit you could make by buying low and selling high only once."

// Input Example:


// [7, 1, 5, 3, 6, 4]

const maxProfit=array=>{
     let lowestNo=array[0]
     let maxProfit=0;
      for(let i=1 ; i<=array.length-1;i++){
         const currentPrice= array[i]

         lowestNo=Math.min(currentPrice ,lowestNo)
         
        const potentialProfit= currentPrice-lowestNo

        maxProfit=Math.max(potentialProfit ,maxProfit)
     //    console.log(maxProfit)
      }
      return maxProfit
     
}
console.log("Maximum Profit : ",maxProfit([7, 1, 5, 3, 6, 4]))