// Функция isBracketStructureBalanced(),  которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной.
const testing1 = "(>"; // false
const testing2 = "({})"; // true
const testing3 = "[()]"; // true
const testing4 = "({}[])"; // true
const testing5 = "{<>}}"; // false
const testing6 = "([)]"; // false

const openingSymbols = ["(", "[", "{", "<"];
const closingSymbols = [")", "]", "}", ">"];

const isBracketStructureBalanced = (str) => {
  if (str.length === 0) {
    return true;
  }
  if (str.length % 2 !== 0) {
    return false;
  }

  const stack = [];

  for (const symbol of str) {
    if (openingSymbols.includes(symbol)) {
      const oppositeSymbol = closingSymbols[openingSymbols.indexOf(symbol)];
      stack.push(oppositeSymbol);
    } else if (symbol !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isBracketStructureBalanced(testing4));