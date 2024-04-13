function party(arr){
    let newArr = [];
    for ( let guests of arr){
        let tokens = guests.split(' ');
        let name = tokens[0]
        if ( tokens.includes('not')){
            if ( newArr.includes(name)){
                let idx = newArr.indexOf(name);
                newArr.splice(idx,1);
            }else {
                console.log(`${name} is not in the list!`);
            }
        }else{
            if ( newArr.includes(name)){
                console.log(`${name} is already in the list`);
            }else{
                newArr.push(name);
            }
        }
    }
    console.log(newArr.join('\n'));
    

}
party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);