const reverseString = function(string) {
    if(string === null){
        return "ERROR";
    }
    let reversed = "";
    for(let i = string.length - 1; i >= 0; i--){
        reversed += string[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
