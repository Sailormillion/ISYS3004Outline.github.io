/*const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
  const scale = (num, in_min, in_max, out_min, out_max) => {
        return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    }

*/
//default theme is light
document.getElementById("current-theme").src = "images/moon.svg"

var currentTheme = document.getElementById("current-theme");
currentTheme.setAttribute("onClick", "toDarkTheme()");

var theme = document.body;

function toDarkTheme() {

  document.getElementById("current-theme").src = "images/sun.svg";
  theme.classList.toggle("dark-mode");
  //currentTheme.removeAttribute("onClick");
  currentTheme.setAttribute("onClick", "toLightTheme()");
}

function toLightTheme() {

  document.getElementById("current-theme").src = "images/moon.svg";
  theme.classList.toggle("light-mode");
  //currentTheme.removeAttribute("onClick");
  currentTheme.setAttribute("onClick", "toDarkTheme()");
}
// The code didn't work out for me, will do the reflection on it and include in the Extended Learning Portfolio
    //https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    //Traversy Media "Build 5 Projects with HTML, CSS & JavaScript"
