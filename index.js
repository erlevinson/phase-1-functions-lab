// Code your solution in this file!
function distanceFromHqInBlocks(num1){
   const homeBlock = 42
   let distance = num1 - homeBlock
   let distanceAbs = Math.abs(distance)
   return distanceAbs 
}

function distanceFromHqInFeet(num1) {
 let distance = distanceFromHqInBlocks(num1)
 const baseFeet = 264
 const distanceInFeet = distance * baseFeet 
 return distanceInFeet
}

function distanceTravelledInFeet(start, destination){
    let distance = (start - destination) * 264
    let distanceABS = Math.abs(distance)
    return distanceABS
}
function calculatesFarePrice(start, destination){
    let d = distanceTravelledInFeet(start, destination)
    if (d < 400) {
        return 0
    }
    if (d > 400 && d < 2000) {
    return (d-400) * .02
}
    if (d > 2000 && d < 2500) {
        return 25
    }
    if (d > 2500) {
        return "cannot travel that far"
    }
}