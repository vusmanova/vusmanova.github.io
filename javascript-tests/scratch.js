const firstNames = ['Bill', 'Sue', 'Tom', 'Ellen'];

function getFirstName (currentIndex) {
    return firstNames[currentIndex];
}

function getValueFromArray (theArray, index) {
    return theArray[index];
}

function add(a, b) {
    return a+b;
}

const multiply = (a, b) => {
    return a*b;
}

const subtract = function(a, b) {
    return a-b;
}


const firstName= getFirstName(3);
console.log(firstName);

const arrayItem = getValueFromArray (firstNames, 2);
console.log(arrayItem);

let sum = add(2, 3);
console.log (sum);

const total = add(12, 33);
console.log (total);

const result = multiply(3, 5);
console.log (result);

const value = subtract(10, 5);
console.log (value);

