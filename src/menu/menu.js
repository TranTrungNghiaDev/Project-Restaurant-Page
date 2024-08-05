import { createTitleContent } from "../common";

function createMenuPage() {
    createTitleContent("Menu");
    // First Food
    createFoodSection("Oyakodon", "Full of flavor and protein, this is one of the most beloved Japanese rice bowls. It is made by topping steamed white rice with a rich and savory chicken, egg, and green onion simmered mixture.", "../src/menu/imgs/Oyakodon.jpeg");
    
    // Second Food
    createFoodSection("Katsudon", "This is a well-known classic of Japanese cuisine and for good reason! It's an incredibly delicious yet simple dish that starts with a crispy pork cutlet (katsu) served atop white rice. Next, the katsu (pork cutlet) is breaded in panko (Japanese bread crumbs) and deep-fried or baked until it gets crispy outside. The resulting tonkatsu is then simmered in a mix of soy sauce, sugar, sake, and mirin to create the unique sweetness and flavor of katsu don. Topped with pickled ginger, a soft cooked egg, and onions, this is one dish you won't want to miss! ", "../src/menu/imgs/Katsudon.jpeg" )

    // Third Food
    createFoodSection("Kaisendon","This dish is a seafood lover's dream! It features all the freshest catches of the day, such as squid, shrimp, tuna, salmon, scallops, and other seasonal favorites. These are served atop a bed of steamed Japanese rice, with finely chopped onions and pickles as garnish.", "../src/menu/imgs/Kaisendon.jpeg");

    // Fourth Food
    createFoodSection("Omurice", "Omurice is a much-loved Japanese comfort food, perfect for lunch or dinner. It starts with fried ketchup rice made from chopped vegetables, meat, fish, and other ingredients of your choice.", "../src/menu/imgs/Omurice.jpeg");

}

function createFoodSection(title, description, imgSrc) {
    const contentDiv = document.querySelector("#content");
    const foodSection = document.createElement("section");
    const foodTitle = document.createElement("h2");
    foodTitle.textContent = title;
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
    const foodImage = document.createElement("img");
    foodImage.src = imgSrc;
    foodImage.alt = title;

    foodSection.appendChild(foodTitle);
    foodSection.appendChild(foodDescription);
    foodSection.appendChild(foodImage);

    contentDiv.appendChild(foodSection);
}

export {createMenuPage}