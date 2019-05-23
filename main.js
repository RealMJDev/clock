const secondpoint = document.querySelector('.seconds');
const minutepoint = document.querySelector('.minute');
const hourpoint = document.querySelector('.hour');
const dsec = document.querySelector('.dsecond');
const dmin = document.querySelector('.dminute');
const dhour = document.querySelector('.dhour');
const digit = document.querySelector('.digit');


const setTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secDeg = ((seconds / 60) * 360);
    const minDeg = ((minutes / 60) * 360);
    const hourDeg = ((hours / 12) * 360);

    secondpoint.style.transform = `rotate(${secDeg}deg)`;
    minutepoint.style.transform = `rotate(${minDeg}deg)`;
    hourpoint.style.transform = `rotate(${hourDeg}deg)`;
    dsec.innerHTML = seconds;
        if(dsec.innerHTML <= 9){
            dsec.innerHTML = `0${seconds}`;
        }
    dmin.innerHTML = minutes;
        if(dmin.innerHTML <= 9){
            dmin.innerHTML = `0${minutes}`;
        }
    dhour.innerHTML = hours;
        if(dhour.innerHTML <= 9){
            dhour.innerHTML = `0${hours}`;
        }
}

setInterval(setTime,1000);