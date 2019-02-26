let store = {drivers: [], passengers: [], trips: []};

let driverId = 0
class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter(
      function(trip){
        return trip.driverId === this.id;
      }.bind(this)
    )
  }

  passengers(){
    let ids = this.trips().map(
      function(trip){
        return trip.passengerId
      }
    )

    let passengers = ids.forEach(function(id){
        store.passengers.find(function(passenger){
          return passenger.id === id;
        })
    })

    return passengers;
  }
}

let passangerId = 0;
class Passenger{
  constructor(name){
    this.id = ++passangerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips(){

  }

  drivers(){

  }
}

let tripId = 0;
class Trip{
  constructor(driver, passenger){
    this.id = ++tripId;
    if (driver){
      this.driverId = driver.id;
    }
    if (passenger){
      this.passengerId = passenger.id;
    }
    store.trips.push(this);
  }

  driver(){
    return store.drivers.filter(
      function(driver){
        return  driver.id === this.driverId;
      }.bind(this)
    );
  }

  passenger(){
    return store.passengers.filter(
      function(passenger){
        return passenger.id === this.passengerId;
      }.bind(this)
    );

  }
}
