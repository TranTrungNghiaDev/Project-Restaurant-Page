function createHomePage() {
    const contentDiv = document.querySelector("#content");
    const contentDivTitle = document.createElement("h1");
    contentDivTitle.textContent = "Cơm Tấm Quên";
    contentDiv.appendChild(contentDivTitle)
    
    const contentDivSubTitle = document.createElement("h2");
    contentDivSubTitle.textContent = "Ăn một lần là nhớ mãi không quên";
    contentDiv.appendChild(contentDivSubTitle);
    
    const contentDivPara = document.createElement("p");
    contentDivPara.textContent = "Món đặc trưng nhất là Cơm Sườn Non Nướng Mật Ong và Sườn Cộng Nướng Muối Ớt, món bì với phần thịt nạc hoàn toàn";
    contentDiv.appendChild(contentDivPara);
}

export {createHomePage};