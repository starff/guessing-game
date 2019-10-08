class GuessingGame { // все через this
    constructor(first,second,target) {
      this.first;
      this.second;
      this.target;
    }
  
    setRange(first, second) {
      this.first = first;
      this.second = second; 
    }
  
    guess() {
      this.target = Math.ceil((this.first + this.second) / 2);
      return this.target;
    }
  
    lower() {
      this.second = this.target - 1;
    //   return this.second;
    }
  
    greater() {
      this.first = this.target + 1;
    //   return this.first;
    }
  };
  
  module.exports = GuessingGame;

