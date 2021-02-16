function divCon(array) {
    let arrayOfStrings = [];
    let arrayOfNumbers = [];
    let sumOfStrings = 0;
    let sumOfNumbers = 0;
    
    array.forEach((element) => {
      if (typeof element === "string") {
        arrayOfStrings.push(parseInt(element));
        sumOfStrings = arrayOfStrings.reduce((a, b) => a + b, 0);
      }
      
      if (typeof element === "number") {
        arrayOfNumbers.push(element);
        sumOfNumbers = arrayOfNumbers.reduce((a, b) => a + b, 0);
      }
    });
    return sumOfNumbers - sumOfStrings;
  }

  module.exports = divCon;