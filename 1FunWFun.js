var createHelloWorld = function (){
    return function fun(...args){
        return "Hello World"
    }
}

var fun = createHelloWorld()
console.log(fun())