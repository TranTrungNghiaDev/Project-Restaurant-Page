import { createTitleContent } from "../common";

function createHomePage() {
    createTitleContent("Takahashi Restaurant");
    // Introduce section
    createHomeSectionByAddText("Introduce", 
    `If you're looking for something new to try in the world of Japanese cuisine, 
    try experimenting with a Japanese rice ! 
    Rice bowls (donburi), and mixed rice dishes are some 
    of the most popular ways to enjoy this versatile grain, 
    and there are endless variations.
    You can it these food at my restanrant`);

    // Opentime Section
    const openTimeListElement = document.createElement("ul");
    addOpenTime(openTimeListElement);
    createHomeSectionByAddElement("Open Time", openTimeListElement);
    
    // Location section
    createHomeSectionByAddText("Location", "1998 Kinh Bac ward, Bac Ninh city");
}

function createHomeSectionByAddElement(title, descriptionElement) {
    const contentDiv = document.querySelector("#content");
    const homeSection = document.createElement("section");
    const homeTitle = document.createElement("h2");
    homeTitle.textContent = title;

    homeSection.appendChild(homeTitle);
    homeSection.appendChild(descriptionElement);

    contentDiv.appendChild(homeSection);
}

function createHomeSectionByAddText(title, descriptionText) {
    const contentDiv = document.querySelector("#content");
    const homeSection = document.createElement("section");
    const homeTitle = document.createElement("h2");
    homeTitle.textContent = title;
    const homeDescription = document.createElement("p");
    homeDescription.textContent = descriptionText;

    homeSection.appendChild(homeTitle);
    homeSection.appendChild(homeDescription);

    contentDiv.appendChild(homeSection);
}

function addOpenTime(openTimeListElement) {
    const openItemList = [
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 6pm",
        "Friday: 6am - 6pm",
        "Saturday: 8am - 8pm",
        "Sunday: 8am - 8pm"
    ];

    openItemList.forEach(openTime => {
        const openTimeListItem = document.createElement("li");
        openTimeListItem.textContent = openTime;
        openTimeListElement.appendChild(openTimeListItem);
    })    
}

export { createHomePage };