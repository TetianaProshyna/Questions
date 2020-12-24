const arr = [10, 20, 30, 40, 50];
let a, b, c;
[a, b, ...c] = arr;
console.log(c[1]);

// Варианты ответов
// 1 - 40;
// 2 - 20;
// 3 - undefined;
// 4 - 10;
