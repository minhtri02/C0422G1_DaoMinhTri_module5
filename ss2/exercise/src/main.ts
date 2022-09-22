let fibonacci = [];
let sum =1;
for (let i = 0; i < 10; i++) {
    fibonacci.push(checkFibonacci(i));
    sum+=checkFibonacci(i);
}
console.log(fibonacci);
console.log(sum);


function checkFibonacci(n: number): number {
    if (n == 0) {
        return 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    return checkFibonacci(n - 1) + checkFibonacci(n - 2);
}