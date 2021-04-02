/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/



function fizzBuzz(n){
    for(i = 1;i <= n; i++){
        let arr = []
       if(i % 3 === 0){
           arr.push("Fizz") // Code goes here
}else if(i % 5 === 0){
    arr.push("Buzz")
}else if(i % 3 === 0 && n % 5 === 0 ){
    arr.push("FizzBuzz")
}
    }
}

module.exports = fizzBuzz