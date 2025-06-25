const user = {
    username : "Daksh",
    rollNo : 235023,
    WelcomeMessage : function(){
        console.log(`${this.username}, successfully loged in)`)
        console.log(this);
    },
}

// console.log(user.WelcomeMessage());
// user.username = "Ani";
// console.log(user.WelcomeMessage());


// console.log(this);

function charger() {
    const username = "daksh";
    console.log(this.username);     // yha  this nhi chlega (undefined dega)
    console.log(this);
}
// charger()

const Randomfunction = () =>{
    console.log(this);
    
}

// Randomfunction()

// const Add = (a,b)=>{
//     return a+b;              //basic syntax(explicitly return)
// }


const Add = (a,b)=> a+b;          //implicit return method 


console.log(Add(2,8));


