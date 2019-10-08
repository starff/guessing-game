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
      this.second = this.target;
    //   return this.second;
    }
  
    greater() {
      this.first = this.target;
    //   return this.first;
    }
  }; //отличие от стандарного алгоритма в том что мы не проверяем выбранное число, а мы проходим по всем вызовам методов, и должны получить на выходе число равное загаданному.
  module.exports = GuessingGame;

