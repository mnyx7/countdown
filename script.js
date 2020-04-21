let monthArr = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "ДеDecemberкабрь"];
for (i = 1; i < monthArr.length; i++) {
    monthes.innerHTML += "<option>" + monthArr[i] + "</option>";
}

function countDown() {
    let years = document.getElementById("years");
    let days = document.getElementById("days");
    let monthes = document.getElementById("monthes");

    let newData = years.value + monthes.value + days.value;
    let event = document.getElementById('event').value;

    let countDownDate = new Date(newData).getTime();


    let x = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(parseInt(distance) / (1000 * 60 * 60 * 24));
        let hours = Math.floor((parseInt(distance) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((parseInt(distance) % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((parseInt(distance) % (1000 * 60)) / 1000);

        document.getElementById("userEvent").innerHTML = "Till " + event + " left " + days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("userEvent").innerHTML = "Expired";
        }
    }, 1000);

}
