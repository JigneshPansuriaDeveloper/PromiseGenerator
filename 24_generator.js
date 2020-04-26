 // infinite loop 

 /*for(;;){
     console.log("my infinite loop test");
 }

 while(true){
     console.log(11);
 }*/

 /* for loop
 
 let i=[1,2,3,4];

 for(j=0;j<i.length;j++){
     console.log(j);
 }*/

 /*let i=[1,2,3,4];
 let iterator=i[Symbol.iterator]();

 console.log(iterator.next());*/

/* function  *generator(){
     yield 1;
     yield 2;
     yield 3;
 
 }

 let itr=generator();
 console.log(itr.next());
 console.log(itr.next());
 console.log(itr.next());
 console.log(itr.next());
 console.log(itr.next());

 function *generator(){
     let i=0;
     while(true){
         yield i;
     }

 }

 let iterator=generator();
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());


 // Multiple generator
 function *anotherGenerator(){
    yield 2;
 }
 function *generator(){
     yield 1;
     yield *anotherGenerator();
     yield 3;

 }
 
let iterator=generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/
function request(url){
    new Promise((resolve,reject)=>{
        if(url)
        resolve("First promise passed")
    })
}

function *generator(){
    yield request('url1');
    yield request('url2');
    
}
let iterator=generator();
console.log(iterator.next());
console.log("some other operation")
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
