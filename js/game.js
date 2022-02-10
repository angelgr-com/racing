const CIRCUIT_LENGTH = 3000;

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
    elem.alt = `${player[num-1].name}`;
    charImg.appendChild(elem);
}

// Input variables
let upKey = undefined;
let rightKey = undefined;
let downKey = undefined;
let leftKey = undefined;
let p1 = document.querySelector(`#racer1-img`);
let p2 = document.querySelector(`#racer2-img`);
let p3 = document.querySelector(`#racer3-img`);
let p4 = document.querySelector(`#racer4-img`);

const setupInputs = () => {
    document.addEventListener("keydown", (event) => {
        if (event.key === '1') {
            console.log('1-keydown');
            upKey = true;
            move(p1, event.key);
        } else if (event.key === '2') {
            console.log('1-keydown');
            rightKey = true;
            move(p2, event.key);
        } else if (event.key === '3') {
            console.log('1-keydown');
            downKey = true;
            move(p3, event.key);
        } else if (event.key === '4') {
            leftKey = true;
            move(p4, event.key);
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

const move = (playerImage, playerNumber) => {
    player[playerNumber].distance += -100;
    let num = (25 - player[playerNumber].distance) / CIRCUIT_LENGTH;
    console.log('num: ', num);
    playerImage.style.marginTop = '${num}em';
}