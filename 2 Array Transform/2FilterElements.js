var filter = function(arr, fn) {
    let newarray = []
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i],i)){
            newarray.push(arr[i])
        }
    }
    return newarray
};

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10