const createHeading = (element) => {
    const h1 = document.createElement("h1");
    const span = document.createElement("span");
    h1.innerText = "Generate a ";
    span.innerText = "random password";
    span.classList.add("green");
    element.appendChild(h1);
    h1.appendChild(span);
}

export default createHeading;