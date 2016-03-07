export default class Hamming {
  compute(source, toCompare) {
    if (source.length !== toCompare.length) {throw new Error("DNA strands must be of equal length.");}
    let distance = 0;
    for (let i = 0; i <= source.length; i++) {
      if (source[i] != toCompare[i]) {
        distance++;
      }
    }
    return distance;
  }
}
