let player = [];
let winner = "";

class Character {
    constructor(name, type, maxSpeed, weight, img) {
        this.name = name;
        this.type = type;
        this.maxSpeed = maxSpeed;
        this.weight = weight;
        this.img = img;
        this.speed = 0;
        this.distance = 0;
    }

    speedUp() {
        return this.speed += 30;
    }

    brake() {
        return this.speed = 0;
    }
};

let character1 = new Character(
    "Bluebat","Hero",100,35, "assets/img/bluebat.gif");
let character2 = new Character(
    "Bus","Vehicle",50,20, "assets/img/bus01.gif");
let character3 = new Character(
    "Car","Vehicle",70,2, "assets/img/car01.gif");
let character4 = new Character(
    "Flappy Box","Animal",60,4, "assets/img/flappy-box.gif");
let character5 = new Character(
    "Green Monster","Enemy",90,60, "assets/img/green-monster.gif");
let character6 = new Character(
    "Marshmallow","Robot",55,15, "assets/img/marshmallow.gif");
let character7 = new Character(
    "Spaceship","Robot",75,10, "assets/img/spaceship01.png");
let character8 = new Character(
    "Ufo","Robot",65,6, "assets/img/ufo.png");

let allCharacters = {
    1 : character1,
    2 : character2,
    3 : character3,
    4 : character4,
    5 : character5,
    6 : character6,
    7 : character7,
    8 : character8,
}