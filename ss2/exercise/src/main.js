function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var sum = 0;
var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(arr);
console.log(sum);
