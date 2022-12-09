import { humanPlace } from "./wall.js";

export function updateHuman() {}


export function drawHuman(hospital) {
  const humanPosition = humanPlace()
  humanPosition.forEach((position) => {
    const humanElement = document.createElement("img");
    humanElement.style.gridRowStart = position.y;
    humanElement.style.gridColumnStart = position.x;
    humanElement.classList.add("patient");
    humanElement.src = "img/patient.png";
  
    hospital.appendChild(humanElement);
  })
  
}
