function remove(arr){
   let addArray = [];
   let number = 1;
   for ( let numbers of arr){
    if ( numbers === 'add'){
        addArray.push(number);
    }else if ( numbers === 'remove'){
        if ( addArray.length >0){
            addArray.pop(0);

        }
    }
    number ++;
   }
   if ( addArray.length === 0){
    console.log('Empty');
   }else {
    console.log(addArray.join(' '));
   }
}
remove(['add', 'add', 'add', 'add']);
remove(['remove', 'remove', 'remove']);