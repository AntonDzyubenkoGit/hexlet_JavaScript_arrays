// Функция getSuperSeriesWinner(), которая находит команду победителя для конкретной суперсерии

const scores = [
  [3, 3],
  [4, 1],
  [5, 8],
  [5, 5],
  [2, 3],
  [2, 5],
  [4, 4],
  [2, 3],
];

const getSuperSeriesWinner = (series) => {
  let sum = 0;
  for (const game of series) {
    const result = Math.sign(game[0] - game[1]);
    sum += result;
  }
  if (sum === 0) {
    return null;
  }
  if (sum > 0) {
    return "canada";
  }
  return "ussr";
};

console.log(getSuperSeriesWinner(scores));
