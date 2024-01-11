let unit = [50000, 10000, 5000, 1000, 500, 100];
const changeCalculate = (money) => {
  for (let i = 0; i < unit.length; i++) {
    let num = Math.floor(money / unit[i]);
    console.log(unit[i] + "x" + num);
    money = money - unit[i] * num;
  }
};

changeCalculate(12300);

// const findSmallestElement = (num) => {
//   let number = num;
//   console.log(number);
//   if (number.length === 0) {
//     return 0;
//   }
//   let result = number[0];
//   for (let i = 1; i < number.length; i++) {
//     if (number[i] < result) {
//       result = number[i];
//     }
//   }
//   return result;
// };

// console.log(findSmallestElement([100, 200, 3, 0, 2, 1]));
