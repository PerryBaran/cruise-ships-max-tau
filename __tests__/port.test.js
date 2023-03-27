/* globals describe it expect */
const Port = require('../src/port');

describe('Port', () => {
    describe('Has a port and a ship', () => {
        let port;
        let boaty;

        beforeEach(() => {
            port = new Port('Hong Kong');
            boaty = jest.fn();
        });

        it('returns an object', () => {
            expect(new Port()).toBeInstanceOf(Object)
        });

        it('returns the name of the port', () => {
            expect(port.name).toBe('Hong Kong')
        });

        it('when a ship docks at this port it is added to the ships property', () => {

            port.addShip(boaty);

            expect(port.ships).toContain(boaty)
        });

        it('when a ship sets sail from this port it is removed from the ships property', () => {

            port.addShip(boaty);
            port.removeShip(boaty);

            expect(port.ships).not.toContain(boaty)
        });
    });    
});