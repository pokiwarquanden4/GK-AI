const w= 'wall'
const p= 'pillSick'
const h= 'human'
const n= 'noHuman'
const c= 'waiting'
const u= 'waitingCovid'
const g = 'healthyPerson'
const d = 'covidPill'
const r = 'recoverPill'
const a = 'headachePill'
const m = 'hospital Gate'
const mainMap = [
    [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
    [w,0,0,p,0,0,0,w,0,0,0,r,0,0,w,0,0,0,0,0,0,0,0,c,0,0,0,0,0,0,0,w,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,0,0,0,0,0,0,w,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,u,0,0,0,0,0,0,0,w,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,0,0,0,0,0,0,w,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,u,0,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,d,0,0,0,0,w],
    [w,0,0,0,0,0,0,w,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,g,0,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,0,0,0,0,0,0,w,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,c,0,0,0,0,0,0,0,w,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,0,0,0,0,0,0,w,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,g,0,0,0,0,0,0,0,w,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,w,w,0,0,w,w,w,w,w,w,0,w,w,w,w,w,w,w,w,w,w,0,c,0,w,w,w,w,w,w,w,0,0,0,0,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
    [w,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,0,w,w,m,w,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,a,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,w,w,w,w,w,w,w,0,0,w,w,w,w,w,0,0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,0,0,w,w,w,w,w,w,w,w,w,w,w],
    [w,h,0,0,0,0,n,w,0,0,w,0,0,0,0,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,0,0,0,0,0,0,w,0,0,w,0,0,0,0,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,h,0,0,0,0,n,w,0,0,w,0,n,0,n,0,n,0,n,0,0,w,0,n,0,n,0,n,0,n,0,0,0,n,0,n,0,n,0,n,0,n,0,n,0,n,0,n,0,w],
    [w,0,0,0,0,0,0,w,0,0,w,0,0,0,0,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,h,0,0,0,0,n,w,0,0,w,0,n,0,n,0,n,0,n,0,0,w,0,n,0,n,0,n,0,n,0,0,0,n,0,n,0,n,0,n,0,n,0,n,0,n,0,n,0,w],
    [w,0,0,0,0,0,0,w,0,0,w,0,0,0,0,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,h,0,0,0,0,0,0,0,0,w,0,n,0,n,0,n,0,n,0,0,w,0,n,0,n,0,n,0,n,0,w,0,n,0,n,0,n,0,n,0,n,0,n,0,n,0,n,0,w],
    [w,0,0,0,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,w,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,w],
    [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
]

let wallPosition = []
for(let i=0 ;i<mainMap.length ;i++){
    for(let j=0; j<mainMap[i].length ; j++){
        if(mainMap[i][j] === w){
            wallPosition.push({x: j+1, y: i+1})
        }
    }
}

const handleMainMap = (arr, value) => {
    for(let i=0 ;i<mainMap.length ;i++){
        for(let j=0; j<mainMap[i].length ; j++){
            if(mainMap[i][j] === value){
                arr.push({x: j+1, y: i+1})
            }
        }
    }
    return arr
}

export function pillPlace(){
    let pillSickPosition = []
    handleMainMap(pillSickPosition, p)
    return pillSickPosition;
}

export function pillCovidPlace(){
    let pillCovidPosition = []
    handleMainMap(pillCovidPosition, d)
    return pillCovidPosition;
}

export function recoverPillPlace(){
    let recoverPillPosition = []
    handleMainMap(recoverPillPosition, r)
    return recoverPillPosition;
}

export function headachePillPlace(){
    let headachePillPosition = []
    handleMainMap(headachePillPosition, a)
    return headachePillPosition;
}

export function humanPlace(){
    let humanPosition = []
    handleMainMap(humanPosition, h)
    return humanPosition;
}

export function noHumanPlace(){
    let noHumanPosition = []
    handleMainMap(noHumanPosition, n)
    return noHumanPosition;
}

export function waitingPlace(){
    let waitingPosition = []
    handleMainMap(waitingPosition, c)
    return waitingPosition;
}

export function waitingHealthyPersonPlace(){
    let healthyPersonPosition = []
    handleMainMap(healthyPersonPosition, g)
    return healthyPersonPosition;
}

export function waitingCovidPlace(){
    let waitingCovidPosition = []
    handleMainMap(waitingCovidPosition, u)
    return waitingCovidPosition;
}

export function map(){
    return mainMap;
}

export function updateWall() {}

export function drawWall(hospital) {  
  wallPosition.forEach((position) => {
    const wallElement = document.createElement("img");
    wallElement.style.gridRowStart = position.y;
    wallElement.style.gridColumnStart = position.x;
    wallElement.classList.add("wall");
    wallElement.src = "img/wall.png";
    hospital.appendChild(wallElement);
  });
}
