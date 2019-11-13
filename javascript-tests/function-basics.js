window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');
            
    functionCallsAction.onclick = simpleFunction;

    function simpleFunction() {
    console.log("Functions should consist of statements designed to perform a single task.");
    simpleFunctionDisplay.textContent = "simple";

    }
    


function functionParameters(value) {
    console.log(value);
}

function functionReturn() {
    return "Many functions return values.";
}

function add(a, b) {
        return a + b;
}

//simpleFunction();

functionParameters("Many functions take parameters.");

const returnValue = functionReturn();
console.log(returnValue);

const result = add(2, 3);
console.log(result); 
}