var randomNum = Math.floor((Math.random() * 80) + 19);

$("#number-to-guess").text(randomNum)
alert("The Number to Guess is " + randomNum);

var counter = 0;

var first = Math.floor((Math.random() * 12) + 1);
var second = Math.floor((Math.random() * 12) + 1);
var third = Math.floor((Math.random() * 12) + 1);
var fourth = Math.floor((Math.random() * 12) + 1);
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
var numberOptions = [first, second, third, fourth]
for (var i = 0; i < 4; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
}

var loses = 0;
var wins = 0;

$(".crystal-image").on("click", function () {
    // alert("This a crystal")
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    alert("Your total is " + counter);

    if (counter === randomNum) {
        alert("Awesome!");
        wins++;
        counter = 0;
        randomNum = Math.floor((Math.random() * 80) + 19);
        $("#number-to-guess").text(randomNum);
        crystalValue = Math.floor((Math.random() * 12) + 1);
    }
    else if (counter >= randomNum) {
        alert("Better Luck Next Time")
        loses++;
        counter = 0;
        randomNum = Math.floor((Math.random() * 80) + 19);
        $("#number-to-guess").text(randomNum);
        crystalValue = Math.floor((Math.random() * 12) + 1);
    }

    $(".loses").text("Loses: " + loses);
    $(".wins").text("Wins: " + wins);
    $(".totals").text("Your Total: " + counter);
});


