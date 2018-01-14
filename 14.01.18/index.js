const findFirstMissingNumber = (array) => {
  const lastNumberInSeries = array.reduce((firstNumber, nextNumber) => {
    return nextNumber - firstNumber > 1 ? firstNumber : nextNumber
  });
  return lastNumberInSeries !== array[array.length - 1] ? lastNumberInSeries + 1 : 'Zbiór nie zawiera braków'
};

console.log(findFirstMissingNumber([1, 2, 3, 7, 8]));