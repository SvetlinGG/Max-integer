function sorting(arr){
    arr.sort((a,b) => a - b);
    let sortedArr = [];
    while(arr.length){
        if ( arr.length){
            sortedArr.push(arr.pop());
        }
        if ( arr.length){
            sortedArr.push(arr.shift());
        }
    }
    console.log(sortedArr.join(' '));
    
    

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);