/* IIFE(Immediately Invoked Function Expressions)
A function that executes immediately and avoid polluting the global scope */

(function database() {
    //named iife
    console.log('DB connected');
})();       // Always end iife with semicolon 


( ()=>{
    console.log('DB connected once again');
} )()