const fibonacci = function(x) {
    if (x < 1){
        return "OOPS"
    }
    if (x == 1){
        return 1
    }
    if (x==2){
        return 1
    }
    else{
        return fibonacci(x-2) + fibonacci(x-1)
    }
};

// Do not edit below this line
module.exports = fibonacci;
