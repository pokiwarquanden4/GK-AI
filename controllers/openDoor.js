import { map } from "../wall.js";

const getRandomPatient = () => {
    const random = Math.floor(Math.random() * 3);

    switch(random){
        case 0:
            return 'waiting'
        case 1:
            return 'waitingCovid'
        case 2:
            return 'healthyPerson'
    }
}

export const handleOpenDoor = () => {
    const hospitalMap = map()

    for(let i=7; i>=1 ; i--){
        if(hospitalMap[i][23] === 0){
            hospitalMap[i][23] = getRandomPatient()
        }
    }
}