function train(arr){
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = arr.shift();
    capacity = Number(capacity);
    
    for ( let element of arr){
        let[ command,passengers] = element.split(' ');
        if ( command === 'Add'){
            wagons.push(Number(passengers));
        } else {
            let newPassengers = Number(command);
            for ( let i=0; i < wagons.length; i++){
                if ( wagons[i] + newPassengers <= capacity){
                        wagons[i] += newPassengers;
                        break;
                }

            }
        } 
    }
    
    console.log(wagons.join(' '));

}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);