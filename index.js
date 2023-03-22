class Ship {
    constructor(passengers, itinerary){
        this.passengers = passengers,
        this.itinerary = itinerary,
        this.currentPort = itinerary.ports[0],
        this.previousPort = null
    }

    boardPassengers(newPassengers){
        return this.passengers += newPassengers;
    }
    setSail(){
        const itinerary = this.itinerary
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

        if (currentPortIndex === (itinerary.ports.length - 1)) {
            throw new Error('This ship has reached its final destination')
        }

        this.previousPort = this.currentPort
        this.currentPort = null;
    }
    dock(){
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentPort = itinerary.ports[previousPortIndex + 1];
    }
};

class Port {
    constructor(name){
        this.name = name
    }
};

class Itinerary {
    constructor(ports){
        this.ports = ports;
    }
}

module.exports = {
    Ship,
    Port,
    Itinerary,
}