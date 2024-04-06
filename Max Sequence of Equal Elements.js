function maxSequence(arr){

    let start = 0;
    let length = 1;
    let tempStart = 0;
    let tempLength = 1;

    for ( let i=1; i <arr.length; i++){
        if ( arr[i] === arr[i-1]){
            tempLength ++;
            if ( tempLength > length){
                length = tempLength;
                start = tempStart;
            }
        }else {
            tempLength = 1;
            tempStart = i;
        }

    }
    console.log(arr.slice(start, start + length).join(' '));

}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);