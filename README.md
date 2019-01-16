# elevator-challenge
A programming challenge: Design an elevator system 


## Design
My approach to this problem, is going to be a design with a controller that interacts between the elevators and facilitates all interactions from floor levels requests.

Because of feature #6 in the challenge, I am designing this simulation with the idea that the elevators themselves have no controls. The idea is that people will make requests from any floor, and the elevator will come to that floor and open the doors. After the doors have been opened for some period of time (5 seconds?), the doors will close again and the elevator will head towards it's new destination.

The MasterControl receives the initial constraints for the simulation and create the Elevator and FloorControl classes inside of it. It will host the interaction between those classes and oversee all operations.

classes:

MasterControl {
    numElevators: integer
    numFloors: integer

    elevators[]: Elevator
    floorControllers[]: FloorControl

    constructor(numElevators, numFloors) {
        create an Elevator object for each numElevators,
        create a FloorControl object for each numFloors
    }

    request(currentFloor, destinationFloor) {

    }
}

FloorControl() { // controls on each floor where requests originate
    floor: integer 
    requestedFloor: integer
}

Elevator {
    inService: boolean
    doorsOpen: boolean
    floorStops[]: boolean
    currentFloor: integer
    totalTrips: integer
    destination: 
    direction: string ('up', 'down', or 'none')

    constructor() {

    }

    move() {
        if headed in a direction, change currentFloor to either +/- 1
    }

    toggleDoors() {
        if doorsOpen, report 'Doors Closing'
        else, report 'Doors Opening'
    }


}