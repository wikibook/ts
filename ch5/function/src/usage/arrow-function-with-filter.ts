var number_list = [1, 2, 3, 4, 5];
number_list = number_list.filter(n => {
  return n % 2 === 0;
});
console.log(number_list); // [ 2, 4 ]

/*
ES6에 추가 된 기능
*/