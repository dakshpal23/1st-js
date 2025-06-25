function one() {
    const username = "dakshpal";

    function two() {
        const tutor = "hitesh"
        console.log(username);
    }
    console.log(tutor);
    two()
    
}
one()


console.log(Addone(34));
// here we are able to acess function before declare
function Addone(num) {
    return num + 1;
}


console.log(Addtwo(34));        
//this way didnt work because yha humne use eek variable mei hold kr diya   hai
const Addtwo = function (num) {
    return num + 2;
}