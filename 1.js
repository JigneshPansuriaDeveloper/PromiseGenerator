//sorting methods

const arr =[1,4,5,3,2];

// function sortData(a,b){
//     return a-b;
// }


// const sortData=function(a,b){
//     return b-a;
// }



// arr.sort(
//     sortData
// );

// arr.sort(function(a,b){
//     return b-a;
// })

//arr.sort((a,b)=>b-a)


//console.log(arr);


const nameAry=[{name:"sneha"},{name:"trupti"},{name:"reshma"}];

nameAry.sort((a,b)=>a.name<b.name?1:-1
);
console.log(">>",nameAry);