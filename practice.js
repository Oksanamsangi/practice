// Вивести числа від 1 до 20.
// Вивести всі парні числа від 1 до 50.
// Вивести всі непарні числа від 1 до 50.
// Знайти суму чисел від 1 до 100.
// Знайти добуток чисел від 1 до 10.
// Вивести всі числа від 10 до 1 у зворотному порядку.
// Вивести таблицю множення для числа 7.
// Порахувати кількість цифр у числі 12345.
// Порахувати кількість букв "а" у рядку "banana".
// Перевірити, чи є число 29 простим (ділиться лише на 1 і на себе).
// Вивести всі елементи масиву [1, 2, 3, 4, 5].
// Знайти суму чисел у масиві [2, 4, 6, 8, 10].
// Знайти найбільше число у масиві [3, 5, 7, 2, 8].
// Вивести елементи масиву у зворотному порядку.

// function displayNumbers(num) {
//   for (let i = 0; i <= num; i++) {
//     console.log(i);
//   }
// }
// console.log(displayNumbers(20));

// function findPairNumbers(num) {
//   for (let i = 2; i <= num; i += 2) {
//     console.log(i);
//   }
// }

// console.log(findPairNumbers(50));

// function findOddNumber(num) {
//   for (let i = 1; i <= num; i += 2) console.log(i);
// }

// console.log(findOddNumber(50));

// function findTotal(num) {
//   let total = 0;
//   for (let i = 0; i <= num; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(findTotal(100));

// function findMultplNumber(num) {
//   let total = 1;
//   let i = 0;
//   while (i <= num) {
//     i++;
//   }
//   return total * i;
// }
// console.log(findMultplNumber(10));

// function displayNumbers(num) {
//   for (let i = 20; i >= num; i--) {
//     console.log(i);
//   }
//   return i;
// }
// console.log(displayNumbers(1));

// function multiplyNumber(num) {
//   for (let i = 0; i <= num; i++) {
//     console.log(i * 7);
//   }
//   return i * 7;
// }
// console.log(multiplyNumber(10));

// const Arr = ["banana"];
// const newArr = [];
// for (let letter of Arr) {
//   if (Arr.includes("a")) {
//     newArr.push("a");
//   }
//   console.log(newArr);
// }

// function checkNumber(num) {
//   for (let i = 0; i <= num; i++) {
//     if (num % i === 0) {
//       return num;
//     }
//   }
// }
// console.log(checkNumber(29));

// const Arr = [1, 2, 3, 4, 5];

// for (let i of Arr) {
//   console.log(i);
// }

// const Arr = [2, 4, 6, 8, 10];
// function findTotal(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total;
// }
// console.log(findTotal(Arr));

// const arr = [3, 5, 7, 2, 8];
// const maxValue = Math.max(...arr);
// console.log(maxValue);

// const Arr = [1, 2, 3, 4, 5];
// const reversedArr = Arr.toReversed();
// console.log(reversedArr);

// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер.
// Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize,
//     і false, якщо ні.

// const products = {
//   appels: 2,
//   grapes: 4,
//   carrots: 1,
//   lime: 16,
//   tomatoes: 3,
//   potatoes: 5,
//   oranges: 2,
// };

// function isEnoughCapacity(products, containerSize) {
//   for (let i of products) {
//     if (productitems <= containerSize) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(products);

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));
