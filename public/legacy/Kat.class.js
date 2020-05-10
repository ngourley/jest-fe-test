class Kat {
    constructor(name) {
        this.name = name;
        this.color = 'red';
    }
    getName() {
        return this.name;
    }
    getColor() {
        return this.color;
    }
}

window.Kat = Kat;