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

    for(let i=21; i>=3 ; i--){
        if(hospitalMap[i][24] === 0){
            hospitalMap[i][24] = getRandomPatient()
        }
    }
}