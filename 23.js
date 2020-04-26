// call and apply

var person={
fullname:function(city,country){
    return this.firstname+"---"+this.lastname+"--"+country+"--"+city;
}

}

var john={
    firstname:"John",
    lastname:"eva"
}

console.log(person.fullname.call(john,'london','england'));// pass object with string as a argument
console.log(person.fullname.apply(john,['london','england'])); // pass object with array as a argument