let count = 0;
for (let i = 0; i <= 6; i++) {
  if (i == 3) {
    i = 5;
    continue;
  }
  count++;
}
console.log(count);

// Варианты ответов
// 1 - 6;
// 2 - 5;
// 3 - 3;
// 4 - 4;
