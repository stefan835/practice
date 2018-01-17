const findFirstMissingNumber = (array) => {
  return array.length === 0 || array[0] - array[array.length - 1] < 2 ?
    'Zbiór nie zawiera braków'
    :
    array.reduce((firstNumber, nextNumber) => {
      return firstNumber >= 0 && nextNumber - firstNumber > 1 ? firstNumber : nextNumber
    }) + 1
};

console.log(findFirstMissingNumber([0]));