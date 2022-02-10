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

// Screen2 - Character selection
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
            readyScreen(3);
        }, 3000);
    }
};

// 5 seconds Ready screen and then show Game screen
const readyScreen = () => {
    setTimeout(() => {
        changeScreen(3);
        showSelectedCharacters();
    }, 2000);
    // start game logic
    setTimeout(() => {
        // game();
    }, 5000);
};

// Screen3 - Ready

const showSelectedCharacters = () => {
    // const screen3Ready = document.querySelector('.screen3-ready');
    // screen3Ready.insertAdjacentHTML('afterbegin', getCharacterHTML());
    for(let i=1; i<=player.length; i++) {
        addCharacterProperties(i);
    }
};

const addCharacterProperties = (num) => {
    console.log(`char${num}-img`);
    const charImg = document.querySelector(`#sel${num}-img`);
    // console.log('charImg: ', charImg);
    let elem = document.createElement("img");
    elem.src = `${player[num-1].img}`;
    elem.alt = `${player[num-1].name}`;
    // document.body.appendChild(img);
    // const img = `<img src="${player[num-1].img}" alt="${player[num-1].name}">`;
    // console.log(img);
    // charImg.insertAdjacentHTML('beforeend', img);
    charImg.appendChild(elem);

    const charInfo = document.querySelector(`#sel${num}-info`);
    const info = `
        ${player[num-1].name}<br>
        Type: ${player[num-1].type}<br>
        maxSpeed (m/s): ${player[num-1].maxSpeed}<br>
        Weight (kg): ${player[num-1].weight}<br>
        <h2>To RUN: press number ${num}</h2>
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

