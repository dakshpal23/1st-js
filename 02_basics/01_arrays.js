const arr = [1,5,2,6,4]

// arr.shift()     //delete from first
// arr.unshift(5)

// newarr = arr.join()     //makes array string


// console.log(arr)

// console.log(arr.slice(1,3))
// console.log(arr)

// console.log(arr.splice(1,))
// console.log(arr)

const marvelheros = ["thor", "ironman", "spiderman"];
const dcheros = ["superman", 'batman', 'flash']

// const newheros = marvelheros.concat(dcheros)
// console.log(newheros)

const allheros = [...marvelheros , ...dcheros]
// console.log(allheros);


console.log(Array.isArray("daksh"))
console.log(Array.from("daksh"))        //making array
console.log(Array.from({name: "daksh"}))      //--[](bcz use nhi pta keys
//                                      ka array bnana hai ya values ka)


const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3))
