class Pokemon {
    constructor(naam, type, level) {
        this.naam = naam;
        this.type = type;
        this.level = level;
    }

    info() {
        console.log(`${this.naam} is een ${this.type}-type Pokemon op level ${this.level}`);
    }

    aanval() {
        console.log("De Pokemon valt aan!");
    }
}

class Charmander extends Pokemon {
    constructor(naam, level) {
        super(naam, "vuur", level);
    }

    aanval() {
        console.log("Charmander gebruikt Ember!");
    }
}

class Squirtle extends Pokemon {
    constructor(naam, level) {
        super(naam, "water", level);
    }

    aanval() {
        console.log("Squirtle gebruikt Water Gun!");
    }
}

class Bulbasaur extends Pokemon {
    constructor(naam, level) {
        super(naam, "gras", level);
    }

    aanval() {
        console.log("Bulbasaur gebruikt Vine Whip!");
    }
}