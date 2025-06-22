// primitive: call by value 

// 7 datatypes : string, number, null, undefined, Boolean, Bigint, 
// Symbol;

// Non primitive (reference): call by reference

// 3 datatypes : arrays, objects, functions


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) ,  Heap(Non-primitive)

let MyChannelName = "DakshGaming"
let NewName = MyChannelName;

NewName = "RamRam"
// console.log(NewName)
// console.log(MyChannelName)

let Myobj = {
    Name : "daksh",
    Rollno : 235004
}

let Myobj2 = Myobj;
Myobj2.Rollno = 235023;

console.log(Myobj)
console.log(Myobj2)