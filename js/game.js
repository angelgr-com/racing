const game = () => {
    changeScreen(4);
    for(let i=1; i<=player.length; i++) {
        console.log('imagenes de carrera');
        addRacerImage(i);
    }
}

const addRacerImage = (num) => {
    console.log(`#racer${num}-img`);
    const charImg = document.querySelector(`#racer${num}-img`);
    let elem = document.createElement("img");
    elem.src = `${player[num-1].img}`;
    elem.alt = `${player[num-1].name}`;
    charImg.appendChild(elem);
}