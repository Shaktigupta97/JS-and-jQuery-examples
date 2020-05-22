var garage = {
  name: "Hot Wheels", // Property type string
  cars: ["BMW", "FORD"], // Property type array
  listCars: function () { // Method without parameter
    var carsArray = this.cars; // this is a pointer
    return carsArray;
  },
  addCar: function (carNames) { // Method with parameter
    for (let index = 0; index < carNames.length; index++) {
      this.cars.push(carNames[index]);
    }
  }
};

console.log('Garage Name is: ' + garage.name);

console.log(garage.listCars());

garage.addCar(["Swift", "jeep", "alto"]);

console.log(garage.listCars());





// function whoIsInTheRoom(nameOfThePersons = 'No one is in the room') {
//   var personArray = ['tom', 'peter'];
//   for (var i = 0; i < nameOfThePersons.length; i++) {
//     personArray.push(nameOfThePersons[i]);
//   }
//   console.log(personArray);
// }
// whoIsInTheRoom(['gk', 'sg', 'ram', 'shyam']);

