let nameWrite = document.querySelector("#myName");
name = prompt("Adınızı giriniz: ");
firstChar = name.slice(0,1);
firstChar = firstChar.toUpperCase();
restOf = name.slice(1);
restOf = restOf.toLowerCase();
name = firstChar + restOf;
nameWrite.innerHTML = name;
let clock = document.querySelector("#myClock");


// let month = date.getMonth()+1;
// let day = date.getDate();
// let year = date.getFullYear();
// clock.innerHTML =`${day}.${month}.${year}`;
function showTime() {
    let date = new Date();
    let fullDate = date.toDateString();
    let dateArr = fullDate.split(" ");
    let dayString = dateArr[0];
    let month = dateArr[1];
    let dayNumber = dateArr[2];
    let year = dateArr[3];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    switch(dayString){
        case "Mon": 
            dayString = "Pazartesi";
            break;
        case "Tue": 
            dayString = "Salı";
            break;
        case "Wed": 
            dayString = "Çarşamba";
            break;
        case "Thu": 
            dayString = "Perşembe";
            break;
        case "Fri":
            dayString = "Cuma";
            break;
        case "Sat":
            dayString = "Cumartesi";
            break;    
        case "Sun":
            dayString = "Pazar";
            break;
    }
    switch(month){
        case "Jan": 
            month = "Ocak";
            break;
        case "Feb":
            month = "Şubat";
            break;
        case "Mar":
            month = "Mart";
            break;
        case "Apr":
            month = "Nisan";
            break;
        case "May":
            month = "Mayıs";
            break;
        case "Jun":
            month = "Haziran";
            break;
        case "Jul":
            month = "Temmuz";
            break;
        case "Aug":
            month = "Ağustos";
            break;
        case "Sep":
            month = "Eylül";
            break;
        case "Oct":
            month = "Ekim";
            break;
        case "Nov":
            month = "Kasım";
            break;
        case "Dec":
            month = "Aralık";
            break;
    }
    hours = hours<10 ? "0"+hours:hours;
    minutes = minutes<10 ? "0"+minutes:minutes;
    seconds = seconds<10 ? "0"+seconds:seconds;
    clock.innerHTML =`${hours}:${minutes}:${seconds}` +"<br>"+ `${dayNumber} ${month} ${year}, ${dayString}`;
    setTimeout(showTime, 1000);
}
showTime();
