function printing(arr){
    let result = [];
    let step = Number(arr.pop());
    for ( let i =0; i < arr.length; i+=step){
        
        result.push(arr[i]);
    }
    console.log(result.join(' '));

}
printing(['5', '20', '31', '4', '20', '2'])