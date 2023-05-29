let cardTitle = document.getElementsByClassName("card-title")[0];

setInterval(function() {
    let dateTime = new Date();
    let hours = changeValue(dateTime.getHours());
    let minutes = changeValue(dateTime.getMinutes());
    let seconds = changeValue(dateTime.getSeconds());
    let date = changeValue(dateTime.getDate()); 
    let month = changeValue(dateTime.getMonth());
    let year = dateTime.getFullYear();
    let day = dateTime.getDay();

    switch(day) {
        case 0 :
            day = "Sunday";
            break;
        case 1 :
            day = "Monday";
            break;
        case 2 :
            day = "Tuesday";
            break;
        case 3 :
            day = "Wednesday";
            break;
        case 4 :
            day = "Thrusday";
            break;
        case 5 :
            day = "Friday";
            break;
        case 6 :
            day = "Saturday";
            break;
    }
    console.log(day);

    cardTitle.innerHTML = day + ", " + date + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" + seconds;
}, 1000);

function changeValue(value) {
    if(value < 10) {
        return "0" + value;
    }
    return value;
}

