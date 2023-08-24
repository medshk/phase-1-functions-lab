// Code your solution in this file!
const distanceFromHqInBlocks = (val) => Math.abs(val - 42);

const distanceFromHqInFeet = (val) => distanceFromHqInBlocks(val) * 264;

const distanceTravelledInFeet = (start, destination) =>
  Math.abs(start - destination) * 264;

const calculatesFarePrice = (start, dest) => {
  const distance = distanceTravelledInFeet(start, dest);

  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return ((distance - 400) * 2) / 100;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else return "cannot travel that far";
};
