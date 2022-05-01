
let button = document.querySelector(".js-button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");
button.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        themeName.innerText = "jasny ";
    } else { themeName.innerText = "ciemny"; }

});
