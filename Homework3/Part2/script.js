function calculateDogAge(age) {
    let dogYears = 7 * age;
    console.log(`Your dogg is ${dogYears} years old in dog years!`);
}
function calculateHumanAgeToDog(age){
    let humanYears = age / 7;
    console.log(`Your dogg is ${humanYears} years old in human years!`);
}

calculateDogAge(12);
calculateHumanAgeToDog(84);