const renderBtn = () => {
    const button = document.createElement("button");
    const div = document.createElement("div");
    div.classList.add("container");
    root.appendChild(div);
    div.appendChild(button)
    button.id = "generate-btn";
    button.textContent = "Generate Password";
};

export default renderBtn;