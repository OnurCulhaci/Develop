// Importing Vehicle and Wheel classes
import Vehicle from '../classes/Vehicle.js';
import Wheel from '../classes/Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class



  // TODO: Declare properties of the Motorbike class
  class Motorbike extends Vehicle {
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number
    weight: number;
    topSpeed: number;
    wheels: Wheel[];
 


  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[]
    ) {
      super(); // Call the parent constructor
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
      this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
    }





  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

    wheelie(): void {
      console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
  override printDetails(): void {
    super.printDetails();
    console.log(`Color: ${this.color}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(
      `Wheels: ${this.wheels.map(
        (wheel, index) => `Wheel ${index + 1}: ${wheel.getDiameter} inches, ${wheel.getTireBrand}`
      )}`
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
