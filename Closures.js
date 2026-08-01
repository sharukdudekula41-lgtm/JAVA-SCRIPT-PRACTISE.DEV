function bankAccount() {
    let balance = 10000;

    return function() {
        console.log(balance);
    };
}
let checkBalnce = bankAccount();
checkBalnce();

