var createCounter = function(init) {
    const n = init
    var obj = {
        increment(){
            return ++init
        },
        decrement(){
            return --init
        },
        reset(){
            return init = n
        }
    }
    return obj
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()) //5
console.log(counter.decrement()); // 4

