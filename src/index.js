import { clearContentDiv } from "./common";
import { createHomePage } from "./home/home";
import { createMenuPage } from "./menu/menu";
import { createContactPage } from "./contact/contact";

// Run Home Page when page loaded
createHomePage();

const homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", () => {
    clearContentDiv();
    createHomePage();
});

const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", () => {
    clearContentDiv();
    createMenuPage();
});

const contactBtn = document.querySelector("#contact-btn");
contactBtn.addEventListener("click", () => {
    clearContentDiv();
    createContactPage();
});