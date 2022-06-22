let textFirstParagraph = "Never use an insecure password again.";

const renderParagraph = (div, text, id) => {
    const p = document.createElement("p");
    const node = document.createTextNode(text)
    p.appendChild(node);
    p.id = `para-${id}`;
    div.appendChild(p);
}

const renderHeading = () => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const span = document.createElement("span");
    const br = document.createElement("br");
    div.classList.add("container");
    h1.innerText = "Generate a";
    span.innerText = "random password";
    span.classList.add("green");
    span.id = "span";
    div.appendChild(h1);
    h1.appendChild(br);
    h1.appendChild(span);
    root.appendChild(div);
    renderParagraph(div, textFirstParagraph, 1);
}

export default renderHeading;