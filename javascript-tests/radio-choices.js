window.onload = function () {
    const myForm = document.getElementById('sort-type');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        if (value.toLowerCase() === 'blue') {
            setColor("blueBackground");
            showChoice(value);

        } else {
            setColor("greenBackground");
            showChoice(value);
        }
    });

    let currentClass = null;

    const setColor = (className) => {
        console.log("SET CLASS TO", className);
        var element = document.getElementById("form-section");
        if (currentClass) {
            element.classList.remove(currentClass);
        }
        currentClass = className;
        element.classList.add(className);
    }

}

const showChoice = (value) => {
    console.log(value);
    const userChoice = document.getElementById("user-choice");
    userChoice.textContent = value;
}
