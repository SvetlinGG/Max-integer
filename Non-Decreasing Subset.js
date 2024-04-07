function decreasing(arr){
    
    
    let result = arr.filter((num, index) => index ==0 || num>= arr[index -1]);
    console.log(result.join(' '));

}
decreasing([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
decreasing([ 20, 3, 2, 15, 6, 1]);