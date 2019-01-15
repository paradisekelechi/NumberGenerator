export const generateNewNumber = () => {
  const generatedNumber = Math.floor(Math.random() * 1000000000);
  const paddedNumber = padNumber(10 - (generatedNumber + '').length, generatedNumber);
  return paddedNumber;
}


const padNumber = (numberOfTimes, number) => {
  let paddedNumber = number;
  for (let index = 0; index < numberOfTimes; index++) {
    paddedNumber = `0${paddedNumber}`;
  }
  return paddedNumber;
}
