function check_class() {

    var checker = Number(document.getElementById("consumption").value);
    var message = "";

    if (isNaN(checker) || checker < 0) {
        message = "Please enter a valid number! (╥‸╥)";
    }

    else if (checker <= 100) {
        message = "Lifeline Consumer: Discounted electricity rates! ヽ(°〇°)ﾉ";
    }

    else if (checker <= 200) {
        message = "Low Consumption: Normal residential rate. (๑ᵔ⤙ᵔ๑)";
    }

    else if (checker <= 300) {
        message = "Average Consumption: Typical electricity usage. (˶>⩊<˶)";
    }

    else if (checker <= 500) {
        message = "High Consumption: Higher electricity usage. (ᵕ—ᴗ—)";
    }

    else {
        message = "Take a break! Very High Consumption: Heavy electricity users. ｡°(°¯᷄◠¯᷅°)°｡";
    }

    document.getElementById("message1").innerHTML = message;
}