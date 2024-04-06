function guests(input){
    let guestCount = Number(input[0]);
    let budget = Number(input[1]);
    let cakePrice = 4;
    let eggPrice = 0.45;
    let totalCake = Math.ceil(guestCount/3)*cakePrice;
    let cakeCount = Math.ceil(guestCount/3);
    let totalEggs = guestCount*(2*eggPrice);
    let eggsCount = guestCount*2;
    let sum = totalCake + totalEggs;

    if ( budget >= sum){
        let moneyLeft = budget - sum;
        console.log(`Lyubo bought ${cakeCount} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
    }else if ( sum > budget){
        let moneyNeeded = sum - budget;
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${moneyNeeded.toFixed(2)} lv. more.`);
    }


}
guests(['10','35']);
guests(['9','12']);
