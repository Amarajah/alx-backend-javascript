import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const newConst =  Object.getPrototypeOf(this);
    const newCar = Object.getPrototypeOf(newConst).constructor;
    return new newCar();
  }
}
