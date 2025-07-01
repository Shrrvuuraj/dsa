// let reverseNumber= no=>Number(String(no).split("").reverse().join(""))

let reverseNumber =n=>{
    const  reversed=n.toString().split("").reverse().join("");

    return parseInt(reversed)*Math.sign(n)
}

console.log(reverseNumber(-1234));

// its a liitlee different than pure string we have to take sign in mind
