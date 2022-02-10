'use strict';

let player = [];
let winner = "";

class Character {
    constructor(name, type, maxSpeed, weight, braking) {
        this.name = name;
        this.type = type;
        this.maxSpeed = maxSpeed;
        this.weight = weight;
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

let character1 = new Character("Bluebat","Hero",100,35,80);
let character2 = new Character("Bus","Vehicle",50,20,60);
let character3 = new Character("Car","Vehicle",70,2,70);
let character4 = new Character("Flappy Box","Animal",60,4,50);
let character5 = new Character("Green Monster","Enemy",90,60,80);
let character6 = new Character("Marshmallow","Robot",55,15,60);
let character7 = new Character("Spaceship","Robot",75,10,70);
let character8 = new Character("Ufo","Robot",65,6,50);

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