const CIRCUIT_LENGTH = 1000;

const game = () => {
    changeScreen(4);
    for(let i=1; i<=player.length; i++) {
        addRacerImage(i);
    }

    // Keys
    setupInputs();
}

const addRacerImage = (num) => {
    console.log(`#racer${num}-img`);
    const charImg = document.querySelector(`#racer${num}-img`);
    let elem = document.createElement("img");
    elem.src = `${player[num-1].img}`;
    elem.id = `player${num}-img`;
    elem.alt = `${player[num-1].name}`;
    charImg.appendChild(elem);
}

// Input variables
let upKey = undefined;
let rightKey = undefined;
let downKey = undefined;
let leftKey = undefined;

const setupInputs = () => {
    document.addEventListener("keydown", (event) => {
        if (event.key === '1') {
            console.log('1-keydown');
            upKey = true;
            move(document.querySelector(`#player1-img`), event.key);
        } else if (event.key === '2') {
            console.log('1-keydown');
            rightKey = true;
            move(document.querySelector(`#player2-img`), event.key);
        } else if (event.key === '3') {
            console.log('1-keydown');
            downKey = true;
            move(document.querySelector(`#player3-img`), event.key);
        } else if (event.key === '4') {
            leftKey = true;
            move(document.querySelector(`#player4-img`), event.key);
        }
    });
    document.addEventListener("keyup", (event) => {
        if (event.key === '1') {
            console.log('1-keyup');
            upKey = false;
        } else if (event.key === '2') {
            console.log('2-keyup');
            rightKey = false;
        } else if (event.key === '3') {
            console.log('3-keyup');
            downKey = false;
        } else if (event.key === '4') {
            console.log('4-keyup');
            leftKey = false;
        }
    });
};

const move = (playerImage, indexPlayer) => {
    player[indexPlayer-1].distance += 400;
    let num = 25 - player[indexPlayer-1].distance / CIRCUIT_LENGTH;
    playerImage.style.marginTop = `${num}em`;
    console.log('num: ', num)

    if(num <= 0) {
        console.log('entra al if');
        winnerScreen(indexPlayer, player[indexPlayer-1].name);
    }
}

const winnerScreen = (playerNumber, playerName) => {
    changeScreen(5);
    let winnerScreen = document.querySelector('.screen5-restart');
    winnerScreen.insertAdjacentHTML('afterbegin', `<h1>Player ${playerNumber} wins!!!<h1><h2>${playerName} is faster than light!!`);

}