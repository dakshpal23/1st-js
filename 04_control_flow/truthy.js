/*  Falsy values:
        False, 0, -0, BigInt 0n, null, undefined, "", NaN
    Truthy values:
        "0", "False", " "(string ke andr kuch bhi ho)
*/

const emptyObj = {fm:55}

// checking if an object is empty or not 
if (Object.keys(emptyObj).length === 0) {
    console.log('Object is empty');
    
}

/*
    false == 0
        --true
    0 == ''
        --true
    false == ''
        --true
*/


// Null Coalescing Operator (??) : null, undefined 
// The Null Coalescing Operator (??) is used in JavaScript to provide a default value if something is null or undefined.


let val1 = 5 ?? 20

// console.log(val1);

// Terniary Operator

// condition ? true : false 
const shoeprice = 1500;
(shoeprice <= 1600) ? console.log('under budget') : console.log('over budget ');

