function square(n) {
    return n*n;
}

function memoize(fn) {
    let cache = {}
    return function(...args) {
        let n = JSON.stringify(args)
        if(n in cache){
            return cache[n]
        }else{
            let result = fn.apply(this, args)
            cache[n] = result
            return result
        }
    }
}

console.time()
let EffeResult = memoize(square)
console.log(EffeResult(5))
console.timeEnd()

console.time()
console.log(EffeResult(5))
console.timeEnd()
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */