const Ship = require('./index');

describe('constructor', () => {
    it ('returns an object', () => {
        expect(new Ship('Boaty')).toBeInstanceOf(Object);
    })
});

describe('has a passengers property',() => {
    it('returns the number of passengers on board the Ship', () => {
        const boaty = new Ship(25);

        expect(boaty.passengers).toBe(25)
    })
});

describe('has a starting port property',() => {
    it('returns the starting port of the Ship', () => {
        const boaty = new Ship(0, 'Hong Kong');

        expect(boaty.startingPort).toBe('Hong Kong')
    })
});

describe('has a boardPassengers method',() => {
    it('increases passenger number by a specified amount', () => {
        const boaty = new Ship(0, 'Hong Kong');

        expect(boaty.passengers).toBe(0)
        boaty.boardPassengers(17);

        expect(boaty.passengers).toBe(17)
        boaty.boardPassengers(8);

        expect(boaty.passengers).toBe(25)
    })
});