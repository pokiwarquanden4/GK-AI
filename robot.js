import { map } from "./wall.js";
import { getResult, AStar } from "./Movement.js";
import { getPosition } from "./position/position.js";
import { bringPatientToBed } from "./controllers/checkCovid.js";
import {
  bringPillToPatientActions,
  defaultActions,
  pushPatientActions,
} from "./controllers/currentActions.js";

const robotPosition = getPosition();
let inputDirection = { x: 0, y: 0 };
const hospitalMap = map();
let path = null;
let pathIndex = 0;
let nextStepPosition = null;

//A*
export const setPath = (currentPosition, goalPosition, nextStep) => {
  AStar({ ...currentPosition }, { ...goalPosition });
  path = getResult();
  pathIndex = 0;
  nextStepPosition = nextStep;
};

const robotMove = (inputDirection) => {
  robotPosition.x += inputDirection.x;
  robotPosition.y += inputDirection.y;
};

const stopRobot = () => {
  inputDirection = { x: 0, y: 0 };
};

const handleInputPosition = (position) => {
  if (
    position.x - robotPosition.x === 1 &&
    position.y - robotPosition.y === 0
  ) {
    inputDirection = { x: 1, y: 0 };
  }
  if (
    position.x - robotPosition.x === -1 &&
    position.y - robotPosition.y === 0
  ) {
    inputDirection = { x: -1, y: 0 };
  }
  if (
    position.x - robotPosition.x === 0 &&
    position.y - robotPosition.y === -1
  ) {
    inputDirection = { x: 0, y: -1 };
  }
  if (
    position.x - robotPosition.x === 0 &&
    position.y - robotPosition.y === 1
  ) {
    inputDirection = { x: 0, y: 1 };
  }
};

const getEmptyBedSick = () => {
  for (let i = 0; i < hospitalMap.length; i++) {
    for (let j = 0; j < 25; j++) {
      if (hospitalMap[i][j] === "noHuman") {
        return { x: j + 1, y: i + 1 };
      }
    }
  }
};
const getEmptyBedCovid = () => {
  for (let i = 0; i < hospitalMap.length; i++) {
    for (let j = 25; j < hospitalMap[i].length; j++) {
      if (hospitalMap[i][j] === "noHuman") {
        return { x: j + 1, y: i + 1 };
      }
    }
  }
};

const handleDefaultActions = () => {
  if (pathIndex === path.length - 1) {
    defaultActions();
  }
};

export const getPath = () => {
  return path;
};

export function updateRobot() {
  if (path) {
    if (pathIndex < path.length) {
      handleInputPosition(path[pathIndex]);
      pathIndex++;
      const nextPosition =
        hospitalMap[robotPosition.y + inputDirection.y - 1][
          robotPosition.x + inputDirection.x - 1
        ];
      switch (nextPosition) {
        case "noHuman":
          if (pathIndex === path.length) {
            hospitalMap[robotPosition.y + inputDirection.y - 1][
              robotPosition.x + inputDirection.x - 1
            ] = "human";
          }
          robotMove(inputDirection);
          stopRobot();
          handleDefaultActions();
          break;
        case "human":
          if (pathIndex === path.length) {
          }
          robotMove(inputDirection);
          stopRobot();
          handleDefaultActions();
          break;
        case "pillSick":
        case "covidPill":
        case "recoverPill":
        case "headachePill":
          if (pathIndex === path.length && nextStepPosition) {
            setPath(getPosition(), nextStepPosition);
            bringPillToPatientActions();
            nextStepPosition = null;
          }
          robotMove(inputDirection);
          stopRobot();
          handleDefaultActions();
          break;
        case "wall":
          if (pathIndex === path.length) {
            console.log("block");
          }
          robotMove(inputDirection);
          stopRobot();
          handleDefaultActions();
          break;
        case "hospital Gate":
          if (pathIndex === path.length) {
            const status =
              hospitalMap[robotPosition.y + inputDirection.y - 1][
                robotPosition.x + inputDirection.x
              ];
            console.log("Result: " + status)
            if (status) {
              for(let i = 3; i <= 21;i++){
                console.log(hospitalMap[i][24])
                if(i===21){
                  hospitalMap[i][24] = 0
                }else{
                  hospitalMap[i][24] = hospitalMap[i+1][24]
                }
                
              }
              
              switch (status) {
                case "waiting":
                  bringPatientToBed(getEmptyBedSick());
                  pushPatientActions();
                  break;
                case "waitingCovid":
                  bringPatientToBed(getEmptyBedCovid());
                  pushPatientActions();
                  break;
                case "healthyPerson":
                  break;
              }
            }
          }
          robotMove(inputDirection);
          stopRobot();
          handleDefaultActions();
          break;
        default:
          robotMove(inputDirection);
          stopRobot();
          handleDefaultActions();
          break;
      }
    } else {
      path = null;
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
