document.querySelector(".button").addEventListener("click", function() {

buttonAnimation();

var randomNumber1 = Math.floor(6*Math.random())+1;
var randomNumber2 = Math.floor(6*Math.random())+1;

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").textContent = "🚩 You're free!";
}

else if (randomNumber1<randomNumber2) {
  
  document.querySelector("h1").textContent = "10 more years of service! 🏴‍☠";
}

else {
  document.querySelector("h1").textContent = "Draw!";
}

});

function buttonAnimation() {

    var activeButton = document.querySelector(".button");
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed")
    }, 100);
}