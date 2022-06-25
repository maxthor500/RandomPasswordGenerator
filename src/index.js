import { renderHeading, renderParagraph } from "./Heading";
import renderNav from "./Navbar";
import { renderBtn, generatePassword } from "./Button";
import "./styles/style.css";
import { copyOnClick, hasSymbols, renderCheckbox } from "./Inputs";

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
renderCheckbox();

// render hr below the checkbox
const hr = document.createElement("hr");
root.appendChild(hr);

// render a div that contains 2 password results
const div = document.createElement("div");
root.appendChild(div);
div.id = "passwords";

renderParagraph(div, "", "password-1");
renderParagraph(div, "", "password-2");

// get element after the render
const toggleBtn = document.getElementById("toggle-btn");
const generateBtn = document.getElementById("generate-btn");
const span = document.getElementById("span");
const para1 = document.getElementById("para-1");
const passwords = document.getElementById("passwords");
const paraPass1 = document.getElementById("para-password-1");
const paraPass2 = document.getElementById("para-password-2");

// events after the page is load
toggleBtn.addEventListener("click", (e) => {
    let darkModeElements = [
        root, body, toggleBtn, span, para1, generateBtn];
    darkMode(darkModeElements);
    e.preventDefault();
});

generateBtn.addEventListener("click", () => {
    generatePassword(paraPass1, hasSymbols());
    generatePassword(paraPass2, hasSymbols());
});

copyOnClick(passwords, paraPass1);
copyOnClick(passwords, paraPass2);