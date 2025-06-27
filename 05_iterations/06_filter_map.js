let mynums = [2,6,4,8,5]
const nums = mynums.forEach( (item) => {
    // console.log(item);
} )                                         //didn't return anything

// console.log(nums);

const Nums_Filter = mynums.filter( (item)=>{
    return item>4;          //condition
} )                                     
// filter() is used to pick only those items from an array that match a condition.
// console.log(Nums_Filter);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const mybooks = books.filter( (item)=>{
    return item.genre=='Non-Fiction';
} )
// console.log(mybooks);

// MAP : map() is used to change each item in an array and create a new array with the changed values.
mynums = [2,6,4,8,5,52,3]
let add10 = mynums.map((item)=>{
    return item + 10;
}).filter((item) => item>=15).map((item) => {
    return item-1;
})                          
//we also use diff methods in a chain
console.log(add10);





