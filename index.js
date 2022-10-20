setInterval(()=>{
    let date =new Date()
    let hour=date.getHours()
    let mins= date.getMinutes()
    let sec=date.getSeconds()


  
    if(hour>12){
        hour=hour-12
    }
    if(hour<10){
        hour='0'+hour
    }
    if(mins<10){
        mins='0'+mins
    }
    if(sec<10){
       sec='0'+sec
    }



document.querySelector('.hour').innerHTML=hour+":"
document.querySelector('.minutes').innerHTML=mins+':'
document.querySelector('.second').innerHTML=sec
})



