const nameHtml = document.querySelector(".name");

function handleSubmitName(e) {
    e.preventDefault();
    localStorage.setItem("name", e.target[0].value);
    const name = localStorage.getItem("name");
    const nameWrapper = document.createElement("div");
    const nameDesc = document.createElement("div");
    nameDesc.classList.add("neon");
    nameDesc.innerText = `Welcome ${localStorage.getItem("name")}`;

    nameWrapper.append(nameDesc);
    nameHtml.removeChild(nameHtml.firstChild);
    nameHtml.append(nameWrapper);
}

function init() {
    const name = localStorage.getItem("name");
    if(name === null) {
        const nameWrapper = document.createElement("div");
        const nameDesc = document.createElement("div");
        const nameForm = document.createElement("form")
        const nameInput = document.createElement("input");

        nameForm.addEventListener("submit", handleSubmitName);

        nameInput.classList.add("nameInput");
        nameDesc.classList.add("neon");
        nameInput.setAttribute("placeholder", "your name")
        nameWrapper.classList.add("nameInputWrapper");

        nameDesc.innerText = "Type Your Name"
        nameForm.append(nameInput);
        nameWrapper.append(nameDesc);
        nameWrapper.append(nameForm);

        nameHtml.append(nameWrapper);
    } else {
        const nameWrapper = document.createElement("div");
        const nameDesc = document.createElement("div");
        nameDesc.classList.add("neon");
        nameDesc.innerText = `Welcome ${localStorage.getItem("name")}`;

        nameWrapper.append(nameDesc);
        nameHtml.append(nameWrapper);
    }
}

init();