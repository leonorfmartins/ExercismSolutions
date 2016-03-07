export default function(year) {
  return isDivisibleBy4(year) && (isDivisibleBy100(year) || isDivisibleBy400(year));
}

const isDivisibleBy4 = (year) => year % 4 == 0;

const isDivisibleBy100 = (year) => year % 100 != 0;

const isDivisibleBy400 = (year) => year % 400 === 0;
