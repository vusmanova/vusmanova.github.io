window.onload = () => {
    
    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
        languageNames: ["JavaScript", "HTML", "CSS", "Java", "C#", "Python", "C/C++"],
        languagePopularity: [
            {
                language: 'JavaScript',
                rank: 1
            },
            {
                language: 'HTML/CSS',
                rank: 2

            },
            {
                language: 'SQL',
                rank: 3
            },
            {
                language: 'Python',
                rank: 4
            },
            {
                language: 'Java',
                rank: 5

            },
            {
                language: 'C/C++',
                rank: 6
            }

        ]

    }; 

    const numbersAction = document.getElementById('numbers-action');
    const languageNamesAction = document.getElementById('tech-language-names-action');
    const techLanguagePopularityAction = document.getElementById('tech-language-popularity-action');
    
    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        for (let number of arrays.numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
        }    
    };
    languageNamesAction.onclick = () => {
        const languageNamesDisplay = document.getElementById('tech-language-names-display');
        for (let numberlanguageName of arrays.languageName) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
     };
    techLanguagePopularityAction.onclick = () => {};
};  
    
    
    const languagesNamesDisplay = document.getElementById('tech-language-names-display');
    const numbersDisplay = document.getElementById('numbers-display');

   
        
    
        numbersAction.onclick = () => {
            const numbersDisplay = document...;
            for (let number of arrays.numbers) {
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(number));
                numbersDisplay.appendChild(li);
            }    
        };
        languageNamesAction.onclick = () => {};
        techLanguagePopularit

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
        arrays.languagePopularity.sort(compareRank);
        // Code omitted here
        
        function compareRank(a, b) {
            const rankA = a.rank;
            const rankB = b.rank;
        
            let comparison = 0;
            if (rankA > rankB) {
                comparison = 1;
            } else if (rankA < rankB) {
                comparison = -1;
            }
            return comparison;
        }
    }
}