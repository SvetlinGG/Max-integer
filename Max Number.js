function number(arr){
    let topNumbers = [];
    let max = Number.MIN_SAFE_INTEGER;
    for ( let i= arr.length; i>0; i--){
        if ( arr[i] > max){
            max = arr[i];
            topNumbers.unshift(arr[i]);
        }
    }
    console.log(topNumbers.join(' '));

}
number([1, 4, 3, 2]);
number([14, 24, 3, 19, 15, 17]);