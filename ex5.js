class Device {
    constructor(isPowered){
        this.isPowered = isPowered || false
    }
    switchPower = function() {
        console.log('Switched power');
        this.isPowered = !this.isPowered
    }
}

class TV extends Device {
    constructor(name, isPowered){
        super(isPowered);
        this.name = name;
        this.channelNumber = 0;
    }
    showFilm = function() {
        if(this.isPowered == true) {
            console.log("Showing a film");
        } else {
            console.log("No power");
        }
    }
    nextChannel = function() {
        if(this.isPowered == true) {
            this.channelNumber++
            console.log(`Current channel is ${this.channelNumber}`);
        } else {
            console.log("No power");
        }
    }
}

class WebCamera extends Device {
    constructor(name, isPowered){
        super(isPowered)
        this.name = name
        this.isShowing = false
    }

    turnOnCam = function() {
        if(this.isPowered == true) {
            this.isShowing = !this.isShowing
            if(this.isShowing) {
                console.log("Cam is on");
            } else {
                console.log("Cam is off");
            }
        } else {
            console.log("No power");
        }
    }
}

let myTV = new TV('Samsung')
let myCam = new WebCamera('A4Tech')