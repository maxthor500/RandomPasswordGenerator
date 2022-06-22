import renderHeading from "./Heading";
import renderNav from "./Navbar";
import renderBtn from "./Button";
import "./styles/style.css";

// initial variables
const root = document.getElementById("root");
const body = document.querySelector("body");

// help functions
const darkMode = (arr) => {
    arr.map((element) => {
        element.classList.toggle("dark-mode");
    });
};

// render elements when the page is load
renderNav();
renderHeading();
renderBtn();

// get element after the render
const toggleBtn = document.getElementById("toggle-btn");
const generateBtn = document.getElementById("generate-btn");
const span = document.getElementById("span");
const para1 = document.getElementById("para-1");

// events after the page is load
toggleBtn.addEventListener("click", (e) => {
    let darkModeElements = [root, body, toggleBtn, span, para1];
    darkMode(darkModeElements);
    e.preventDefault();
})

