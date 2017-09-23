let score = 0;
let spaghettiElement = document.getElementById("spaghetti");
let scoreElement = document.getElementById("score");



spaghettiElement.addEventListener("click", function () {
    score++;
    scoreElement.textContent = score + " spagetts";
});
