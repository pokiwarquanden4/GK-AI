import { map } from "./wall.js"
let result = null

export const AStar = (position) => {
    const getDirectDistance = (position, goal) => {
        const result = Math.sqrt(Math.pow(position.x - goal.x, 2) + Math.pow(position.y - goal.y,2)) 
        return result
    }
    
    const currentPosition = position
    const hospitalMap = map()
    const goalPosition = {x:20, y:24}
    const tree = [{value: getDirectDistance(currentPosition, goalPosition),position: currentPosition ,tree: null, treeClass: 0, key: true, path: [currentPosition]}]
    let minOfTree = {value: 999999999, position: null};
    let moveMent =[currentPosition]
    
    
    const pushTree =  (currentPosition, currentTree, newMovement, treeClass = 1) => {
        currentTree.forEach((branch, index)=>{
            if(branch.key === true){
                if(!newMovement[0].treeClass){
                    for(let i=0; i<newMovement.length ; i++){
                        newMovement[i].treeClass = treeClass
                        newMovement[i].path = [...branch.path, {x: newMovement[i].position.x, y: newMovement[i].position.y }]
                    }
                }
                branch.tree = newMovement
                return 'Found It'
            }else {
                if(index === currentTree.length - 1){
                    const newTreeClass = treeClass + 1
                    currentTree.forEach((branch) => {
                        if(branch.tree){
                            pushTree(currentPosition, branch.tree, newMovement, newTreeClass) 
                        }
                    })
                }
            }
        })
    }
    
    
    const setMinOfTree =  (currentTree) => {
        currentTree.forEach((branch,index)=>{
            if(branch.value < minOfTree.value && !branch.tree){
                minOfTree.value = branch.value
                minOfTree.position = branch.position
                branch.key = true
                resetTree(tree,index, branch.treeClass, branch.position)
            }
            if(index === currentTree.length - 1){
                currentTree.forEach((branch) => {
                    if(branch.tree){
                        setMinOfTree(branch.tree)
                    }
                })
            }
        })
    }
    
    const resetTree = (currentTree,ignoreIndex, treeClass, position) => {
        currentTree.forEach((branch,index)=>{
            if(ignoreIndex !== index || treeClass !== branch.treeClass || branch.position.x !== position.x || branch.position.y !== position.y ){
                branch.key = false
            }
            if(index === currentTree.length - 1){
                currentTree.forEach((branch) => {
                    if(branch.tree){
                        resetTree(branch.tree,ignoreIndex, treeClass, position)
                    }
                })
            }
        })
    }
    
    const setMovement = (currentTree) => {
        currentTree.forEach((branch,index)=>{
            if(branch.key){
                const result = [...branch.path]
                moveMent = result
                return
            }
            if(index === currentTree.length - 1){
                currentTree.forEach((branch) => {
                    if(branch.tree){
                        setMovement(branch.tree)
                    }
                })
            }
        })
    } 
    
    const getNextPosition =  (nextPosition) => {
        const currentPosition = moveMent[moveMent.length - 1]
        const newMovement = []
        
        nextPosition.forEach((position)=>{
            if(hospitalMap[position.y - 1][position.x - 1] === 0){
                newMovement.push({value: getDirectDistance(position, goalPosition) + moveMent.length,position: position, tree:null})
            }
        })
        pushTree(currentPosition, tree, newMovement)
        
        //Action
        minOfTree = {value: 999999999, position: null};
        setMinOfTree(tree)
        setMovement(tree)
        
        return minOfTree.position
    }
    
    const handleMovement =  (currentPosition) => {
        const topLeft = { x: currentPosition.x - 1, y: currentPosition.y - 1}
        const top = { x: currentPosition.x - 1, y: currentPosition.y}
        const topRight = { x: currentPosition.x - 1, y: currentPosition.y + 1}
        const left = { x: currentPosition.x , y: currentPosition.y - 1}
        const right = { x: currentPosition.x, y: currentPosition.y + 1}
        const bottomLeft = { x: currentPosition.x + 1, y: currentPosition.y - 1}
        const bottom = { x: currentPosition.x + 1, y: currentPosition.y}
        const bottomRight = { x: currentPosition.x + 1, y: currentPosition.y + 1}
        const nextPosition = [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight]
    
        //Đệ quy
        const newPosition =  getNextPosition(nextPosition)
        if(newPosition.x === goalPosition.x && newPosition.y === goalPosition.y ){
            finalPath(tree)
        }else{
            handleMovement(newPosition)
        }
    }
    
    
    const finalPath = (currentTree) => {
        currentTree.forEach((branch,index)=>{
            if(branch.key){
                result = branch.path
            }
            if(index === currentTree.length - 1){
                currentTree.forEach((branch) => {
                    if(branch.tree){
                        finalPath(branch.tree)
                    }
                })
            }
        })
    }

    //Handle 
    handleMovement(currentPosition)
}


export const getResult = () => {
    return result
}
