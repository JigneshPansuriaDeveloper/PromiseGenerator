// ES6


// inheritance -> extends

class geo{
    constructor(lat,lang){
        this.lat=lat;
        this.lang=lang
    }
}


class language extends geo{
    constructor(name,lat,long){
        super(lat,long)
        this.name=name;
        
    }
}


var lang=new language('English',1,23.3);
console.log("===",lang);

