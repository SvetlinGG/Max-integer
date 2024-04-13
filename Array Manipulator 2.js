function manipulator(arr, commands){

    
    for ( let element of commands){
        let tokens = element.split(' ');
        let command = tokens.shift();
        let firstNum = Number(tokens.shift());
        let secondNum = Number(tokens.shift());
        if ( command === 'add' ){
            arr.splice(firstNum,0,secondNum);
        }else if ( command === 'addMany'){
            for ( let secondNum of tokens){
                arr.splice(firstNum,0,secondNum);
                firstNum ++;
            }
        }else if ( command === 'contains'){
            let secondNum = Number(tokens.shift());
            let firstNum = arr.indexOf(secondNum);
            console.log(firstNum);
        }else if ( command === 'remove'){
            arr.splice(firstNum,1);
        }else if ( command === 'shift'){
            let shifted = Number(tokens.shift());
            for ( let currRot =1; currRot <= shifted; currRot++){
                let firstItem = arr.shift();
                arr.push(firstItem);
            }
        }else if ( command === 'sumPairs'){
            let pairedNum = [];
            for ( let i=0; i< arr.length; i+=2){
                if ( i+1 < arr.length){
                    pairedNum.push(arr[i] + arr[i+1]);  
                }else{
                    pairedNum.push(arr[i]);
                }
            }
            arr = pairedNum;
        }else if ( command ==='print'){
            console.log(`[${arr.join(', ')}]`);
        }

        }
    }
manipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])