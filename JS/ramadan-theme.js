let imgWrappers = document.querySelectorAll(".img-wrapper");
imgWrappers.forEach(el => {
    let overlayImg = document.createElement("img");
    overlayImg.classList.add("overlay-img");
    overlayImg.setAttribute("data-src", "/assets/images/ramadan/light.png");
    el.appendChild(overlayImg)
}); 