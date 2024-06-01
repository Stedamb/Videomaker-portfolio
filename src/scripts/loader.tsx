const loader = document.querySelector(".loader");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const cursor = document.querySelector("cursor-dot");
const cursorOutline = document.querySelector("cursor-dot-outline");

if (loader) {
    setTimeout(() => {
        loader.classList.add("hide");
    }, 1500);

    setTimeout(() => {
        loader.classList.remove("flex");
        loader.classList.add("hidden");
        if (nav) {
            nav.classList.remove("hide");
        }
    }, 2100);
}

if (header) {
    setTimeout(() => {
        header.classList.remove("hide");
    }, 2300);
}

if (main) {
    setTimeout(() => {
        main.classList.remove("hide");
    }, 2400);
}

if (footer) {
    setTimeout(() => {
        footer.classList.remove("hide");
    }, 2400);
}