'use strict';

// Restart game
const cleanGame = () => {
    players = [];
    winner = '';
};

// SPA change screen
const changeScreen = (number) => {
    let screens = [
        'screen1',
        'screen2',
        'screen3',
        'screen4',
        'screen5'
    ];
    let next = 'screen' + number;

    // Removes next screen from the array
    screens = screens.filter((value) => !next.includes(value));

    // Show next screen and hide the rest
    document.getElementById(next).style.display = 'block';
    for (let element of screens) {
        document.getElementById(element).style.display = 'none';
    }
};

// Character selection
let imgPlayer = [];
let selectedCharacters = 1;

const selectCharacter = (charID) => {
    let num;
    // Player 1 selects two characters
    selectedCharacters % 2 != 0 ? (num = 0) : (num = 1);
    player.push(allCharacters[charID]);
    imgPlayer[charID] = document.getElementById(charID);
    imgPlayer[charID].setAttribute('onclick', '');
    imgPlayer[charID].classList.add('selection');
    let characterData = document.getElementById(
        'data' + selectedCharacters
    );
    characterData.innerHTML = `
    ${player[num].name}<br>
    Type: ${player[num].type}<br>
    maxSpeed (m/s): ${player[num].maxSpeed}<br>
    Weight (kg): ${player[num].weight}<br>
    `;
    selectedCharacters++;
    //When selection is complete, show Ready screen after 3 second
    if (selectedCharacters > 4) {
        setTimeout(() => {
            changeScreen(4);
        }, 3000);
        readyScreen();
    }
};