import { humanPlace, noHumanPlace } from "./wall.js";

export function updateHuman() {}

export function drawHuman(hospital, check) {
  const humanPosition = humanPlace()
  humanPosition.forEach((position) => {
    const humanElement = document.createElement("img");
    humanElement.style.gridRowStart = position.y;
    humanElement.style.gridColumnStart = position.x;
    humanElement.classList.add("patient");
    if(check){
      humanElement.classList.add('checkPatient');
      humanElement.position = position
    }
    humanElement.src = "img/patient.png";
    hospital.appendChild(humanElement);
  })

  const noHumanPosition = noHumanPlace()
  noHumanPosition.forEach((position) => {
    const humanElement = document.createElement("img");
    humanElement.style.gridRowStart = position.y;
    humanElement.style.gridColumnStart = position.x;
    humanElement.classList.add("noPatient");
    if(check){
      humanElement.classList.add('checkNoPatient');
      humanElement.position = position
    }
    humanElement.src = "img/noPatient.png";
    hospital.appendChild(humanElement);
  })
  
}
