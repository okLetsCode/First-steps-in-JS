function toggle() {
    let button = document.querySelector("#accordion > div.head > span");
    let textToShow = document.getElementById('extra');

    if (button.textContent === "More") {
        button.textContent = "Less"
        textToShow.style.display = 'block';
    } else {
        button.textContent = "More";
        textToShow.style.display = 'none';
    }
}