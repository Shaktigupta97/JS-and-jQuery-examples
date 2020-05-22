//Train Example
var train = {
  name: "Shatabdi Express",
  stations: [],
  passengers: 0,
  addStation: function (station_name) {
    /** Adding one station at a time */
    this.stations.push(station_name);
  },
  addPassenger: function (number_of_passengers) {
    /** Calculating total passenger */
    this.passengers = this.passengers + number_of_passengers;
  },
  trainStatus: function () {
    var message = "Train has crossed "

    if (this.stations.length > 1) {
      for (let i = 0; i < this.stations.length; i++) {
        // Get the last entry
        if (i == this.stations.length - 1) {
          message = message + 'and ' + this.stations[i] + ', ';
        } else {
          message = message + this.stations[i] + ', ';
        }

      }
    } else {
      message = message + this.stations[0] + ' ';
    }

    return message + "and it has " + this.passengers + " total passengers";
  }
};

// train.station(['Delhi', 'Chennai', 'Mumbai']);
// console.log(train.stations);

// console.log(train.name + 'covered' + train.station());

console.log(train.name);

train.addStation('Delhi');
train.addPassenger(60);

console.log(train.trainStatus());

train.addStation('Chennai');
train.addPassenger(120);

console.log(train.trainStatus());

train.addStation('Mumbai');
train.addPassenger(180);

console.log(train.trainStatus());

// Train Name
// number of passengers 
// Station names array
// Number of bogies (Max passenger: 100)

// Train should cross three stations
// add station names (a, b, c)
// add passenger (60, 90, 120)

// End of trip : stations added, number of passengers, number of bogies