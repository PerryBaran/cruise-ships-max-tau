# Cruise Ships :passenger_ship::passenger_ship::passenger_ship::passenger_ship::passenger_ship:
---

Hi! I'm using this project to help improve my Object Oriented Programming and Test Driven Development skills, as well as to recap on some HTML and CSS knowledge. 

## What will it do?

Cruise Ships consists of 4 constructors (Ship, Port, Itinerary and Controller).

* Ship contains a specified amount of passengers and an itinerary, both passed to it as arguments.
* Port has a name property and a ships property. The name is passed to it as an argument.
* Itinerary has a ports property, passed to it as an argument.
* Controller has a ship property, passed to it as an argument.
* Ship is able to take on new passengers using `boardPassengers()`, sail from one port to another using `setSail()` and dock in a new port using `dock()`.
* When a ship docks in a new port it is added to that port's ships property.
* When a ship sets sail from a port it is removed from that port's ships property.
* After setting sail, the ship will dock at the next port in the itinerary instance.
* All of this is made accessible via an HTML and CSS GUI.


## Installation


* Fork this repository
* Clone your forked repository
* Run `npm i` to download relevant dependencies and devDependencies

## How to use it

Add as many ports as you would like to your Itinerary. 
Declare a new instance of Ship with any passengers that you would like to take with you on your voyage and your new Itinerary passed as arguments.
Using the GUI, click on the 'Set Sail!' button to move the ship from one port to another. A message will appear telling you which port you have left. When you dock at a new port, another message will appear letting you know which port you have docked in.
Once you reach the last port on your itinerary, you will not be able to sail any further!
