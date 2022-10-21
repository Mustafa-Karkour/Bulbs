let toggleLightBtn = document.querySelector("#toggleLightBtn");
let lightImg = document.querySelector("#light");
let btnClickAudio = new Audio("./sounds/button_click.mp3");
let theThing = document.querySelector("#thing");
let thinkImg = document.querySelector(".think");

let toggleLight = (event) => {
    btnClickAudio.play();

    // toggleLightBtn.classList.toggle("active");

    lightImg.classList.toggle("active-light");

    theThing.classList.toggle("activeThing");

    thinkImg.classList.toggle("active-think");


};
