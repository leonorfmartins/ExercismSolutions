export default class Pangram {
    constructor(input) {
        this.input = input;
    }
    isPangram() {
        if(!this.input || this.input === '') return false;
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        return alphabet.every((letter) => this.input.toLowerCase().indexOf(letter) > -1);
    }    
}
