const division = (a, b) => {
    if (b === 0) {
        console.log(`cant divide by 0`);
        return;
    }
    return a / b
}

const subtraction = (a, b) => {
    return a - b;

}

const addition = (a, b) => {
    return a + b;
}

const multiplication = (a, b) => {
    return a * b;
}

module.exports = { division, multiplication, addition, subtraction }