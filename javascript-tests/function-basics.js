window.onload = () => {

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };

    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
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



    window.onload = () => {

        const functionCalls = document.getElementById('functionCallsAction');
        const addToListAction = document.getElementById('addToListAction');

        console.log('foo');
        functionCalls.onclick = () => {
            // Both these functions get their display control
            simpleFunction();
        };

        addToListAction.onclick = () => {
            const listDisplay = document.getElementById('listDisplay');
            const nameDisplay = document.getElementById('nameDisplay');

            const data = nameDisplay.value;
            elfCode.appendToList(listDisplay, data);
        }

        function simpleFunction() {
            const displayText = "Functions should consist of statements designed to perform a single task.";
            console.log(displayText);

            const simpleFunctionDisplay = document.getElementById("simpleFunctionDisplay");
            simpleFunctionDisplay.textContent = displayText;
        }

    };

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