var Thermostat = function(){

  this.defaultTemp = 20;
  this.minTemp = 10;
  this.maxTemp = 32

  this.temperature = this.defaultTemp

  this.powerSaving = true;
  this.powerSavingMaxTemp = 25;
  this.lowEnergyCap = 18;

};

  Thermostat.prototype.increase = function() {
    if (this.powerSaving === true && (this.temperature < this.powerSavingMaxTemp)) {
      this.temperature++;
    }
    else if (this.powerSaving === false && (this.temperature < this.maxTemp)) {
        this.temperature++;
    }
    else {
      throw new Error ('maximum temperature reached');
  }
  };

  Thermostat.prototype.decrease = function() {
    if (this.temperature > this.minTemp) {
      this.temperature--;
    } else {throw new Error ('minimum temperature reached');
  }
  };

  Thermostat.prototype.powerSavingOn = function() {
    this.powerSaving = true;
    this.powerSavingMaxTemp;
      if (this.temperature > this.powerSavingMaxTemp) {
      this.temperature = this.powerSavingMaxTemp
    }
  };

  Thermostat.prototype.pressReset = function() {
    this.temperature = this.defaultTemp;
  };

  Thermostat.prototype.powerSavingOff = function() {
    this.powerSaving = false;
  };

  Thermostat.prototype.energyRating = function() {
    if (this.temperature < this.lowEnergyCap) {
      return 'low';
    }
    else if ((this.temperature >= this.lowEnergyCap) && (this.temperature <= this.powerSavingMaxTemp)) {
      return 'medium';
    }
    else if (this.temperature > this.powerSavingMaxTemp) {
      return 'high';
    }
  };
