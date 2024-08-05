function createTitleContent(title) {
    const contentDiv = document.querySelector("#content");
    const contentDivTitle = document.createElement("h1");
    contentDivTitle.textContent = title;
    contentDiv.appendChild(contentDivTitle);
}

function clearContentDiv() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
}

export {createTitleContent, clearContentDiv}