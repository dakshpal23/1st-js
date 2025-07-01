const promiseOne = new Promise(function(resolve,reject){
    //Do any async task
    setTimeout(function (){
        // console.log('Async task executed');
        resolve();
    },1000)
    
})
promiseOne.then(() => {
    // console.log('Promise consumed');  
})


new Promise((resolve,reject) => {
    setTimeout(() => {
        // console.log('async 2 executed');
        resolve()
    }, 1000);
}).then(() => {
    // console.log('Task 2 resolved');
})


const PromiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
       resolve({username: 'Daksh', email: 'dakshpal290@gmail.com'})
    }, 1000);
    
})
PromiseThree.then((user) => {
    // console.log(user);
})


const promisefour = new Promise((resolve,reject) => {
    setTimeout(() => {
    let error =  true;
    if (!error) {
        resolve({username: 'Aditya', rollNo: '235004'})
    }else{
        reject('ERROR: Something went wrong')
    }
    }, 1000);
})
promisefour.then((user) => {
    return user.username;
}).then((username) => {
    // console.log(username);
}).catch((err) => {
    // console.log(err)
}).finally(() => {                          //finally chalega hi chalega
    // console.log('Promise is either resolve or rejected');
})


const promisefive = new Promise((resolve,reject) => {
    setTimeout(() => {
    let error =  false;
    if (!error) {
        resolve({username: 'Aniket', rollNo: '235009'})
    }else{
        reject('ERROR: Something went wrong')
    }
    }, 1000);
})
async function consumePromisefive() {
    const response = await promisefive
    // console.log(response);
}
consumePromisefive()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((responseObject) => {
    console.log(responseObject);
})
.catch(() => {
    console.log('ERROR');
})



async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()
