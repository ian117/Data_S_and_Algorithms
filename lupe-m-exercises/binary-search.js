function binarySearch(array, item) {

    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        //Find Middle Index with two previuos values
        let middle = Math.floor((min + max) / 2)
    
        if (item === array[middle]) {
            return middle
        }
    
        if (array[middle] > item) {
            max = middle - 1      
        }

        if (array[middle] < item) {
            min = middle + 1      
        }
        
    }
    return -1
}

console.log(binarySearch([1,3,4,6,9,14],7)) // False -1
console.log(binarySearch([1,3,4,6,9,14,15,19,22,25], 15)) //True 6