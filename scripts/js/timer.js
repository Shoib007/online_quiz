
sec = 0;
min = 0;
timer_function = setInterval(function(){
    if(sec < 59){
        sec++;
    }else{
        sec = 0;
        min++;
    }
    let formated_sec = sec < 10 ? `0${sec}` : `${sec}`;
    let formated_min = min < 10 ? `0${min}` : `${min}`;
    document.querySelector(".time").innerHTML = `${formated_min} : ${formated_sec}`;

}, 1000);