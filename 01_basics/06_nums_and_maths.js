const Number1 = new Number(123.49);
// console.log((Number1*23.66).toFixed(2))     // 2 decimal tk no. dega 

// console.log(Number1.toPrecision(3))      //choti rkhega value ko approx krke
  
const Number2 = 1320253;
// console.log(Number2.toLocaleString('en-IN'))        // make no. readable  


// ++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++


// console.log(Math.round(236.26));
// console.log(Math.ceil(236.02))      //choose highest value--237
// console.log(Math.floor(236.99))     //always smallest


// const diceNo = console.log(Math.floor((Math.random()*6)+1))
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min))
