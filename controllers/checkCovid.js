import { setPath } from "../robot.js"
import { getPosition } from "../position/position.js"
import { hospitalGatePlace } from "../wall.js"

export const checkCovidAllActions = () => {
    setPath(getPosition(),hospitalGatePlace()[0])
}

export const bringPatientToBed = (bedPosition) => {
    setPath(getPosition(),bedPosition)
}