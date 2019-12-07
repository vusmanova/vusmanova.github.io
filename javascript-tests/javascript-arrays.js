window.onload = () => {

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }
    const numbersAction = document.getElementById('numbers-action');
    const numbersDisplay = document.getElementById('numbers-display');

    const languagesAction = document.getElementById('languages-action');
    const languagesDisplay = document.getElementById('languages-display');

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
        languages: ["JavaScript", "HTML", "CSS", "Java", "C#", "Python", "C/C++"]
        languagePopularity: [

        ]
    };

    arrays.numbers.sort((a, b) => a - b);
    arrays.languages.sort((a, b) => a - b);
    
    numbersAction.onclick = () => {
        for (let number of arrays.numbers) {
            console.log(number);
            elfCode.appendToList(numbersDisplay, number);
        }

    }

    languagesAction.onclick = () => {
        for (let language of arrays.languages) {
            console.log(language);
            elfCode.appendToList(languagesDisplay, language);
        }

    }
}