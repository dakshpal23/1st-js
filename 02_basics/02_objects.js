const mysym = Symbol("key1")

const sbsUser = {
    name: "aditya",
    [mysym]: "mykey1",
    rollno: 235004,
    course: "Btech",
    branch: "cse",
    dost: ["mota", "pandu"]
}

// console.log(sbsUser["dost"])
// console.log(sbsUser.dost);

// console.log(sbsUser[mysym]);
// console.log(typeof(sbsUser[mysym]));        //string
// console.log(sbsUser);     /

// Object.freeze(sbsUser)
sbsUser.rollno = 235023;
// console.log(sbsUser)


sbsUser.greetings = function () {
    console.log(`Hello JS user, ${this.name}`);     //same object mei se value access hogyi
}

console.log(sbsUser.greetings());

