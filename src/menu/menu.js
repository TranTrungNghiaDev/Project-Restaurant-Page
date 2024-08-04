function createMenuPage() {
    const contentDiv = document.querySelector("#content");

    // First Food
    const firstFoodSection = document.createElement("section");
    const firstFoodImage = document.createElement("img");
    firstFoodImage.src = "../src/menu/imgs/com-tam-dui-ga-nuong-toi.jpg";
    firstFoodImage.alt = "Cơm tấm đùi gà nướng tỏi";
    firstFoodSection.appendChild(firstFoodImage);
    const firstFoodTitle = document.createElement("h2");
    firstFoodTitle.textContent = "Cơm tấm đùi gà nướng tỏi";
    firstFoodSection.appendChild(firstFoodTitle);
    contentDiv.appendChild(firstFoodSection);

    // Second Food
    const secondFoodSection = document.createElement("section");
    const secondFoodImage = document.createElement("img");
    secondFoodImage.src = "../src/menu/imgs/com-bi-cha.jpg";
    secondFoodImage.alt = "Cơm tấm bì chả";
    secondFoodSection.appendChild(secondFoodImage);
    const secondFoodTitle = document.createElement("h2");
    secondFoodTitle.textContent = "Cơm tấm bì chả";
    secondFoodSection.appendChild(secondFoodTitle);
    contentDiv.appendChild(secondFoodSection);

    // Third Food
    const thirdFoodSection = document.createElement("section");
    const thirdFoodImage = document.createElement("img");
    thirdFoodImage.src = "../src/menu/imgs/com-tam-suon-cot-let-nuong.jpg";
    thirdFoodImage.alt = "Cơm tấm sườn cốt lết nướng";
    thirdFoodSection.appendChild(thirdFoodImage);
    const thirdFoodTitle = document.createElement("h2");
    thirdFoodTitle.textContent = "Cơm tấm sườn cốt lết nướng";
    thirdFoodSection.appendChild(thirdFoodTitle);
    contentDiv.appendChild(thirdFoodSection);

    // Fourth Food
    const fourthFoodSection = document.createElement("section");
    const fourthFoodImage = document.createElement("img");
    fourthFoodImage.src = "../src/menu/imgs/com-tam-suon-op-la.jpg";
    fourthFoodImage.alt = "Cơm tấm sườn ốp la";
    fourthFoodSection.appendChild(fourthFoodImage);
    const fourthFoodTitle = document.createElement("h2");
    fourthFoodTitle.textContent = "Cơm tấm sườn ốp la";
    fourthFoodSection.appendChild(fourthFoodTitle);
    contentDiv.appendChild(fourthFoodSection);
}

export {createMenuPage}