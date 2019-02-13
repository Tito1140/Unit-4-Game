var randomNum = Math.floor((Math.random() * 12) + 1);

$("#number-to-guess").text(randomNum)
alert("The Number to Guess is " + randomNum);

var counter = 0;
var numberOptions = [1, 2, 3, 4];/*Math.floor((Math.floor() * 12) + 1);*/
for (var i = 1; i < 4; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function () {
    // alert("This a crystal")
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    alert("Your total is " + counter);

    if (counter === randomNum) {
        alert("Awesome!");
        wins++;
    }
    else if (counter >= randomNum) {
        alert("Better Luck Next Time")
        loses++;
    }
});

$("#loses").text(loses)