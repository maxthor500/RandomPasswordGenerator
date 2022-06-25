import { renderParagraph } from "./Heading";

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
    selectLength();
}

const hasSymbols = () => {
    const checkbox = document.getElementById("symbols");
    let wantSymbols = true;
    if (checkbox.value === "false") {
        wantSymbols = false;
    }
    return wantSymbols;
}

const selectLength = () => {
    const div = document.getElementById("input");
    let input = document.createElement("input");
    let label = document.createElement("label");
    label.for = "password-length"
    label.textContent = "How long must be?"
    input.id = "password-length"
    input.type = "number";
    input.name = "password-length";
    input.min = 8;
    input.max = 20;
    input.value = 16;
    div.appendChild(label)
    div.appendChild(input);
}

const getLength = () => {
    const passwordLength = document.getElementById("password-length");
    const lengthValue = passwordLength.valueAsNumber;

    passwordLength.addEventListener("change", () => {
        const div = document.getElementById("input");
        const paraInfo = document.getElementById("para-info");
        if ((parseInt(passwordLength.value) < 8) || (parseInt(passwordLength.value) > 20)) {
            if (paraInfo) {
                paraInfo.remove();
            }
            renderParagraph(div, "(Select a password length min 8 max 20)", "info");
        }

        if ((parseInt(passwordLength.value) > 8) || (parseInt(passwordLength.value) < 20)) {
            if (paraInfo) {
                paraInfo.remove();
            }
            return () => {lengthValue = passwordLength.valueAsNumber};
        }
    });
    return lengthValue;
}

// load getLength when the page's state is ready
document.addEventListener('readystatechange', () => {
    getLength();
});

const copyOnClick = (div, element) => {
  
    element.addEventListener("click", (e) => {
        e.preventDefault();
        let textToCopy = element.textContent;

        const copied = document.getElementById("para-copied");
        if (copied) {
            copied.remove();
        }
        
        if((navigator.clipboard) && (textToCopy)) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                renderParagraph(div, "Password copied!", "copied");
            });
        } else if (!textToCopy) {
            renderParagraph(div, "Nothing to copy!", "copied");
        } else {
            renderParagraph(div, "Browser Not compatible");
        }
    });
}

export { renderCheckbox, hasSymbols, getLength, copyOnClick };