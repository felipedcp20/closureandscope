function moneyBox (coins){
    var savecoins = 0;

    function countcoins (coins){
        console.log(`${savecoins}`)
        return savecoins +=coins;
       
    return countcoins;
};

let mymoneybox = moneyBox();

