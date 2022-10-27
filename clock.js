setInterval(()=>{
const time=document.querySelector("#time");
let date=new Date();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
if (hours>12){
    day_night="PM";
    hours=hours-12;
}else{
    day_night="AM"
}
if (hours<10){
    hours="0"+hours;
}
if (minutes<10){
    minutes="0"+minutes;
}
if (seconds<10){
    hours="0"+seconds;
}
time.textContent=hours +":"+minutes+ ":"+seconds+" "+day_night;

})




