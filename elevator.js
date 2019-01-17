
class FloorControl {
    
    constructor(floor) {
        self.floor = floor;
        self.requests = [];
    }

    submitRequest(floor) {
        self.requests.push(floor);
    }

    retrieveRequest() {
        return self.requests.shift(); // pop front item from queue
    }



}


class Elevator {
    
    constructor(floors) {
        self.topFloor = floors;
        self.inService = true;
        self.doorsOpen = false;
        self.floorStops = [];
        
        // initialize floor stops all as 0 (none)
        for(var i = 0; i < floors; i++) {
            self.floorStops.push(0);
        }

        self.currentFloor = 1; // start at floor 1
        self.totalTrips = 0;
        self.destination = 1; // no destination
        self.direction = null; 
    }

    move() {
        if (!direction) { // no directions, stay put
            return ;
        } else if (direction == 'up' && currentFloor < topFloor) {
            self.currentFloor++;
        } else if (direction == 'down' && currentFloor > 1) {
            self.currentFloor--;
        }

        console.log('Moving ' + direction + ' to floor ' + self.currentFloor);

        if (self.reachedStop()) {
            toggleDoors(); // open doors
            setTimeout(toggleDoors, 5000); // close doors after 5 seconds
        }

        if (self.currentFloor == destination) {
            self.totalTrips++;

            if (self.totalTrips == 100) {
                self.inService = false;
            }
        }
    }

    reachedStop() { // tracks if reached a stop
        return self.floorStops[self.currentFloor-1]; // -1 as the offset, because the first floor is at index 0 in this array
    }

    toggleDoors() {
        if (self.doorsOpen) {
            self.doorsOpen = false;
            console.log('Doors closing!')
        } else {
            self.doorsOpen = true;
            console.log('Doors opening!')
        }
    }

}