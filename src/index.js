import renderHeading from "./heading";
import "./styles/style.css"

// initial variables
const root = document.getElementById("root");
const body = document.querySelector("body");
let textFirstParagraph = "Never use an insecure password again.";s

// help functions
const darkMode = (arr) => {
    arr.map((element) => {
        element.classList.toggle("dark-mode");
    })
};

// render elements functions
const renderNav = () => {
    const nav = document.createElement("nav");
    let toggleBtn = document.createElement("button");
    let i = document.createElement("i");
    nav.id = "nav";
    root.appendChild(nav);
    toggleBtn.textContent = "toggle";
    toggleBtn.id = "toggle-btn";
    i.classList.add("fa-solid");
    i.classList.add("fa-circle-half-stroke");
    nav.appendChild(toggleBtn);
    toggleBtn.appendChild(i);
}

const renderParagraph = (text, id) => {
    const p = document.createElement("p");
    const node = document.createTextNode(text)
    p.appendChild(node);
    p.id = `para-${id}`;
    root.appendChild(p);
}

// render elements when the page is load
renderNav();
renderHeading();
renderParagraph(textFirstParagraph, 1)

// get element after the render
const toggleBtn = document.getElementById("toggle-btn")
const span = document.getElementById("span")
const para1 = document.getElementById("para-1")

// events after the page is load
toggleBtn.addEventListener("click", (e) => {
    let darkModeElements = [root, body, toggleBtn, span, para1]
    darkMode(darkModeElements)
    e.preventDefault();
})

