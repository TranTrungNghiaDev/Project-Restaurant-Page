function createHomePage() {
    const contentDiv = document.querySelector("#content");
    const contentDivTitle = document.createElement("h1");
    contentDivTitle.textContent = "Takahashi Restaurant";
    contentDiv.appendChild(contentDivTitle)
        
    // Introduce section
    const introduceSection = document.createElement("section");
    const introduceTitle = document.createElement("h2");
    introduceTitle.textContent = "Introduce";
    const introducePara = document.createElement("p");
    introducePara.textContent = `
    If you're looking for something new to try in the world of Japanese cuisine, 
    try experimenting with a Japanese rice ! 
    Rice bowls (donburi), and mixed rice dishes are some 
    of the most popular ways to enjoy this versatile grain, 
    and there are endless variations.
    You can it these food at my restanrant`;
    introduceSection.appendChild(introduceTitle);
    introduceSection.appendChild(introducePara);
    contentDiv.appendChild(introduceSection);

    // Opentime Section
    const openTimeSection = document.createElement("section");
    const openTimeTitle = document.createElement("h2");
    openTimeTitle.textContent = "Open Time";

    const openTimeList = document.createElement("ul");
    const monday = document.createElement("li");
    const tuesday = document.createElement("li");
    const wednesday = document.createElement("li");
    const thursday = document.createElement("li");
    const friday = document.createElement("li");
    const saturday = document.createElement("li");
    const sunday = document.createElement("li");

    monday.textContent = "Monday: 6am - 6pm";
    tuesday.textContent = "Tuesday: 6am - 6pm";
    wednesday.textContent = "Wednesday: 6am - 6pm";
    thursday.textContent = "Thursday: 6am - 6pm";
    friday.textContent = "Friday: 6am - 6pm";
    saturday.textContent = "Saturday: 8am - 8pm";
    sunday.textContent = "Sunday: 8am - 8pm";

    openTimeList.appendChild(monday);
    openTimeList.appendChild(tuesday);
    openTimeList.appendChild(wednesday);
    openTimeList.appendChild(thursday);
    openTimeList.appendChild(friday);
    openTimeList.appendChild(saturday);
    openTimeList.appendChild(sunday);

    openTimeSection.appendChild(openTimeTitle);
    openTimeSection.appendChild(openTimeList);

    contentDiv.appendChild(openTimeSection);
    // Location section
    const locationSection = document.createElement("section");
    const LocationTitle = document.createElement("h2");
    LocationTitle.textContent = "Location";
    const LocationPara = document.createElement("p");
    LocationPara.textContent = "1998 Kinh Bac ward, Bac Ninh city";
    locationSection.appendChild(LocationTitle);
    locationSection.appendChild(LocationPara);

    contentDiv.appendChild(locationSection);
}

export {createHomePage};