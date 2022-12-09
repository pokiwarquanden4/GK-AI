import { pillPlace } from "./wall.js";

export function updatePill() {}


export function drawPill(hospital) {
  const pillPosition = pillPlace()
  pillPosition.forEach((position) => {
    const pillElement = document.createElement("img");
    pillElement.style.gridRowStart = position.y;
    pillElement.style.gridColumnStart = position.x;
    pillElement.classList.add("pill");
    pillElement.src = "img/pill.png";
  
    hospital.appendChild(pillElement);
  })
  
}
