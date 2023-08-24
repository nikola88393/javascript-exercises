const palindromes = function (string) {
    let newString = string.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase(); // Corrected: Replace all spaces and convert to lowercase
    let newStringReversed = newString.split("").reverse().join("");
    if(newString === newStringReversed){
        return true;
    }
    else{
        return false;
    }
};
palindromes('Animal loots foliated detail of stool lamina.')
// Do not edit below this line
module.exports = palindromes;
