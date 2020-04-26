const doChores=async ()=>{
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


try{
let isRoomClean=await withCleanTheRoom;
console.log(isRoomClean)
}catch(err){
    console.log(err)
}
}


console.log('Before aync called')
doChores();
console.log('After async called');

