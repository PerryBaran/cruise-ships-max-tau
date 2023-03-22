/* globals describe it expect */
const {Port} = require('../index');

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
