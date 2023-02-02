const text = "hello the world and all the other planet in our galaxy";
const sentence = "When you play the game of thrones, you win or you die";

// Функция capitalizeWords(), которая делает заглавной каждую первую букву слова в строке
const capitalize = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

const capitalizeWords = (sentence) => {
  const separator = " ";
  const words = sentence.split(separator);
  const capitalizeWords = [];

  for (const word of words) {
    capitalizeWords.push(capitalize(word));
  }

  return capitalizeWords.join(separator);
};

console.log(capitalizeWords(text));

// Функция makeCensored(), которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку.

const makeCensored = (string, stopWords) => {
  const separator = " ";
  const words = string.split(separator);
  const result = [];

  for (const word of words) {
    stopWords.includes(word) ? result.push("$#%!") : result.push(word);
  }

  return result.join(separator);
};

console.log(makeCensored(sentence, ["die", "play"]));
