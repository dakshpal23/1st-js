function addTwoNum(a,b) {       
    return `addition: ${a} + ${b}`;
}
const result = addTwoNum(2,6);
// console.log(result)


// function user(username) {
//     if (!username) {
//         console.log("Enter name first")
//         return;
//     }
//     return `${username} finally logged in`
// }
// console.log(user("harsh"));


function CartTotal(...a) {      //hum jitne mrji parameters pass kr skte hai
    return a;
}
// console.log(CartTotal(200,50,36,5));

const user = {
    name: 'daksh',
    price: '25cr'
}

function handleObject(anyobject) {
    console.log(`${anyobject.name} buy watch worth ${anyobject.price}`)
}

handleObject(user)