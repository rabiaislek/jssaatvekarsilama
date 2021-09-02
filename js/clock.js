let ad = prompt("Adiniz")
console.log(ad)

let myName = document.getElementById("myName")
myName.innerHTML = ad


function showTime() {
    var date = new Date
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var session = date.getDay()

    if (session ==1 ){
        session = "pazartesi"
    } else if (session ==2){
        session = "salı"
    } else if (session ==3){
        session = "çarşamba"
    } else if (session ==4){
        session = "perşembe"
    } else if (session ==5){
        session = "cuma"
    } else if (session ==6){
        session = "cumartesi"
    } else if (session ==7){
        session = "pazar"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    var time = h + ":" + m + ":" + s + ":" + session
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").innerContent = time;
    setTimeout(showTime, 1000)
}

showTime()