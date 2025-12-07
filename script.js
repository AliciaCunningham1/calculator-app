function add(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        return "Error";
    }
    return a / b;
}

const calculator = {
    equation: '',
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,

    updateEquati
