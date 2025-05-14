/**
 * @param {number[]} arr    * @param {Function} fn   * @return {number[]}
*/
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
var map = function(arr, fn) {
    const newarray = []
    for(let i=0; i < arr.length; i++){
        newarray[i] = fn(arr[i], i)
    }
    return newarray
};

console.log(map([1, 2, 3], function(n, i) {
    return n + 1;
}));