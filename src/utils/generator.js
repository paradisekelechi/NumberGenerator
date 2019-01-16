export const generateNewNumber = () => {
  const generatedNumber = Math.floor(Math.random() * 1000000000);
  const paddedNumber = padNumber(10 - (generatedNumber + '').length, generatedNumber);
  saveNumberToFile(generatedNumber);
  return paddedNumber;
}


const padNumber = (numberOfTimes, number) => {
  let paddedNumber = number;
  for (let index = 0; index < numberOfTimes; index++) {
    paddedNumber = `0${paddedNumber}`;
  }
  return paddedNumber;
}

const saveNumberToFile = (number) => {
  const numberList = localStorage.getItem('numbers');
  if (numberList) {
    const storedData = JSON.parse(numberList);
    storedData.push(number);
    localStorage.setItem('numbers', JSON.stringify(storedData));
  } else {
    localStorage.setItem('numbers', JSON.stringify([number]));
  }
}

export const getNumberList = () => {
  const numberList = localStorage.getItem('numbers');
  if (numberList) {
    return JSON.parse(numberList);
  }
  return null;
}

export const clearStorageList = () => {
  localStorage.removeItem('numbers');
}
