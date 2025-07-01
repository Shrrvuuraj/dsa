const fizzBuzz=n=>{

    for(let i=1;i<=n;i++){
          i%3==0&&i%5==0?console.log("fizzBuzz"):i%3==0?console.log("fizz"):i%5==0?console.log("buzz"):console.log(i)

     }
}


fizzBuzz(1000)
