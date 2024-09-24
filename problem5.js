function  waitingTime(waitingTimes  , serialNumber) {

  if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
    return "Invalid Input";
  }


    let sum = 0;
    
for (let i = 0; i < waitingTimes.length; i++) {

  sum += waitingTimes[i];

}

let averae =  Math.round(sum/waitingTimes.length)
let result = averae* ((serialNumber-1)-waitingTimes.length)
return result


}


const output = waitingTime([7, 8, 3, 4, 5], "9")
console.log(output)