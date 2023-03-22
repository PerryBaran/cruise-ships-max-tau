/* globals describe it expect */
const {Port,} = require('../index');

describe('Port', () => {
    it('returns an object', () => {
        expect(new Port()).toBeInstanceOf(Object)
    })
});

describe('Has a name property', () => {
    it('returns the name of the port', () => {
        const secondStop = new Port('Kuala Lumpur')

        expect(secondStop.name).toBe('Kuala Lumpur')
    })
});

describe('addShip', () => {
    it('when a ship docks at this port it is added to the ships property', () => {
        const port1 = new Port('Hong Kong');
        const boaty = {};
        port1.addShip(boaty);

        expect(port1.ships).toContain(boaty)
    })
});

describe('removeShip', () => {
    it('when a ship sets sail from this port it is removed from the ships property', () => {
        const port1 = new Port('Hong Kong');
        const boaty = {};
        port1.addShip(boaty);
        port1.removeShip(boaty);

        expect(port1.ships).not.toContain(boaty)
    })
});