// OOP in Javascript , Real World Objects
// Encapsulation, Abstraction, Inheritance, Polymorphism (overriding, overloading)
// 1. Factory Function

function car(name, model) {
    return {
        name,
        model,
        sayName() {
            console.log(`My name is ${this.name} and my model is ${this.model}`);
        }
    }
}

const carA = car('audi', 09);
const carB = car('bmw', 07);

console.log('Factory Function');
console.log(carA.sayName === carB.sayName);

// 2. Constructor Function

const Bike = function(name, model) {
    this.name = name;
    this.model = model;
}

Bike.prototype.sayName = function() {
    console.log(`My name is ${this.name} and my model is ${this.model}`);
}

const bikeA = new Bike('Yamaha', 03);
const bikeB = new Bike('Honda', 08);

console.log('Constructor Function');
console.log(bikeA.sayName === bikeB.sayName);

// 3. Object.create()

const fruit = {
    name: 'apple',
    size: 20,
    sayName() {
        console.log(`My name is ${this.name} and my size is ${this.size}`);
    }
}

const fruitA = Object.create(fruit);
const fruitB = Object.create(fruit);
fruitA.name = 'orange';
fruitA.size = 30;
fruitB.name = 'Kiwi';
fruitB.size = 2;

console.log('Object Create');
console.log(fruitA.sayName === fruitB.sayName);


// 4. ES6 Classes

class Vegetable {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    sayName() {
        console.log(`My name is ${this.name} and my size is ${this.size}`);
    }
}

const vegetableA = new Vegetable('carrot', 5);
const vegetableB = new Vegetable('tomatoe', 66);

console.log('ES6 Classes');
console.log(vegetableA.sayName === vegetableB.sayName);







