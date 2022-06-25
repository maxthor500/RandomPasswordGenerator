const renderCheckbox = () => {
    const div = document.createElement("div");
    root.appendChild(div);
    div.id = "input"
    let input = document.createElement("input");
    let label = document.createElement("label");
    label.for = "hasSymbols"
    label.textContent = "Use Symbols"
    input.id = "symbols"
    input.type = "checkbox";
    input.name = "hasSymbols";
    input.value = true;
    input.checked = true;
    div.appendChild(label)
    div.appendChild(input);
    input.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            input.value = true;
        } else {
            input.value = false;
        }
    })
}

const hasSymbols = () => {
    const checkbox = document.getElementById("symbols");
    let wantSymbols = true;
    if (checkbox.value === "false") {
        wantSymbols = false;
    }
    return wantSymbols;
}


export { renderCheckbox, hasSymbols };