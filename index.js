class Ship {
    constructor(passengers, currentPort){
        this.passengers = passengers,
        this.currentPort = currentPort
    }

    boardPassengers(newPassengers){
        return this.passengers += newPassengers;
    }
    setSail(){
        return this.currentPort = null
    }
    dock(newPort){
        this.currentPort = newPort
    }
};

class Port {
    constructor(name){
        this.name = name
    }
}

module.exports = {
    Ship,
    Port,
}