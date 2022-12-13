import { map } from "./wall.js";
import { getResult, AStar } from "./Movement.js";

const robotPosition = { x: 2, y: 2 };
let inputDirection = { x: 0, y: 0 };
const hospitalMap = map()
let path = null
let pathIndex = 0

//A* 
AStar({...robotPosition})
path = getResult()

const robotMove = (inputDirection) =>{
  robotPosition.x += inputDirection.x;
  robotPosition.y += inputDirection.y;
}

const stopRobot = () => {
  inputDirection = {x: 0, y: 0}
}

const handleInputPosition = (position) => {
  if(position.x - robotPosition.x === 1 && position.y - robotPosition.y === 0){
    inputDirection = { x: 1, y: 0 };
  }
  if(position.x - robotPosition.x === -1 && position.y - robotPosition.y === 0){
    inputDirection = { x: -1, y: 0 };
  }
  if(position.x - robotPosition.x === 0 && position.y - robotPosition.y === -1){
    inputDirection = { x: 0, y: -1 };
  }
  if(position.x - robotPosition.x === 0 && position.y - robotPosition.y === 1){
    inputDirection = { x: 0, y: 1 };
  }
}

export function updateRobot() {
  if(pathIndex !== path.length - 1){
    handleInputPosition(path[pathIndex])
    pathIndex++;
    const nextPosition = hospitalMap[robotPosition.y + inputDirection.y -1][robotPosition.x + inputDirection.x -1]
    switch(nextPosition) {
      case 'pill':
        console.log("get pill")
        stopRobot()
        break 
      case 'human':
        console.log(robotPosition)
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
  }else{
    
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
