const withCleanTheRoom=new Promise((resolve,reject)=>{
    let cleanRoom=true;
    if(cleanRoom){
        resolve('Room is clean')

    }else{
        reject("Room is dirty")
    }
})

const removeGarbage=new Promise((resolve,reject)=>{
    let removeGarbage=true;
    if(removeGarbage){
        resolve('Garbage  is removed')

    }else{
        reject("Garbage is not removed")
    }
})

const getReward=new Promise((resolve,reject)=>{
    let getReward=true;
    if(getReward){
        resolve('Reward is awarded')

    }else{
        reject("No Reward")
    }
})

withCleanTheRoom.then(
    (resolve)=>{
        console.log(resolve)
        return removeGarbage;
    }
    
    ).then((resolve)=>{console.log(resolve); return getReward},(reject)=>{console.log(reject)})
    .then(resolve=>{console.log(resolve)})

.catch((reject)=>console.log(reject));