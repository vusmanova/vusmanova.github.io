let height = 25;

if (height >= 25) {
    console.log('We have a big one');
}

height = 3;
if (height >= 25) {
    console.log('We have a big one');
} else {
    console.log('We have a little one');
}

height = 6;

if (height >= 25) {
    console.log('We have a big one');
} else if (height >= 0) {
    console.log('We have a little one');
} else {
    console.log('We have a negative number or invalid number')
}

height = 'big';

switch (height) {
    case 'little':
        console.log('Switch: a little one is smaller than twenty five');
        break;

    case ('big'):
        console.log('Switch: a big one is twenty five or greater');
        break;

    default:
        console.log('We do not know about this one.')
}

window.onload = () => {
    const simpleBranchAction = document.getElementById('simpleBranchAction');
    const simpleBranchDisplay = document.getElementById('simpleBranchDisplay');

    simpleBranchAction.onclick = (event) => {
        let height = 4;
        if (height >= 25) {
            simpleBranchDisplay.textContent = 'We have a big one';
        } else {
            simpleBranchDisplay.textContent = 'We have a little one';
        }
    }
    const simpleIfElseAction = document.getElementById('simpleIfElseAction');
    const simpleIfElseDisplay = document.getElementById('simpleIfElseDisplay');

    simpleIfElseAction.onclick = (event) => {
        let height = 25;
        if (height >= 25) {
            simpleIfElseDisplay.textContent = 'We have a big one';
        } else if (height >= 0) {
            simpleIfElseDisplay.textContent = 'We have a little one';
        } else {
            simpleIfElseDisplay.textContent = 'We have a negative number or invalid number';
        }

    }


    const switchAction = document.getElementById('switchAction');
    const switchDisplay = document.getElementById('switchDisplay');

    switchAction.onclick = (event) => {
        let height = 'big';

        switch (height) {
            case 'little':
                switchDisplay.textContent = 'Switch: a little one is smaller than twenty five';
                break;

            case ('big'):
                switchDisplay.textContent = 'Switch: a big one is twenty five or greater';
                break;

            default:
                switchDisplay.textContent = 'We do not know about this one.';
        }

    }
} 