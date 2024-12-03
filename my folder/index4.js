import { CARS, CAR_MAX_SPEED } from './cars.js';
import { STUDENTS } from './students.js';

const safeCars = [];
const speedingCars = [];
for (let i = 0; i < CARS.length; i++) {
    if (CARS[i].speed <= CAR_MAX_SPEED) {
        safeCars.push(CARS[i]);
    } else {
        speedingCars.push(CARS[i]);

    }
}
console.log(safeCars);
console.log(speedingCars);