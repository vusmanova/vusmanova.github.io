window.onload = () => {

    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionParametersDisplay = document.getElementById('functionParametersDisplay');
    const functionReturnDisplay = document.getElementById('functionReturnDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

    functionCallsAction.onclick = simpleFunction;

    function simpleFunction() {
        console.log("Functions should consist of statements designed to perform a single task.");
        simpleFunctionDisplay.textContent = "Functions should consist of statements designed to perform a single task.";

    }

    function functionParameters() {
        console.log("Many functions take parameters.");
        simpleFunctionParameters.textContent = "Many functions take parameters.";

    }

    function functionReturn() {
        console.log("Many functions return values.");
        simpleFunctionReturn.textContent = "Many functions return values.";

    }


    // newButton.onclick = function() {
    //   asdf
    //}



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