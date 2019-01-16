# elevator-challenge
A programming challenge: Design an elevator system 


## Design
My approach to this problem, is going to be a design with a controller that interacts between the elevators and facilitates all interactions from floor levels.

Because of feature #6 in the challenge, I am designing this simulation with the idea that the elevators themselves have no controls. The idea is that people will make requests from any floor, and the elevator will come to that floor and open the doors. After the doors have been opened for some period of time (5 seconds?), the doors will close again and the elevator will head towards it's new destination.

The master controller receives the initial constraints for the simulation and create the elevators inside of it

ElevatorControl(elevators, floors)

classes:

MasterControl(numElevators, numFloors) {
    numElevators: integer
    numFloors: integer

    request(currentFloor, destinationFloor) {

    }
}

FloorControl()

Elevator() {
    inService: boolean
    doorsOpen: boolean
    currentFloor: integer
    totalTrips: integer
    destination: 
    direction: string ('up', 'down', or 'none')

    move() {
        if headed in a direction, change currentFloor to either +/- 1
    }

    toggleDoors() {
        if doorsOpen, report 'Doors Closing'
        else, report 'Doors Opening'
    }


}