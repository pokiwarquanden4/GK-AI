import { pillPlace, pillCovidPlace, recoverPillPlace, headachePillPlace } from "./wall.js";

export function updatePill() {}


export function drawPill(hospital) {
  const pillPosition = pillPlace()
  pillPosition.forEach((position) => {
    const pillElement = document.createElement("img");
    pillElement.style.gridRowStart = position.y;
    pillElement.style.gridColumnStart = position.x;
    pillElement.classList.add("pill");
    pillElement.src = "img/pillSick.png";
  
    hospital.appendChild(pillElement);
  })
  
  const pillCovidPosition = pillCovidPlace()
  pillCovidPosition.forEach((position) => {
    const pillElement = document.createElement("img");
    pillElement.style.gridRowStart = position.y;
    pillElement.style.gridColumnStart = position.x;
    pillElement.classList.add("pillCovid");
    pillElement.src = "img/pillCovid.png";
  
    hospital.appendChild(pillElement);
  })

  const recoverPillPosition = recoverPillPlace()
  recoverPillPosition.forEach((position) => {
    const pillElement = document.createElement("img");
    pillElement.style.gridRowStart = position.y;
    pillElement.style.gridColumnStart = position.x;
    pillElement.classList.add("recoverPill");
    pillElement.src = "img/recoverPill.png";
  
    hospital.appendChild(pillElement);
  })

  const headachePillPosition = headachePillPlace()
  headachePillPosition.forEach((position) => {
    const pillElement = document.createElement("img");
    pillElement.style.gridRowStart = position.y;
    pillElement.style.gridColumnStart = position.x;
    pillElement.classList.add("headachePill");
    pillElement.src = "img/headachePill.png";
  
    hospital.appendChild(pillElement);
  })
}
