'use strict';
class Gigasecond {
  constructor(inputDate) {
    this.inputDate = inputDate.getTime();
  }
  date() {
    let giganniversary = new Date(this.inputDate + Math.pow(10, 12));
    return new Date(giganniversary - this.extraHours(giganniversary));
  }
  extraHours(giganniversary) {
    return (
      (giganniversary.getSeconds() +
      giganniversary.getMinutes() * 60 +
      giganniversary.getHours() * 3600) * 1000
    );
  }
}

module.exports = Gigasecond;
