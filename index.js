class Ship {
    constructor(passengers, startingPort){
        this.passengers = passengers,
        this.startingPort = startingPort
    }
    boardPassengers(newPassengers){
        return this.passengers += newPassengers;
    }
};

module.exports = Ship