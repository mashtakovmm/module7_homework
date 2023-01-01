// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)


function Device() {
    this.isPowered = false
    this.switchPower = function() {
        console.log('Switched power');
        this.isPowered = !this.isPowered
    }
}

function TV(name) {
    this.name = name
    this.channelNumber = 0
    this.showFilm = function() {
        if(this.isPowered == true) {
            console.log("Showing a film");
        } else {
            console.log("No power");
        }
    }
    this.nextChannel = function() {
        if(this.isPowered == true) {
            this.channelNumber++
            console.log(`Current channel is ${this.channelNumber}`);
        } else {
            console.log("No power");
        }
    }
}
TV.prototype = new Device()

function WebCamera(name) {
    this.name = name
    this.isShowing = false

    this.turnOnCam = function() {
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
WebCamera.prototype = new Device()

const myTV = new TV('Samsung')
const myCam = new WebCamera('A4Tech')