function smallest(arr){

    let filtered = arr.sort((a, b) => a -b).slice(0,2);
    
    console.log(filtered.join(' '));

}
smallest([30, 15, 50, 5]);
smallest([3, 0, 10, 4, 7, 3]);