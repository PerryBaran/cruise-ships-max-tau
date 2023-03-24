/* globals describe it expect */
const { describe } = require('node:test');
const {Ship, Port, Itinerary} = require('../index');

describe('Ship', () => {
    describe('Has ports and an itinerary', () => {
        let port;
        let port2;
        let itinerary;
        let boaty;

        beforeEach(() => {
            port = new Port('Hong Kong');
            port2 = new Port('Singapore')
            itinerary = new Itinerary([port, port2]);
            boaty = new Ship(25, itinerary);
        })

        it ('can be instantiated', () => {

            expect(boaty).toBeInstanceOf(Object);
        })

        it('returns the number of passengers on board the Ship', () => {

            expect(boaty.passengers).toBe(25);
        })

        it('returns the starting port of the Ship', () => {
        
            expect(boaty.currentPort).toBe(port)
        })

        it('increases passenger number by a specified amount', () => {
        
            expect(boaty.passengers).toBe(25);
            boaty.boardPassengers(17);
        
            expect(boaty.passengers).toBe(42);
            boaty.boardPassengers(8);
        
            expect(boaty.passengers).toBe(50);
        })       
        
        it('makes the Ship leave the port that it is currently in', () => {

            boaty.setSail()
        
            expect(boaty.currentPort).toBeFalsy();
            expect(boaty.previousPort).toBe(port);
            expect(boaty.previousPort.ships).not.toContain(boaty);
        })     
        
        it('allows the Ship to dock in a new port', () => {

            boaty.setSail();
            boaty.dock();
        
            expect(boaty.currentPort).toBe(port2);
            expect(boaty.currentPort.ships).toContain(boaty);
        })        
        
        it('returns an error message when ship tries to sail beyond last port', () => {
        
            boaty.setSail();
            boaty.dock();
        
            expect(() => boaty.setSail()).toThrowError('This ship has reached its final destination')
        })

        it('adds a ship to the ships property of the port upon instantiation', () => {

            expect(boaty.currentPort.ships).toContain(boaty)
        })
    })    
});





