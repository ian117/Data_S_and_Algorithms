function binarySearchR(target, array) {
    
    function recursiveStuff(min, max) {
        if (min > max) {
            return -1
        }
        let middle = Math.floor((min + max) / 2);

        if (array[middle] === target) {
            return middle
        }
    
        if (array[middle] > target) {
            return recursiveStuff(min, middle - 1)
        }
        return recursiveStuff(middle + 1, max)

    }
    
    return recursiveStuff(0, array.length - 1)
}




console.log(binarySearchR(7,[1,7,9,14])) 
// console.log(binarySearchR(15,[1,3,4,6,9,14,15,19,22,25])) //True 6