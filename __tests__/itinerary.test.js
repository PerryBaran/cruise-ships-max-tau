/* globals describe it expect */
const {Port, Itinerary} = require('../index');

describe('Itinerary',() => {
    it('returns an object', () => {
        expect(new Itinerary).toBeInstanceOf(Object);
    });
});

describe('It has a ports property',() => {
    it('contains the ports in the order in which they will be visited', () => {
        const startingPort = new Port('Hong Kong')
        const firstStop = new Port('Singapore')
        const asiaTrip = new Itinerary([startingPort, firstStop]);
                
        expect(asiaTrip.ports).toEqual([startingPort, firstStop]);
    });
});