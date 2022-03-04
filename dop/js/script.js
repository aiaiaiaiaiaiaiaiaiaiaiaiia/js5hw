let run = document.querySelector("#run");
let container = document.querySelector(".container");
let box = document.querySelectorAll(".box");

run.addEventListener("click", () => {
    if (container.style.width=== "100%") {
        container.style.width === "200px";
        for (let key = 0; key < box.length; key++) {
            box[key].style.backgroundColor = "black";
            box[key].style.borderRadius = "0";
        }
    } else {
        container.style.width = "100%";
        for (let key = 0; key < box.length; key++) {
            box[key].style.backgroundColor = "pink";
            box[key].style.borderRadius = "50%";
        }
    }
});