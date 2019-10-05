let logo = document.querySelector(".logo"),
logoImage = document.querySelector(".header__logo-image"),
logoText = document.querySelector(".header__logo-text");

let hoverImage= document.createElement("IMG");
hoverImage.src = "img/logohover.png";
hoverImage.style.height = "100%";

logo.addEventListener("mouseenter",function(){
    logo.replaceChild(hoverImage,logoImage);
    logoText.style.color = "#f26522";
    
});
logo.addEventListener("mouseleave",function(){
    logo.replaceChild(logoImage,hoverImage);
    logoText.style.color = "#fff";
});