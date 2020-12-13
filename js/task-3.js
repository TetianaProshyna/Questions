var a, b;
a = typeof c;
var c = function () {
  return 20;
};
b = typeof c;
console.log(a == b);
