$(document).ready(function () {

var answer = ["fool-01.jpg", "fool-02.jpg", "fool-03.jpg", "fool-04.jpg", "fool-05.jpg"];

        $("#ask-submit").on("click", function () {
            var randomNumber = Math.floor((Math.random() * answer.length));
            var randomAnswer = answer[randomNumber];
            var cardToShow = "<img src='assets/images/" + randomAnswer + "' />";
            console.log(cardToShow);
                
                $("#answerHolder").empty();
                $("#answerHolder").prepend(cardToShow);

})

})

