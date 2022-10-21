let toggleLightBtn = document.querySelector("#toggleLightBtn");
let lightImg = document.querySelector("#light");

let toggleLight = (event) => {
    toggleLightBtn.classList.toggle("active")

    lightImg.classList.toggle("active-light")

    let btnClickAudio = new Audio("./sounds/button_click.mp3")
    btnClickAudio.play();
};
