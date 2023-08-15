const sumAll = function(numStart, numEnd) {
    if(typeof numStart !== 'number' || typeof numEnd != 'number'){
        return "ERROR";
    }
    if(numStart < 0 || numEnd < 0){
        return "ERROR";
    }
    let sum = 0;
    if(numStart < numEnd){
    for(let i = numStart; i < numEnd + 1; i++){
        sum += i;
    }
}
else {
    for(let i = numEnd; i < numStart + 1; i++){
        sum += i;
    }
}
    return sum;
};

sumAll(50,1);
// Do not edit below this line
module.exports = sumAll;
