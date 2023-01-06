console.log("============================");
console.log("Day 35: Combinatorics");
console.log("============================");

function solve (A, B, C){
    // Corner case 
    if (B == 0 || C == 0) return 0;

    // Just to make the variables familier
    let N = A;
    let r = B;

    // Now we make the Numerator and Denominator
    
    let Numerator = 1, Denominator = 1;
    for (let i = 0; i < r; i++) {
        Numerator = Numerator*(N-i);
        Denominator = Denominator*(i+1);
    }

    let val = Math.round( Numerator/Denominator);
    val = val % C;
    if (val < 0 ) val = val + c;
    return val;
}

console.log(solve(96, 21, 123));
