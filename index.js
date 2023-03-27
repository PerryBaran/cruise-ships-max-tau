class Ship {
    constructor(passengers, itinerary){
        this.passengers = passengers,
        this.itinerary = itinerary,
        this.currentPort = itinerary.ports[0],
        this.previousPort = null
        this.currentPort.addShip(this)
    };

    boardPassengers(newPassengers){
        return this.passengers += newPassengers;
    };
    setSail(){
        const itinerary = this.itinerary
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

        if (currentPortIndex === (itinerary.ports.length - 1)) {
            throw new Error('This ship has reached its final destination')
        };

        this.previousPort = this.currentPort
        this.currentPort = null;
        this.previousPort.removeShip(this);
    };
    dock(){
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this)
    };
};

class Port {
    constructor(name){
        this.name = name
        this.ships = []
    };

    addShip(ship){
        this.ships.unshift(ship);
    }
    removeShip(ship){
        this.ships.shift(ship);
    }
};

class Itinerary {
    constructor(ports){
        this.ports = ports;
    };
};

module.exports = {
    Ship,
    Port,
    Itinerary,
};