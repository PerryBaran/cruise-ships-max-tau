(function exportController() {

    class Controller {
        constructor(ship){
            this.initialiseSea();

            this.ship = ship;

            this.addPort();

            this.headsUp();
            
            let sailButtonClicked = false;

            document.querySelector('#sailbutton').addEventListener('click', () => {
                if (!sailButtonClicked) {
                    this.setSail()
                    document.querySelector('#sailbutton').disabled = true;
                    this.playAudio('./music/seaside-piano.mp3')
                    sailButtonClicked = true;
                } else {
                    this.setSail()
                    document.querySelector('#sailbutton').disabled = true;
                }
            });
        }
        
        initialiseSea() {
            const backgrounds = [
                './images/water0.png',
                './images/water1.png',
            ];
            let backgroundIndex = 0;
            window.setInterval(() => {
                document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
                backgroundIndex += 1;
            }, 1000)
        }
        renderPorts(ports) {
            const portsElement = document.querySelector('#ports');
            portsElement.style.width = '0px';
            while (portsElement.firstChild) {
                portsElement.removeChild(portsElement.firstChild)
            }
            ports.forEach((port, index) => {
                const newPortElement = document.createElement('div');
                newPortElement.className = 'port';
                portsElement.appendChild(newPortElement);
                newPortElement.dataset.portName = port.name;
                newPortElement.dataset.portIndex = index;
                const portsElementWidth = parseInt(portsElement.style.width, 10);
                portsElement.style.width = `${portsElementWidth + 256}px`;
            })
        }
        renderShip() {
            const ship = this.ship;
            const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const portElement = document.querySelector(`[data-port-index = '${shipPortIndex}']`);
            const shipElement = document.querySelector('#ship');
            shipElement.style.top = `${portElement.offsetTop + 28}px`
            shipElement.style.left = `${portElement.offsetLeft - 40}px`
        }
        setSail() {
            const ship = this.ship;
            const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const nextPortIndex = currentPortIndex +1;
            const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

            if (!nextPortElement) {
                this.renderMessage('You have reached your final destination.');
                } else {
            this.renderMessage(`Now departing ${ship.currentPort.name}`);
            const shipElement = document.querySelector('#ship');
            const sailInterval = setInterval(() => {
                const shipLeft = parseInt(shipElement.style.left, 10);
                if (shipLeft === (nextPortElement.offsetLeft - 40)) {
                    ship.setSail();
                    ship.dock();
                    document.querySelector('#sailbutton').disabled = false;
                                        
                    this.renderMessage(`Docked in ${ship.currentPort.name}`);
                    this.headsUp();

                    clearInterval(sailInterval);
                } 
                shipElement.style.left = `${shipLeft + 1}px`;
            },10);
            }            
        }
        renderMessage(message) {
            const messageElement = document.createElement('div');
            messageElement.id = 'message';
            messageElement.innerHTML = message;

            const viewport = document.querySelector('#viewport');
            viewport.appendChild(messageElement);

            setTimeout(() => {
                viewport.removeChild(messageElement);
            }, 2000);
        }
        headsUp() {
            const ship = this.ship;
            const headsUpInfo = document.getElementById('headsUp');
            const currentIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const nextIndex = currentIndex + 1;
            if (!ship.currentPort) {
                headsUpInfo.innerHTML = 'There are no ports in your itinerary'
            } else if (!ship.itinerary.ports[nextIndex]) {
                headsUpInfo.innerHTML = `Current Port: ${ship.currentPort.name} </br> This is the final stop on your voyage.`;
            } else {
                headsUpInfo.innerHTML = `Current Port: ${ship.currentPort.name} </br> Next Port: ${ship.itinerary.ports[nextIndex].name}`;
            }
        }
        addPort() {
            document.querySelector('#portForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const userInput = document.querySelector('#port-name')
                const port = new Port(userInput.value)
                const shipItinerary = this.ship.itinerary.ports
                 
                if (shipItinerary.find(destination => destination.name === userInput.value)) {
                    alert('This is already a stop on your voyage')
                } else if (userInput.value === '') {
                    alert('Please enter a valid destination name')
                } else {
                shipItinerary.push(port)
                this.renderPorts(shipItinerary)
                this.ship.dock()
                this.renderShip()
                this.headsUp()
                }
                userInput.value = ''
                });
        }
        playAudio(url) {
            new Audio(url).play();
        }
    }
    


    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }
} ());