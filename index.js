var _ = require("lodash");
// Добавить в стек (push)
// Взять из стека (pop)
// Вернуть элемент с вершины стека без удаления (peekBack)
// Проверить на пустоту (isEmpty)
// Вернуть размер (size)

const checkIsBalanced = (expression) => {
  const stack = [];

  for (const symbol of expression) {
    if (symbol === "(") {
      stack.push(symbol);
    } else if (symbol === ")") {
      if (!stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const test = "((()))";
console.log(checkIsBalanced(test));

// Функция isBracketStructureBalanced(),  которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной.
const testing1 = "(>"; // false
const testing2 = "({})"; // true
const testing3 = "[()]"; // true
const testing4 = "({}[])"; // true
const testing5 = "{<>}}"; // false
const testing6 = "([)]"; // false

const openingSymbols = ["(", "[", "{", "<"];
const closingSymbols = [")", "]", "}", ">"];

const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) => {
  for (let i = 0; i < closingSymbols.length; i++) {
    if (openingSymbols[i] === symbol) {
      return closingSymbols[i];
    }
  }
  return null;
};

const isBracketStructureBalanced = (str) => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbols = getClosingSymbolFor(symbol);
      stack.push(closingSymbols);
    } else {
      const lastSavedSymbol = stack.pop();
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }
  return stack.length === 0;
};


console.log(isBracketStructureBalanced(testing5));