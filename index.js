const root = document.getElementById("root");
const body = document.querySelector("body");
const greenSpan = document.getElementById("green-span");

const darkMode = () => {
    root.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    greenSpan.classList.toggle("dark-green");
};

const createHeading = (element) => {
    const h1 = document.createElement("h1");
    const span = document.createElement("span");
    h1.innerText = "Generate a ";
    span.innerText = "random password";
    span.classList.add("green");
    span.id = "span-green"
    element.appendChild(h1);
    h1.appendChild(span);
}




createHeading(root)
