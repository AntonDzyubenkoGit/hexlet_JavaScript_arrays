// Функция getTheNearestLocation(), которая находит ближайшее место к указанной точке на карте и возвращает его.

const { min } = require("lodash");

const locations = [
  ["Park", [10, 5]],
  ["Sea", [1, 3]],
  ["Museum", [8, 4]],
];

const currentPoint = [5, 5];

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

const minimum = (arr) => arr.reduce((x, y) => Math.min(x, y));

const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null;
  }

  const valuesOfDistances = [];

  for (const [, dist] of locations) {
    valuesOfDistances.push(getDistance(dist, currentPoint));
  }

  const minDistance = minimum(valuesOfDistances);

  const result = [];

  for (const [city, dist] of locations) {
    if (getDistance(dist, currentPoint) === minDistance) {
      result.push(city, dist);
    }
  }
  return result;
};

console.log(getTheNearestLocation(locations, currentPoint));
