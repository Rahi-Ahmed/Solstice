// reservation form validation
function validateForm() {
    let currentDate = new Date();

    let openingHour = new Date(null, null, null, 9, 0, 0, 0);
    let closingHour = new Date(null, null, null, 21, 0, 0, 0);
    let form = document.forms["reservationForm"]
    let date = form.date.value;
    let dateFormatted = new Date(date);
    let time = form.time.value
    let timeFormatted = new Date(null, null, null, time.substring(0, 2), time.substring(3, 5), 0, 0);
    if (dateFormatted > currentDate) {
        if (timeFormatted.getHours() >= openingHour.getHours() && timeFormatted.getHours() < closingHour.getHours()) {
            window.alert("Your reservation has been confirmed");
            return true;

        } else {
            window.alert("The restaurant is closed at this time. Please select new time.");
            return false;
        }

    } else {
        window.alert("Please enter a valid future date.");
        return false;
    }
}

document.getElementById("reservationForm").addEventListener("submit", validateForm);

//&& time >= openingHour.getHours() && time <= closingHour.getHours()
