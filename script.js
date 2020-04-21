let years = document.getElementById("years");
let monthes = document.getElementById("monthes");
let days = document.getElementById("days");
let monthArr = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "ДеDecemberкабрь"];
let daysArr = [[2], [4, 6, 9, 11], [1, 3, 5, 7, 8, 10, 12]];
for (i = 1; i < monthArr.length; i++) {
    monthes.innerHTML += "<option>" + monthArr[i] + "</option>";
}

    let newData = years.value + monthes.value + days.value;
    let event = document.getElementById('event').innerHTML;

    let countDownDate = new Date(newData).getTime();
function countDown() {
    let x = setInterval(function () {

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("userEvent").innerHTML = "Till " + event +"left " + days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("userEvent").innerHTML = "Expired";
        }
    }, 1000);
}