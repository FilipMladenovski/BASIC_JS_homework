function printNumbers() {

    let numbers = [2, 4, 5];

    let numberLists = document.querySelector("#printed-numbers");
    let sumOfNumbers = document.querySelector("#sum");
    let sum = 0;

    for (let number of numbers) {
        numberLists.innerHTML += `<li>${number}</li>`
        sum += number;
        sumOfNumbers.innerHTML = `<h3> Sum: ${sum} </h3>`;
    }
}
printNumbers()