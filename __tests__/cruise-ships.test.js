/* globals describe it expect */
const { describe } = require('node:test');
const {Ship, Port, Itinerary} = require('../index');

describe('constructor', () => {
    it ('can be instantiated', () => {
        const port = new Port('Hong Kong');
        const itinerary = new Itinerary([port]);
        const boaty = new Ship(0, itinerary);

        expect(boaty).toBeInstanceOf(Object);
    })
});

describe('has a passengers property',() => {
    it('returns the number of passengers on board the Ship', () => {
        const port = new Port('Hong Kong');
        const itinerary = new Itinerary([port]);
        const boaty = new Ship(25, itinerary);

        expect(boaty.passengers).toBe(25);
    })
});

describe('has a starting port property',() => {
    it('returns the starting port of the Ship', () => {
        const port = new Port('Hong Kong');
        const itinerary = new Itinerary([port]);
        const boaty = new Ship(0, itinerary);

        expect(boaty.currentPort).toBe(port)
    })
});

describe('has a boardPassengers method',() => {
    it('increases passenger number by a specified amount', () => {
        const port = new Port('Hong Kong');
        const itinerary = new Itinerary([port]);
        const boaty = new Ship(0, itinerary);

        expect(boaty.passengers).toBe(0);
        boaty.boardPassengers(17);

        expect(boaty.passengers).toBe(17);
        boaty.boardPassengers(8);

        expect(boaty.passengers).toBe(25);
    })
});

describe('has a setSail method', () => {
    it('makes the Ship leave the port that it is currently in', () => {
        const startingPort = new Port('Hong Kong');
        const port = new Port('Singapore');
        const itinerary = new Itinerary([startingPort, port]);
        const boaty = new Ship(20, itinerary);
        boaty.setSail()

        expect(boaty.currentPort).toBeFalsy();
        expect(boaty.previousPort).toBe(startingPort);
        expect(boaty.previousPort.ships).not.toContain(boaty);
    })
});

describe('has a dock method', () => {
    it('allows the Ship to dock in a new port', () => {
        const startingPort = new Port('Hong Kong');
        const port = new Port('Singapore');
        const itinerary = new Itinerary([startingPort, port])
        const boaty = new Ship(0, itinerary);
        boaty.setSail();
        boaty.dock();

        expect(boaty.currentPort).toBe(port);
        expect(boaty.currentPort.ships).toContain(boaty);
    })
});

describe('cannot sail beyond last port in itinerary', () => {
    it('returns an error message when ship tries to sail beyond last port', () => {
        const startingPort = new Port('Hong Kong');
        const port = new Port('Singapore');
        const itinerary = new Itinerary([startingPort, port])
        const boaty = new Ship(0, itinerary);

        boaty.setSail();
        boaty.dock();

        expect(() => boaty.setSail()).toThrowError('This ship has reached its final destination')
    })
});

describe('ship gets added to port on instantiation', () => {
    it('adds a ship to the ships property of the port upon instantiation', () => {
        const startingPort = new Port('Hong Kong');
        const port = new Port('Singapore');
        const itinerary = new Itinerary([startingPort, port])
        const boaty = new Ship(0, itinerary);
        
        expect(boaty.currentPort.ships).toContain(boaty)
    })
})