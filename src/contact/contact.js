import { createTitleContent } from "../common";

function createContactPage() {
    createTitleContent("Contact");

    createContactSection("Takahashi", "Manager", "989-898-989");
    createContactSection("Satoh", "Chef", "200-220-002");
    createContactSection("Aiko", "Waiter", "200-120-001");
}

function createContactSection(name, position, phoneNumber) {
    const contentDiv = document.querySelector("#content");
    const contactSection = document.createElement("section");
    const contactName = document.createElement("h2");
    contactName.textContent = name;
    const listInfo = document.createElement("ul");
    const positionListItem = document.createElement("li");
    positionListItem.textContent = position;
    const phoneNumberListItem = document.createElement("li");
    phoneNumberListItem.textContent = phoneNumber;
    const emailListItem = document.createElement("li");
    emailListItem.textContent = `${name}@fakemail.com`;

    listInfo.appendChild(positionListItem);
    listInfo.appendChild(phoneNumberListItem);
    listInfo.appendChild(emailListItem);
    
    contactSection.appendChild(contactName);
    contactSection.appendChild(listInfo);

    contentDiv.appendChild(contactSection);
}

export {createContactPage}