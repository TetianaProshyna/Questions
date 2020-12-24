const a = 21;
const b = '2' + '1';
if (a === b) {
  console.log(3);
} else if (a == b) {
  console.log(2);
} else if ((a = b)) {
  console.log(1);
} else {
  console.log(0);
}

// Варианты ответов
// 1 - 3;
// 2 - 2;
// 3 - 1;
// 4 - 0;
