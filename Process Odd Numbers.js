function process(arr){
    let newArr = [];
    for ( let i=arr.length-1; i>=0; i-=2){
        newArr.push(arr[i]);
    }
    newArr = newArr.map( n => n *2).join(' ');
    console.log(newArr);

}
process([10, 15, 20, 25]);
process([3, 0, 10, 4, 7, 3])