const w= 'wall'
const p= 'pill'
const h= 'human'
const mainMap = [
    [w,w,w,w,w,w,w,w,w],
    [w,0,0,w,w,w,w,w,w],
    [w,0,0,0,0,0,0,0,w],
    [w,w,w,w,w,w,w,0,w],
    [w,h,0,0,0,0,0,0,w],
    [w,w,w,w,w,w,w,w,w],
    
]
// const mainMap = [
//     [w,w,w,w,w,w,w,w,w,w,w],
//     [w,0,0,p,0,0,0,w,0,0,w],
//     [w,0,0,0,0,0,0,w,0,0,w],
//     [w,w,w,0,0,w,w,w,0,0,w],
//     [w,0,0,0,0,0,0,w,0,0,w],
//     [w,0,0,0,0,0,0,0,0,0,w],
//     [w,w,w,w,w,w,w,w,0,0,w],
//     [w,h,0,0,0,0,0,0,0,0,w],
//     [w,w,w,w,w,w,w,w,w,w,w],
    
// ]

let wallPosition = [];
let pillPosition =[];
let humanPosition =[];
for(let i=0 ;i<mainMap.length ;i++){
    for(let j=0; j<mainMap[i].length ; j++){
        if(mainMap[i][j] === w){
            wallPosition.push({x: j+1, y: i+1})
        }
        if(mainMap[i][j] === p){
            pillPosition.push({x: j+1, y: i+1})
        }
        if(mainMap[i][j] === h){
            humanPosition.push({x: j+1, y: i+1})
        }
    }
}

export function pillPlace(){
    return pillPosition;
}

export function humanPlace(){
    return humanPosition;
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
