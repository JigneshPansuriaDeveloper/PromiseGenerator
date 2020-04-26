var country={
    name:'India',
    capital:'Delhi',
    population:867913,
    health:function(){
        return "Corona virua is spreading exponentially now  a days"
    }
}

country.language='odiya';
console.log(country)
console.log(country.health());

/*console.log(`My country name is  ${country.name}-${country.capital}-${country.population}`);
console.log(typeof country);
console.log(country)*/

//delete country.name;


//var country=[{name:"hari"},{name:"anc"},{name:"xyz"}];  // array of objects

//console.log(country);


var car = new Object();
car.color='red';
car.brand='BMW';
car.health=function(){
    return "Corona virua is spreading exponentially now  a days"
}
console.log(car.health());









