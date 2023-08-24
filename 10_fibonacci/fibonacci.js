const fibonacci = function(n) {
    parseInt(n);
    if(n < 0){
        return "OOPS";
    }
    let arr = [1, 1];

    for(let i = 0; i < n - 1; i++){
        arr.push(arr[i] + arr[i+1]);
    }

    return arr[n - 1];
};

console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
