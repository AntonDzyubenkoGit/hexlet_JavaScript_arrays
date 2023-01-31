const money0 = ["rub 50", "rub 60", "rub 70"];
const money1 = ["eur 10", "usd 1", "usd 10", "rub 50", "usd 5"];
const money2 = [ "eur 10", "usd 1", "eur 5", "rub 100", "eur 20", "eur 100", "rub 200"];
const money3 = ["eur 10","rub 50", "eur 5", "rub 10", "rub 10", "eur 100", "rub 200"];

// Функция getTotalAmount(), которая принимает на вход в виде массива кошелек с деньгами и название валюты и возвращает сумму денег указанной валюты. 
const nameOfConst = (coll, currency) => {
  let sum = 0;

  for (const item of coll) {
    let curr = item.slice(0, 3);
    if (curr === currency) {
      let value = Number(item.slice(4));
      sum += value;
    }
  }
  return sum;
};

console.log(nameOfConst(money3 , "rub"));
