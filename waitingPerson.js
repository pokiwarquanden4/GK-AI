import { waitingPlace, waitingCovidPlace, waitingHealthyPersonPlace } from "./wall.js";

export function updateWaiting() {}


export function drawWaiting(hospital) {
  const waitingPosition = waitingPlace()
  waitingPosition.forEach((position) => {
    const waitingElement = document.createElement("img");
    waitingElement.style.gridRowStart = position.y;
    waitingElement.style.gridColumnStart = position.x;
    waitingElement.classList.add("waitingPerson");
    waitingElement.src = "img/waitingPerson.png";
  
    hospital.appendChild(waitingElement);
  })
  
  const waitingCovidPosition = waitingCovidPlace()
  waitingCovidPosition.forEach((position) => {
    const waitingElement = document.createElement("img");
    waitingElement.style.gridRowStart = position.y;
    waitingElement.style.gridColumnStart = position.x;
    waitingElement.classList.add("waitingCovidPerson");
    waitingElement.src = "img/waitingPersonCovid.png";
  
    hospital.appendChild(waitingElement);
  })

  const waitingHealthyPersonPosition = waitingHealthyPersonPlace()
  waitingHealthyPersonPosition.forEach((position) => {
    const waitingElement = document.createElement("img");
    waitingElement.style.gridRowStart = position.y;
    waitingElement.style.gridColumnStart = position.x;
    waitingElement.classList.add("waitingHealthyPerson");
    waitingElement.src = "img/healthyPerson.png";
  
    hospital.appendChild(waitingElement);
  })
}
