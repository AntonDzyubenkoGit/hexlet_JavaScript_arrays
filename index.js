// Функция getTheNearestLocation(), которая находит ближайшее место к указанной точке на карте и возвращает его.
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

const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null;
  }

  let [nearestLocation] = locations;
  const [, nearestPoint] = nearestLocation;
  let lowestDistance = getDistance(currentPoint, nearestPoint);

  for (const location of locations) {
    const [, point] = location;
    const distance = getDistance(currentPoint, point);
    if (distance < lowestDistance) {
      lowestDistance = distance;
      nearestLocation = location;
    }
  }
  return nearestLocation;
};

console.log(getTheNearestLocation(locations, currentPoint));
