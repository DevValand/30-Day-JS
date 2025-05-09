var createCounter = function(n) {
    // let count = n
    return function() {
       return n++
    };
};

let counter= createCounter(6)
console.log(counter())
console.log(counter())
console.log(counter())