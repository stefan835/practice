const findFirstMissingNumber = (array) => {
  return array.length === 0 || Math.abs(array[0] - array[array.length - 1]) < 2 ?
    'Zbiór nie zawiera braków'
    :
    array.reduce((firstNumber, nextNumber) => {
      return firstNumber >= 0 && nextNumber - firstNumber > 1 ? firstNumber : nextNumber
    }) + 1
};

console.log(findFirstMissingNumber([-4, -3, -3, -2, 1, 2, 3, 7, 8]));