import { renderHeading, renderParagraph } from "./Heading";
import renderNav from "./Navbar";
import { renderBtn, generatePassword } from "./Button";
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

const hr = document.createElement("hr");
root.appendChild(hr);

const div = document.createElement("div");
root.appendChild(div);
div.id = "passwords";

renderParagraph(div, "Hello", "password-1");
renderParagraph(div, "World", "password-2");

// get element after the render
const toggleBtn = document.getElementById("toggle-btn");
const generateBtn = document.getElementById("generate-btn");
const span = document.getElementById("span");
const para1 = document.getElementById("para-1");

// events after the page is load
toggleBtn.addEventListener("click", (e) => {
    let darkModeElements = [
        root, body, toggleBtn, span, para1, generateBtn];
    darkMode(darkModeElements);
    e.preventDefault();
})

generateBtn.addEventListener("click", () => generatePassword(16, true));


