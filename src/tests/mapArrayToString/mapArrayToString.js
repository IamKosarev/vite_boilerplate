export const mapArrayToString = (arr) => {
  return arr
    .filter(item => Number.isInteger(item))
    .map(String);
};