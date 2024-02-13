"use strict";

// Tick Effect
let ticks = document.querySelectorAll(".fa");
let jobText = document.querySelector(".jobText");

ticks.forEach(tick => {
  tick.addEventListener("click", function () {
    this.classList.toggle("tick-on");
    if (this.classList.contains("tick-on")) {
      jobText.textContent = "'😊', '🌟', '🎉', '👍'";
      jobText.classList.add("display");
      setTimeout(() => {
        jobText.textContent = "😊', '🌟', '🎉', '👍';"; // Clear text after 3 seconds
        jobText.classList.remove("display");
      }, 3000);
    } else {
      jobText.textContent = ""; // Clear text if tick is off
      jobText.classList.remove("display");
    }
  });
});

// // Link Effect
let links = document.querySelectorAll(".links");
links.forEach((link) => {
  link.addEventListener("mouseover", hover);
  link.addEventListener("mouseout", removehover);
});
function hover() {
  this.style.transform = "scale(1.05)";
  this.classList.add("links");
}
function removehover() {
  this.style.transform = "scale(1)";
}


let profile_navigate=document.querySelector(".Profile_Bar")

profile_navigate.addEventListener("click",()=>{
     window.location.href="main_profile.html"
})







