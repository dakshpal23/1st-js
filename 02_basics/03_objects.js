// const tinderobj = new Object()         //singleton object

const tinderobj = {}        //non-singleton object
// console.log(tinderobj);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"c", 6:"d"}

// const obj4 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2}
// console.log(obj4);

tinderobj.id = "123user";
tinderobj.email = "user12@gmail.com";

// console.log(Object.keys(tinderobj));        //returns arrayof all key values

const js = {
    channel: "Chai aur Code",
    courseinstructer: "hitesh",
    learner: "daksh"
}

// console.log(js.courseinstructer);

const {courseinstructer} = js;      //that's called destructuringof objects
// console.log(courseinstructer);      //now we directly call values inside objects



// {
//     "name" : "daksh",
//     "course": "btech",          //  JSON
//     "branch": "cse"
// }





