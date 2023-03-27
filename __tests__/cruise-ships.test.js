/* globals describe it expect */
const { describe } = require('node:test');
const Ship = require('../src/ship');

describe('Ship', () => {
    describe('Has ports and an itinerary', () => {
        let port;
        let port2;
        let itinerary;
        let boaty;

        beforeEach(() => {
            port = { name: 'Hong Kong', ships: [], addShip: jest.fn(), removeShip: jest.fn() };
            port2 = { name: 'Hong Kong', ships: [], addShip: jest.fn(), removeShip: jest.fn() };
            itinerary = { ports: [port, port2]};
            boaty = new Ship(25, itinerary);
        });

        it ('can be instantiated', () => {

            expect(boaty).toBeInstanceOf(Object);
        });

        it('returns the number of passengers on board the Ship', () => {

            expect(boaty.passengers).toBe(25);
        });

        it('returns the starting port of the Ship', () => {
        
            expect(boaty.currentPort).toBe(port);
        });

        it('increases passenger number by a specified amount', () => {
        
            expect(boaty.passengers).toBe(25);
            boaty.boardPassengers(17);
        
            expect(boaty.passengers).toBe(42);
            boaty.boardPassengers(8);
        
            expect(boaty.passengers).toBe(50);
        });    
        
        it('can set sail', () => {

            boaty.setSail()
        
            expect(boaty.currentPort).toBeFalsy();
            expect(boaty.previousPort).toBe(port);
            expect(port.removeShip).toHaveBeenCalledWith(boaty);
        });   
        
        it('can dock at a different port', () => {

            boaty.setSail();
            boaty.dock();
        
            expect(boaty.currentPort).toBe(port2);
            expect(port2.addShip).toHaveBeenCalledWith(boaty);
        });
        
        it('returns an error message when ship tries to sail beyond last port', () => {
        
            boaty.setSail();
            boaty.dock();
        
            expect(() => boaty.setSail()).toThrowError('This ship has reached its final destination')
        });

        it('gets added to port on instantiation', () => {

            expect(port.addShip).toHaveBeenCalledWith(boaty)
        });
    });
});





