function checkType(input) {
    let type = typeof input;
    console.log(`The type of the input is: ${type}`);
    return type;
}

checkType(false);
checkType(30);
checkType("Filip");
checkType();