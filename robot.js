import { getInputDirection, setInputDirection } from "./actions.js";
import { map } from "./wall.js";

const robotPosition = { x: 2, y: 2 };
const hospitalMap = map()
console.log(hospitalMap)

const robotMove = (inputDirection) =>{
  robotPosition.x += inputDirection.x;
  robotPosition.y += inputDirection.y;
}

const stopRobot = () => {
  setInputDirection({x: 0, y: 0})
}

export function updateRobot() {
  const inputDirection = getInputDirection();
  const currentPosition = hospitalMap[robotPosition.y + inputDirection.y -1][robotPosition.x + inputDirection.x -1]

  switch(currentPosition) {
    case 'pill':
      console.log("get pill")
      stopRobot()
      break 
    case 'human':
      console.log("human")
      stopRobot()
      break 
    case 'wall':
      console.log("block")
      stopRobot()
      break 
    default:
      robotMove(inputDirection)

  }
  
}

export function drawRobot(hospital) {

  const robotElement = document.createElement("img");
  robotElement.style.gridRowStart = robotPosition.y;
  robotElement.style.gridColumnStart = robotPosition.x;
  robotElement.classList.add("robot");
  robotElement.src = "img/robot.png";

  hospital.appendChild(robotElement);
}
