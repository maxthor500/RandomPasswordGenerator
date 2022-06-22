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

export default renderNav;