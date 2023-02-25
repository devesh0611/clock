const secondHand=document.getElementById("second_hand");
const minuteHand=document.getElementById("minute_hand");
const hourHand=document.getElementById("hour_hand");
//const dateDisplay=document.getElementById("date");
//secondHand.innerHTML="87";
function setDate () {
    //alert("Clock by Devesh");
    const now=new Date();
    const seconds=now.getSeconds();
    const minutes=now.getMinutes();
    const hours=now.getHours();
    // const secondsDegrees=((seconds/60)*360)+90;
    // const minutesDegrees=((minutes/60)*360)+((seconds/60)*6)+90;
    // const hoursDegrees=((hours/12)*360)+((minutes/60)*30)+90;
    // secondHand.style.transform=rotate(`secondsDegrees`deg);
    // minuteHand.style.transform=rotate(minutesDegreesdeg);
    // hourHand.style.transform=rotate(hoursDegreesdeg);
    //dateDisplay.innerHTML=now;
    if(seconds<10){
        secondHand.innerHTML="0"+seconds;
    }
    else {
        secondHand.innerHTML=seconds;
    }
    if(minutes<10){
        minuteHand.innerHTML="0"+minutes;
    }
    else {
        minuteHand.innerHTML=minutes;
    }
    if(hours<10){
        hourHand.innerHTML="0"+hours;
    }
    else {
        hourHand.innerHTML=hours;
    }
}
setInterval(setDate, 1000);
setDate();