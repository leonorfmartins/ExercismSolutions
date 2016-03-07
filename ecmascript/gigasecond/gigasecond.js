export default class Gigasecond {
  constructor(inputDate) {
    this.inputDate = inputDate.getTime();
  }
  date() {
    let giganniversary = new Date(this.inputDate + Math.pow(10, 12));
    return new Date(giganniversary);
  }
}
