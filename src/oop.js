//Define a blueprint for a car

class Car{
  //the constructor to initialize an object
  constructor(make,model,year){

    this.make=make;
    this.model=model;
    this.year=year;
    this.isEngineOn=false;


  }
  //a method that is a part of a class
  startEngine(){
    this.EngineOn=true;
    console.log(`This ${this.make} ${this.model} is now on.`);
  }
  displayInfo(){
    console.log(`car Info ${this.year} ${this.make} ${this.model}`);
  }
}
//create an instance of a car
const mycar = new Car({ make: "Mercedes", model: "E500", year: 2024 });
mycar.startEngine();
mycar.displayInfo();
