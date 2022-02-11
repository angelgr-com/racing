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

// Screen2 - Character selection
let imgPlayer = [];
let selectedCharacters = 1;

const selectCharacter = (charID) => {
    if (selectedCharacters <= 4) {
        player.push(allCharacters[charID]);
        imgPlayer[charID-1] = document.getElementById(charID);
        imgPlayer[charID-1].setAttribute('onclick', '');
        imgPlayer[charID-1].classList.add('selection');
        document.querySelector(`.character${charID}`).classList.add('selection');
        let characterData = document.getElementById(
            'data' + selectedCharacters
        );
        characterData.innerHTML = `
            <h2>${player[selectedCharacters-1].name}</h2><br>
            <b>Type:</b> ${player[selectedCharacters-1].type}<br>
            <b>maxSpeed (m/s):</b> ${player[selectedCharacters-1].maxSpeed}<br>
            <b>Weight (kg):</b> ${player[selectedCharacters-1].weight}<br>
            `;
        selectedCharacters++;
    }
    //When selection is complete, show Ready screen after 3 second
    if (selectedCharacters > 4) {
        setTimeout(() => {
            readyScreen();
        }, 2000);
    }
};

// 5 seconds Ready screen and then show Game screen
const readyScreen = () => {
        changeScreen(3);
        showSelectedCharacters();
};

// Screen3 - Ready

const showSelectedCharacters = () => {
    for(let i=1; i<=player.length; i++) {
        addCharacterImage(i);
        addCharacterProperties(i);
    }
};

const addCharacterImage = (num) => {
    console.log(`char${num}-img`);
    const charImg = document.querySelector(`.sel${num}-img`);
    let elem = document.createElement("img");
    elem.src = `${player[num-1].img}`;
    elem.alt = `${player[num-1].name}`;
    charImg.appendChild(elem);
}
const addCharacterProperties = (num) => {
    const charInfo = document.querySelector(`.sel${num}-info`);
    const info = `
        <h2>${player[num-1].name}</h2><br>
        <strong>Type:</strong> ${player[num-1].type}<br>
        <strong>maxSpeed (m/s):</strong> ${player[num-1].maxSpeed}<br>
        <strong>Weight (kg):</strong> ${player[num-1].weight}<br><br>
        <h2 style='display: inline'>Press number</h2><h1 style='display: inline'>${num}</h1><h2 style='display: inline'> to RUN</h2>
    `;
    charInfo.innerHTML = info;
}
    
const getCharacterHTML = () => {
    let html = '';
    for(let i=1; i<=player.length; i++){
        html += `<div class="char` + i + `">`;
        html += `<div class="char` + i + `-img"></div>`;
        html += `<div class="char` + i + `-info">`;
        html += `<div id="data`+ i + `" class="CharacterData"></div></div></div>`;
    }
    return html;
};

// Screen 5 - Restart

const winnerScreen = (playerNumber, playerName) => {
    changeScreen(5);
    let winnerScreen = document.querySelector('.screen5-restart');
    winnerScreen.insertAdjacentHTML('afterbegin', `<h1><span id="h1-w1">Player</span> ${playerNumber} <span id="h1-w1">wins</span>!!!</h1><h2>${playerName} is faster than light!!</h2><h3>Click to restart game</h3>`);
}