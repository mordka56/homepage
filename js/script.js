{
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";

    };
    const init = () => {
        let changeBackgroundButton = document.querySelector(".js-button");
        changeBackgroundButton.addEventListener("click", toggleBackground);
    };
    init();
}

