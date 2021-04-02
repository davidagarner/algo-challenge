/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    let sequence = [0,1];
    for(i = 2; i <= n+1; i++) {
        sequence.push(sequence[i-2] + sequence[i-1]);
    }
    return sequence[sequence.length-1];
}
module.exports = fibonacci