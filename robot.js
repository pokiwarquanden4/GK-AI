import { map } from "./wall.js";
import { getResult, AStar } from "./Movement.js";
import { getPosition } from "./position/position.js";
import { bringPatientToBed } from "./controllers/checkCovid.js";

const robotPosition = getPosition();
let inputDirection = { x: 0, y: 0 };
const hospitalMap = map()
let path = null
let pathIndex = 0

//A* 
export const setPath = (currentPosition, goalPosition) => {
  AStar({...currentPosition}, {...goalPosition})
  path = getResult()
  pathIndex = 0
}

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

const getEmptyBedSick = () => {
  for(let i=0 ;i<hospitalMap.length ;i++){
    for(let j=0; j<22 ; j++){
        if(hospitalMap[i][j] === 'noHuman'){
            return {x: j+1, y:i+1}
        }
    }
}
}
const getEmptyBedCovid = () => {
  for(let i=0 ;i<hospitalMap.length ;i++){
    for(let j=22; j<hospitalMap[i].length ; j++){
        if(hospitalMap[i][j] === 'noHuman'){
            return {x: j+1, y:i+1}
        }
    }
}
}

export const getPath = () => {
  return path
}

export function updateRobot() {
  if(path){
    if(pathIndex < path.length){
      handleInputPosition(path[pathIndex])
      pathIndex++;
      const nextPosition = hospitalMap[robotPosition.y + inputDirection.y -1][robotPosition.x + inputDirection.x -1]
      switch(nextPosition) {
        case 'noHuman':
          if(pathIndex === path.length){
            hospitalMap[robotPosition.y + inputDirection.y -1][robotPosition.x + inputDirection.x -1] = 'human'
          }
          robotMove(inputDirection)
          stopRobot()
          break
        case 'pill':
          if(pathIndex === path.length){
            console.log("get pill")
          }
          robotMove(inputDirection)
          stopRobot()
          
          break
        case 'human':
          if(pathIndex === path.length){
            console.log("human")
          }
          robotMove(inputDirection)
          stopRobot()
          break
        case 'wall':
          if(pathIndex === path.length){
            console.log("block")
          }
          robotMove(inputDirection)
          stopRobot()
          break
        case 'hospital Gate':
          if(pathIndex === path.length){
            const status = hospitalMap[robotPosition.y + inputDirection.y - 2][robotPosition.x + inputDirection.x -1]
            if(status){
              hospitalMap[7][23] = hospitalMap[6][23]
              hospitalMap[6][23] = hospitalMap[5][23]
              hospitalMap[5][23] = hospitalMap[4][23]
              hospitalMap[4][23] = hospitalMap[3][23]
              hospitalMap[3][23] = hospitalMap[2][23]
              hospitalMap[2][23] = hospitalMap[1][23]
              hospitalMap[1][23] = 0
              switch(status){
                case 'waiting':
                  bringPatientToBed(getEmptyBedSick())
                  break
                case 'waitingCovid':
                  bringPatientToBed(getEmptyBedCovid())
                  break
                case 'healthyPerson':
                  break
              }
            }
            console.log("hospital Gate")  
          }
          robotMove(inputDirection)
          stopRobot()
          
          break
        default:
          robotMove(inputDirection)
          stopRobot()
          break
      }
    }else{
      path = null
    }
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
