export default class Transcriptor {
  constructor() {
    this.correspondence = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    };
  }

  toRna(dna) {
    let rna = '';
    for (let letter of dna) {
      rna += this.correspondence[letter];
    }
    return rna;
  }
}
