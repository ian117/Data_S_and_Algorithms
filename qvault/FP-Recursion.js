// function zipmap(keys, values){
//     if (keys.length === 0 || values.length === 0){
//       return {}
//     }
//     let res = zipmap(keys.slice(1), values.slice(1))
//     res[keys[0]] = values[0]
//     return res
//   }

// let zm = zipmap([1,2,3], [4,5,6])
// console.log(zm[1])
// console.log(zm[2])
// console.log(zm[3])
// zm = zipmap([1,2,3,45,6], [4,5,6,7,8,9])
// console.log(zm[1])
// console.log(zm[2])
// console.log(zm[3])
// console.log(zm[45])
// console.log(zm[6])
// zm = zipmap(['lane', 'elon', 'karen'], ['wagner', 'musk', 'gilain'])
// console.log(zm['lane'])
// console.log(zm['elon'])
// console.log(zm['karen'])
// console.log(zm['unknown'])
// console.log(zm)


function binarySearch(n, arr){
    return binarySearchR(n, arr, 0, arr.length - 1);
  }
  
  // binarySearchR 
  // finds number n in sorted array arr in between indexes i1 and i2
  // using a recursive approach
  function binarySearchR(n, arr, i1, i2){
    if (i1 > i2) return -1;

    // let m = Math.floor((i1 + i2) / 2)
    let mid = i1 + Math.floor((i2 - i1) / 2)
    // console.log('mid: ' + mid)
    if (n === arr[mid] ) {
        return mid
    }
    
    if (n < arr[mid]) {
        return binarySearchR(n, arr, i1, mid -1)
    }

    return binarySearchR(n, arr, mid + 1, i2);
  }

//   function binarySearchR(n, arr, i1, i2){
//     if (i2 < i1){
//       return -1;
//     }
//     let mid = i1 + Math.floor((i2 - i1) / 2);
  
//     if (n === arr[mid]){
//       return mid;
//     }
  
//     if (n < arr[mid]){
//       return binarySearchR(n, arr, i1, mid - 1);
//     }
  
//     return binarySearchR(n, arr, mid + 1, i2);
//   }
  
  console.log(binarySearch(10, [1,3,4,5,6,10]))
//   console.log(binarySearch(5, [1,3,4,5,6,8,9,10,100,102]))
//   console.log(binarySearch(23, [1,3,4,5,6,7,8,9,23,26,28,32,100]))
//   console.log(binarySearch(1000, [1,3,4,5,6,7,8,9,23,26,28,32,100,200,300,500,1000,20000,40000,500000,600000]))
  