import { setPath } from "../robot.js"
import { getPosition } from "../position/position.js"
import { pillPlace,pillCovidPlace,humanPlace,noHumanPlace,waitingPlace,waitingHealthyPersonPlace,waitingCovidPlace,map } from "../wall.js"

export const checkCovidAllActions = () => {
    setPath(getPosition(),{x:24, y:9})
}

export const bringPatientToBed = (bedPosition) => {
    setPath(getPosition(),bedPosition)
}