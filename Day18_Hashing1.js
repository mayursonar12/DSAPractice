
console.log("============================");
console.log("Day 18: Hashing 1");
console.log("============================");

console.log("Proh=blem 2: Count SubArray Zero sum..")

// Given an array A of N integers.

//Find the count of the subarrays in the array which sums to zero. 
// Since the answer can be very large, 
// return the remainder on dividing the result with 109+7

function countSubarraySumZero (A) {

    // We will first create Prefix sum array
    let ps = [];
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        ps.push(sum);
    }
    console.log(ps);

    // Once our PS array is ready//
    // We need to check if i and j are equal.
    // if equal, we get 1 zero
    let zeroCount = 0;
    let map1 = new Map();
    //map1.set(3, 2);
    for (let i = 0; i<ps.length; i++) {
        let val = map1.get(ps[i]);
        if (val != undefined) {
            // means we have 1 number already existing
            // so we will not push this number and increase our zero count by 1
            zeroCount++;
            map1.delete(ps[i]);
        } else {
            map1.set(ps[i], 1);
        }
    }
    console.log(" Number of subArray Sum zero count: " + zeroCount);

}
countSubarraySumZero([1,2,3,-5,-1,3]);
