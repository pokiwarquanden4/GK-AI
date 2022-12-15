import { draw } from "../index.js";


export const handleBringPill = () => {
    const pillLists = document.querySelector('.ListPill')
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
    const map = document.querySelector('.map')
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


    const handlePatient = () => {
        console.log("yes")
    }
    for(let i=0; i<patients.length ; i++){
        patients[i].addEventListener('click', handlePatient)
    }
    
    const handleNoPatient = () => {
        console.log("no")
    }
    for(let i=0; i<noPatients.length ; i++){
        noPatients[i].addEventListener('click', handleNoPatient)
    }
   
}


