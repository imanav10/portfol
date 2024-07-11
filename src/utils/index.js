


import hmv from "./uwu.mp4";

const enhance = id => {
    const element = document.getElementById(id),
        text = element.innerText.split("");
    
    element.innerText = "";
    text.forEach(length => {
        const span = document.createElement("span");

        span.className = "letter";

        span.innerText = letter;

        element.appendChild(span);
    });
};


export const heroVideo = hmv;


enhance("channel-link");