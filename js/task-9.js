var count = 0;
for (var i = 0; i <= 6; i++) {
  if (i == 3) {
    i = 5;
    continue;
  }
  count++;
}
console.log(count);
