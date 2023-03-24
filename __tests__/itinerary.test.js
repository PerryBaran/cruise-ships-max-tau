/* globals describe it expect */
const {Port, Itinerary} = require('../index');

describe('Itinerary',() => {
    it('returns an object', () => {
        expect(new Itinerary).toBeInstanceOf(Object);
    });
});

describe('It has a ports property',() => {
    it('contains the ports in the order in which they will be visited', () => {
        const port = jest.fn();
        const port2 = jest.fn();
        const asiaTrip = new Itinerary([port, port2]);
                
        expect(asiaTrip.ports).toEqual([port, port2]);
    });
});