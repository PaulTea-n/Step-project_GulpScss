const headerList = document.querySelector(".header__list");
const headerLink = document.querySelectorAll(".header__link");
const hamburger = document.querySelector(".header__button");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (headerList.classList.contains("showMenu")) {
        headerList.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        headerList.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

headerLink.forEach(
    function(headerLink) {
        headerLink.addEventListener("click", toggleMenu);
    }
)