# elevator-challenge
A programming challenge: Design an elevator system 


## Design
My approach to this problem, is going to be a design with a controller that interacts between the elevators and facilitates all interactions from floor levels requests.

Because of feature #6 in the challenge, I am designing this simulation with the idea that the elevators themselves have no controls. The idea is that people will make requests from any floor, and the elevator will come to that floor and open the doors. After the doors have been opened for some period of time (5 seconds?), the doors will close again and the elevator will head towards it's new destination.

I was not able to finish as far as I would have liked, but I did come up with a system that I think would work well. Would this system scale to a large number of elevators? Probably not very well, as it was not exactly designed asynchronously. But with completely reasonable modifications, this design could scale up to 10 elevators with no major issues.



#

## Classes

#### MasterControl
Receives the initial constraints for the simulation and creates the `Elevator` and `FloorControl` objects within it, which it will interact with and oversee their operations

It watches for requests from each floor, and determines which elevator is optimal to handle the request. It then sends that elevator a new destination to jet towards.

#### FloorControl
This is essentially a queue wrapper. It receives requests from the user on the floor which it lives on, and stores those in a queue. The `MasterControl` will read these instructions and take control from here.

#### Elevator
This class is not responsible for any groundbreaking decision or logic, that is all decided in `MasterControl`. But, it is responsible for taking direction. It stores a list of stops it needs to make, as well as many other member variables. With all of this in mind, it moves where it needs to move, stops where it needs stop, and reports its' decisions along the way.


#

### Pseudo/JavaScript/Design Syntax
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

    constructor(floor) {
        
    }

    submitRequest(floor) { // sits and takes a request from user, stores to queue
        
    }

    retrieveRequest() { // get item from front of request queue
        
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
        // more initilization
    }

    move() {
        if headed in a direction, change currentFloor to either +/- 1, but do not exceed topFloor or go below floor 1

        if it reaches a stop, toggleDoors(), wait, toggleDoors() again
        
        if it finishes its' stops, pause and totalTrips++
        
        if totalTrips reaches 100, inService = false
    }

    
    changeDestination(destination) { 
        this function will modify where the elevator is supposed to going, if a new destination is requested.
        
        it will still follow the original path, but will change its' final destination

        called from the MasterControl 

    }
    
    reachedStop() { // tracks if reached a stop

    }

    toggleDoors() {
        if doorsOpen, report 'Doors Closing'
        else, report 'Doors Opening'
    }


}
```