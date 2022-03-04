const div = document.querySelector("div");
const img = document.querySelector("img");
const menu = document.querySelector(".menu");
const a = document.querySelector("a");
const body = document.querySelector("body");

div.addEventListener ("click", () => {
    menu.classList.toggle("block");
    body.classList.toggle("body");
});