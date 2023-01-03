
console.log("============================");
console.log("Day 44: DSA Two Pointers-1");
console.log("============================");

// Water container problem no 3
function maxArea (A) {
    if (A.length == 0 || A.length == 1) return 0;

    let pA = 0;
    let pB = A.length - 1;

    var maxarea = 0;

    while (pA != pB){
        let baseLength = pB-pA;
        let height = (A[pA] <= A[pB]) ? A[pA]: A[pB];
        let area = baseLength*height;

        if (area > maxarea) maxarea = area;

        //console.log()
        (A[pA] <= A[pB]) ? pA++ : pB--;
    }
    console.log( maxarea);
}

maxArea([1,5,4,3]);

console.log("============================");
console.log("Day 44: DSA Two Pointers-1 Question 1");
console.log("============================");

//Subarray with given sum

function solve (A, B){
    if (A.length == 0 || B == 0) return -1;

    if(A.length == 1 && B == A[0]) return (A);

    let pA = 0;
    let pB = 0;
    let sum = 0;

    while (sum != B || (pA == A.length-1 && pB == B.length-1)) {
        if (pA == pB) {
            sum = A[pA];
        }
        
        if (pA != pB) {
            sum += A[pB];
        }
        if(sum < B) {
            pB++;
        } else if (sum > B) {
            sum -= A[pA];
            pA++;
        } else if (sum == B) {
            break;
        }
    }
    console.log("IndexA = "+pA + "  indexB : " + pB);

}
// solve([1,2,3,4,5], 5);
solve([5], 5);
solve([5], 4);
