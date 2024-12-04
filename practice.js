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
// const each = function (array, callBack) {
//   const newArray = [];
//   for (let el of array) {
//     newArray.push(callBack(el));
//   }
//   return newArray;
// };
// console.log(
//   each([64, 49, 36, 25, 16], function (arrayEl) {
//     return Math.min(...arrayEl);
//   })
// );
// const createProduct = (partialProduct, callBack) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callBack(product);
// };
// const logProduct = function (product) {
//   console.log(product.price + product.quantity);
// };
// const calcPrice = (product) => {
//   console.log(product.price * product.quantity);
// };
// createProduct({ name: "apple", price: 30, quantity: 3 }, calcPrice);
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (let item of products) {
//     if (item.name === productName) {
//       return item.price * item.quantity;
//     }
//   }
//   return "Product Blaster not found!";
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility")); // "Adding Invisibility"
// console.log(atTheOldToad.addPotion("Power potion")); // "Adding Power potion"
// console.log(atTheOldToad.potions); // ["Invisibility", "Power potion"]
// const logItems = (items) => {
//   console.log(items);
//   items.forEach((el, idx) => console.log(`${idx + 1} - ${el}`));
// };
// logItems(["orange", "grape", "apple", "banana"]);
// const numbers = [1, 2, 3, 4, 5];
// const dblNumbers = numbers.map((el, idx, arr) => {
//   return el * 2;
// });
// console.log(numbers);
// console.log(dblNumbers);
// Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів.
// Функція має повертати масив імен усіх користувачів(властивість name) із масиву users.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її викликів.
// const getUserNames = (users) => {
//   return users.map((el) => el.name);
// };
// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів
// другий параметр friendName — ім’я друга для пошуку.
// Функція має повертати масив усіх користувачів із масиву users,
//     у яких є друг з іменем friendName.Друзі кожного користувача зберігаються у властивості friends.
//     Якщо користувачів, у яких є такий друг немає, то функція має повернути порожній масив.

// Поради:

// Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну умову.
// Використовуй метод includes() для перевірки, чи масив friends містить friendName.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((el) => {
//     return el.friends.includes(friendName);
//   });
// };

// const getUsersWithFriend = (users, friendName) => users.filter(el => el.friends.includes(friendName)
//   );

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме один параметр users — масив об’єктів користувачів.

// Функція має повертати масив усіх користувачів, відсортованих за спаданням кількостій їх друзів (властивість friends).

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//  У консоль будуть виведені результати її роботи.

// const sortByDescendingFriendCount = (users) => {
//   return users.toSorted((a, b) => {
//     return b.friends.length - a.friends.length;
//   });
// };

// console.table(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female",
//     },
//   ])
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]
// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((el) => {
//       return el.gender === gender;
//     })
//     .reduce((acc, el) => {
//       return acc + el.balance;
//     }, 0);
// };

// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter((el) => el.gender === gender)
//     .reduce((acc, el) => acc + el.balance, 0);

// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811,
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821,
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793,
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278,
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951,
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498,
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863
