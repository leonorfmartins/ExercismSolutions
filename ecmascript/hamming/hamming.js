export default class Hamming {
  compute(source, toCompare) {
    if (source.length !== toCompare.length) throw new Error("DNA strands must be of equal length.");
    let distance = source.split('').reduce((distance, char, i) => {
      if (char != toCompare[i]) {
        return distance+1;
      }
      return distance;
    }, 0);
    return distance;
  }
}
