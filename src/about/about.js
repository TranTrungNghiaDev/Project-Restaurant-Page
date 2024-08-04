function createAboutPage() {
    const contentDiv = document.querySelector("#content");
    const contentImage = document.createElement("img");
    contentImage.src = "../src/about/imgs/banner-6273.jpg";
    const contentDivPara = document.createElement("p");
    contentDivPara.textContent = `Với thực đơn đa dạng cùng với không gian quán thoáng nên luôn được nhiều khách hàng biết đến. Quán mở cửa từ lúc 06 giờ sáng đến 22 giờ tối, lúc nào cũng đông đúc. Các món ăn ở  được chế biến tinh tế với các thiết bị nhà bếp hiện đại sẽ giúp Quý khách tiết kiệm thời gian và không phải lo lắng về vệ sinh thực phẩm.

    Cái ngon đặc biệt của món cơm tấm là ở chỗ cơm được nấu từ những hạt tấm nhỏ, xốp mềm kết hợp với bì , Trứng ốp la,còn tóp mỡ lại vàng giòn, kết hợp màu xanh của hành lá rưới lên đĩa cơm tấm mịn hạt, cùng miếng sườn nướng vàng giúp đĩa cơm tấm thêm phần hấp dẫn và ngon miệng..`;
    contentDiv.appendChild(contentDivPara);
    contentDiv.appendChild(contentImage);
}

export {createAboutPage}