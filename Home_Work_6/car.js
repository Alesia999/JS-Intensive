class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed = 300;
  #maxFuelVolume = 20;
  #fuelConsumption = 7;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  constructor(name = 'default') {
    this.name = name;
  }

  isValidNumber(number) {
    return (
      !isNaN(Number(number)) &&
      typeof number === 'number' &&
      number > 0 &&
      isFinite(number)
    );
  }

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    if (value.length <= 50 && value.length >= 1) {
      this.#brand = value;
    }
  }

  get model() {
    return this.#model;
  }

  set model(value) {
    if (value.length <= 50 && value.length >= 1) {
      this.#model = value;
    }
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    if (value <= new Date().getFullYear() && value >= 1900) {
      this.#yearOfManufacturing = value;
    }
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if (value <= 300 && value >= 100) {
      this.#maxSpeed = value;
    }
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if (value <= 20 && value >= 5) {
      this.#maxFuelVolume = value;
    }
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    this.#fuelConsumption = value;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }

    this.#isStarted = false;
  }

  fillUpGasTank(fuel) {
    if (!this.isValidNumber(fuel)) {
      throw new Error('Неверное количество топлива для заправки');
    } else if (this.#currentFuelVolume + fuel > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }

    this.#currentFuelVolume += fuel;
  }

  drive(speed, hours) {
    const consumedFuel = (this.#fuelConsumption * speed * hours) / 100;

    if (!this.isValidNumber(speed)) {
      throw new Error('Неверная скорость');
    } else if (!this.isValidNumber(hours)) {
      throw new Error('Неверное количество часов');
    } else if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    } else if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    } else if (consumedFuel > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива');
    }

    this.#currentFuelVolume -= consumedFuel;
    this.#mileage += speed * hours;
  }
}
