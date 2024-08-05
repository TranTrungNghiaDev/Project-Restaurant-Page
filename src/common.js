function createTitleContent(title) {
    const contentDiv = document.querySelector("#content");
    const contentSection = document.createElement("section");
    const contentSectionTitle = document.createElement("h1");
    
    contentSectionTitle.textContent = title;
    contentSection.appendChild(contentSectionTitle);

    contentDiv.appendChild(contentSection);
}

function clearContentDiv() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
}

export {createTitleContent, clearContentDiv}