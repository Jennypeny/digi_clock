function currentTime() {
    let days = ["SUNDAY", "MONDAY", "TUESYDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
    let months = ["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"];

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let today = date.getDate();
    let year = date.getFullYear();

    if(hours == 0) {
        hours = 12;
    }
    if(hours > 12) {
        hours = hours - 12;
        session = "PM";
    }
    // 09:09:36
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = `
        <div

            <div class="time">${hours}:${minutes}:${seconds} ${session}</div>
            <div class="date">${today} | ${month} | ${year}</div>
            <div class="day">${day}</div>
        </div>    `;


    document.getElementById("clock").innerHTML = time;
    document.getElementById("wrapper").style.background = `#${hours}${minutes}${seconds}`

    setTimeout(currentTime, 1000);}

currentTime();