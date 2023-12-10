let accountBalance = 10000;
function withdrawCash(amount) {
    if (amount > accountBalance) {
        return "Not enough money !!!";
    }
    accountBalance -= amount;
    return {
        amountWithdrawn: amount,
        remainingBalance: accountBalance
    };
}

let userInput = prompt("Enter the amount to withdraw:");
let withdrawalAmount = parseInt(userInput);
if (!isNaN(withdrawalAmount)) {
    let result = withdrawCash(withdrawalAmount);
    if (typeof result === 'string') {
        console.log(result);
    } else {
        console.log(`Amount withdrawn: ${result.amountWithdrawn}`);
        console.log(`Remaining balance: ${result.remainingBalance}`);
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}
