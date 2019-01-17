# elevator-challenge
A programming challenge: Design an elevator system 


## Design
My approach to this problem, is going to be a design with a controller that interacts between the elevators and facilitates all interactions from floor levels requests.

Because of feature #6 in the challenge, I am designing this simulation with the idea that the elevators themselves have no controls. The idea is that people will make requests from any floor, and the elevator will come to that floor and open the doors. After the doors have been opened for some period of time (5 seconds?), the doors will close again and the elevator will head towards it's new destination.

Future considerations for larger numbers of elevators would be some sort of load balancing system, to reduce wear and tear.

#

## Classes

#### MasterControl
Receives the initial constraints for the simulation and creates the `Elevator` and `FloorControl` objects within it, which it will interact with and oversee their operations

#### FloorControl
Receives requests from the user on the floor which it lives on, and stores those in a queue, which will be read by the  `MasterControl`

#### Elevator
This class is not responsible for any groundbreaking decision or logic, it is sent directions from `MasterControl`


```
MasterControl {
    numElevators: integer
    numFloors: integer

    elevators[]: Elevator
    outOfServiceElevators[]: Elevator
    floorControllers[]: FloorControl

    constructor(numElevators, numFloors) {
        create an Elevator object for each numElevators,
        create a FloorControl object for each numFloors
    }

    retrieveRequests() {
        floorControllers.forEach(floorController => {
            pop each request off the queue from each floor, and call self.requestElevatorToFloor()
        });
    }

    requestElevatorToFloor(floor, destination) {
        if there exists elevator.currentFloor == floor, request this elevator
        else if there exists an occupied elevator who's path will cross with the floor, request this elevator
        else, request closed elevator unoccupied
    }


    
}
```
```
FloorControl() { // controls on each floor where requests originate
    floor: integer // the floor where this control lives 
    requestedFloors: queue of integers // the currently requested floor

    request(requestedFloor) {
        
    }


}
```
```
Elevator {
    inService: boolean
    doorsOpen: boolean
    floorStops[]: boolean
    currentFloor: integer
    totalTrips: integer
    destination: 
    direction: string ('up', 'down', or 'none')
    topFloor: integer
    
    constructor(floors) {
        self.topFloor = floors
    }

    move() {
        if headed in a direction, change currentFloor to either +/- 1, but do not exceed topFloor or go below floor 1

        if it reaches a stop, toggleDoors(), wait, toggleDoors() again
        
        if it finishes its' stops, pause and totalTrips++
        
        if totalTrips reaches 100, inService = false
    }


    toggleDoors() {
        if doorsOpen, report 'Doors Closing'
        else, report 'Doors Opening'
    }


}
```