// let sum: number = 0;
// let count: number = 0;
// for (let i = 2; count < 30; i++) {
//     let isPrime: boolean = true;
//     if (i == 2) {
//         sum += i;
//         count++;
//         continue;
//     }
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if(!isPrime){
//         continue;
//     }
//     sum += i;
//     console.log(sum);
//     count++;
// }
// console.log(sum);
// function isPrime(number: number): boolean {
//     let isPrime = true;
//     if (number < 2) {
//         isPrime = false;
//     } else if (number > 2) {
//         for (let i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     return isPrime;
// }
// let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
// let sum = 0;
// for (let number of array) {
//     if (isPrime(number)) {
//         sum += number;
//     }
// }
// console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);
// import {Rectangle} from "./rectangle";
//
// const rectangle = new Rectangle(5, 5, 10, 20);
// console.log(rectangle.toString());
// console.log(rectangle.area());
var money = 10000;
var buyACar = function (car) {
    // @ts-ignore
    return new Promise((function (resolve, reject) {
        setTimeout(function () {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("Do not enough money");
            }
        }, 100);
    }));
};
money = 1000001;
var promise = buyACar("Vinfast").then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});
