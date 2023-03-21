/* globals describe it expect */
const {Ship, Port} = require('../index');

describe('constructor', () => {
    it ('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
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
        const port = new Port('Kuala Lumpur');
        const steamboat = new Ship(0, port.name);

        expect(boaty.currentPort).toBe('Hong Kong');
        expect(steamboat.currentPort).toBe('Kuala Lumpur')
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

describe('has a setSail method', () => {
    it('makes the Ship leave the port that it is currently in', () => {
        const boaty = new Ship(20, 'Hong Kong');
        boaty.setSail()

        expect(boaty.startingPort).toBeFalsy();
    })
});

