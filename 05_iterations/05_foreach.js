// for each
// Mostly used on arrays

const myarr = ["js", "ruby", "cpp", "java"]

// myarr.forEach( function (items) {
//     console.log(items);
// } )

// myarr.forEach( (item)=>{
//     console.log(item);
// } )

// myarr.forEach((item, arr, index)=>{
//     console.log(item, arr, index);
    
// })

const MyCoding = [
    {
        language: "js",
        tutor: "Hitesh Choudary"
    },
    {
        language: "python",
        tutor: "Harry"
    },
    {
        language: "cpp",
        tutor: "Shraddha Khapra"
    }
]
MyCoding.forEach( (item)=>{
    console.log(`${item.language} is teached by ${item.tutor}`);
} )

