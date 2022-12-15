import { pillPlace,pillCovidPlace,recoverPillPlace,headachePillPlace } from "../wall.js";

export const getPillPlace = () => {
    return pillPlace()[0]
}
export const getPillCovidPlace = () => {
    return pillCovidPlace()[0]
}
export const getRecoverPillPlace = () => {
    return recoverPillPlace()[0]
}
export const getHeadachePillPlace = () => {
    return headachePillPlace()[0]
}