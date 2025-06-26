// for of 

const myarr = [1, 2, 3, 4]

for (const val of myarr) {
    // console.log(val);
}

const greetings =  "Daksh pal"
for (const greet of greetings) {
    if (greet==" ") {
        continue;
    }
    // console.log(`Word is ${greet}`);
}

// Map
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);

// Applying loop on map
for (const key of map) {
    // console.log(key);        // returns arrays of all values
}

for (const [key,value] of map) {
    console.log(key + ": " + value);        // special syntax 
}


