import { draw } from "../index.js";
import { getHeadachePillPlace, getPillCovidPlace, getPillPlace, getRecoverPillPlace } from "../position/pillPosition.js";
import { getPosition } from "../position/position.js";
import { setPath } from "../robot.js";

const pillLists = document.querySelector('.ListPill')
const map = document.querySelector('.map')
export const handleBringPill = () => {
   
    const exit = document.querySelector('.exitListPill')
    const sickPill = document.querySelector('.sickPill')
    const covidPill = document.querySelector('.covidPill')
    const recoverPill = document.querySelector('.recoverPill')
    const headachePill = document.querySelector('.headachePill')

    pillLists.style.display = 'flex'
    exit.addEventListener('click', () => {
        pillLists.style.display = 'none'
    })

    //Add Event to all Pill
    sickPill.addEventListener('click', ()=> {
        handleHospitalMap('sickPill')
    })
    covidPill.addEventListener('click', ()=> {
        handleHospitalMap('covidPill')
    })
    recoverPill.addEventListener('click', ()=> {
        handleHospitalMap('recoverPill')
    })
    headachePill.addEventListener('click', ()=> {
        handleHospitalMap('headachePill')
    })
}

const handleHospitalMap = (pillName) => {
    const exit = document.querySelector('.exitMap')
    map.style.display = 'flex'
    exit.addEventListener('click', () => {
        map.style.display = 'none'
    })
    const hospital = document.querySelector('.hospital_map')
    draw(hospital, true)

    //Patient
    const patients = document.querySelectorAll('.checkPatient')
    const noPatients = document.querySelectorAll('.checkNoPatient')

    for(let i=0; i<patients.length ; i++){
        patients[i].addEventListener('click', () => {
            switch(pillName) {
                case 'sickPill':
                    setPath(getPosition(), getPillPlace(), patients[i].position)
                    pillLists.style.display = 'none'
                    map.style.display = 'none'
                    break
                case 'covidPill':
                    setPath(getPosition(), getPillCovidPlace(), patients[i].position)
                    pillLists.style.display = 'none'
                    map.style.display = 'none'
                    break
                case 'recoverPill':
                    setPath(getPosition(), getRecoverPillPlace(), patients[i].position)
                    pillLists.style.display = 'none'
                    map.style.display = 'none'
                    break
                case 'headachePill':
                    setPath(getPosition(), getHeadachePillPlace(), patients[i].position)
                    pillLists.style.display = 'none'
                    map.style.display = 'none'
                    break
            }
            
        })
    }
     
    for(let i=0; i<noPatients.length ; i++){
        noPatients[i].addEventListener('click', () => {
            console.log("No Patient")
        })
    }
   
}


