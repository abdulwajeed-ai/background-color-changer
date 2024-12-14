let blackBtn = document.querySelector(".btn1");
let blueBtn = document.querySelector(".btn2");
let redBtn = document.querySelector(".btn3");
let greenBtn = document.querySelector(".btn4");
let orangredBtn = document.querySelector(".btn5");
let defaultBtn = document.querySelector(".btn6");
let bodyBackground = document.querySelector("body");
let heading = document.querySelector("h1")
heading.style.color = "white"
blackBtn.addEventListener("click", function() {
  bodyBackground.style.backgroundColor = "black";
  blackBtn.style.borderColor = "white";
  heading.style.color = "white";
});

blueBtn.addEventListener("click", function() {
  bodyBackground.style.backgroundColor = "blue";
    blueBtn.style.borderColor = "white";
});

redBtn.addEventListener("click", function() {
  bodyBackground.style.backgroundColor = "red";
});

greenBtn.addEventListener("click", function() {
  bodyBackground.style.backgroundColor = "green";
});

orangredBtn.addEventListener("click", function() {
  bodyBackground.style.backgroundColor = "orangered"; // Or "red", depending on your intention
});

defaultBtn.addEventListener("click", function() {
  bodyBackground.style.backgroundColor = "white"; // Resets to the default background
  heading.style.color = "black";
});