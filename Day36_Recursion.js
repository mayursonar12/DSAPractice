import {pow} from "./Day0_libFunctions.js";

console.log("============================");
console.log("Day 36: Recursion problem 3");
console.log("============================");

function power (a, b, c) {
    let val = pow(a,b);
    let finalVal = val % c;
    if (finalVal < 0 ) finalVal = finalVal+c;
    console.log("Final answer : " + finalVal);
}

// power(-1, 1, 20);
// power(0, 0, 1);
// power(2132, 0, 12);
power(213, 231, 1);
