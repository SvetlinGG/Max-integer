function search(arr1, arr2){

    let numElement = arr2[0];
    let deletedElement = arr2[1];
    let searchingNum = arr2[2];
    let occurs = 0;
    let sortedArr = arr1.slice(0,numElement);
    sortedArr.splice(0,deletedElement);
    for ( let num of sortedArr){
        if ( num === searchingNum){
            occurs ++;
        }
    }
    console.log(`Number ${searchingNum} occurs ${occurs} times.`);

}
search([5, 2, 3, 4, 1, 6],[5, 2, 3]);
search([7, 1, 5, 8, 2, 7],[3, 1, 5]);