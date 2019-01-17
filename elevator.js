

class Elevator {
    
    constructor(floors) {
        self.topFloor = floors
        self.inService = true;
        self.doorsOpen = false;
        self.floorStops = [];
        currentFloor: integer
        totalTrips: integer
        destination: 
        direction: string ('up', 'down', or 'none')
        topFloor: integer
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