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
    player.push(allCharacters[charID]);
    imgPlayer[charID-1] = document.getElementById(charID);
    imgPlayer[charID-1].setAttribute('onclick', '');
    imgPlayer[charID-1].classList.add('selection');
    let characterData = document.getElementById(
        'data' + selectedCharacters
    );
    characterData.innerHTML = `
        ${player[selectedCharacters-1].name}<br>
        Type: ${player[selectedCharacters-1].type}<br>
        maxSpeed (m/s): ${player[selectedCharacters-1].maxSpeed}<br>
        Weight (kg): ${player[selectedCharacters-1].weight}<br>
        `;
    selectedCharacters++;
    //When selection is complete, show Ready screen after 3 second
    if (selectedCharacters > 4) {
        setTimeout(() => {
            changeScreen(3);
        }, 3000);
    }
};

// 5 seconds Ready screen and then show Game screen
const readyScreen = () => {
    setTimeout(() => {
        changeScreen(5);
    }, 5000);
    // start game logic
    setTimeout(() => {
        // game();
    }, 5000);
};