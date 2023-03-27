/* globals describe it expect */
const {Itinerary} = require('../index');

describe('Itinerary',() => {
    it('returns an object', () => {
        expect(new Itinerary).toBeInstanceOf(Object);
    });
});

describe('It has a ports property',() => {
    it('contains the ports in the order in which they will be visited', () => {
        const port = jest.fn();
        const port2 = jest.fn();
        const itinerary = new Itinerary([port, port2]);
                
        expect(itinerary.ports).toEqual([port, port2]);
    });
});