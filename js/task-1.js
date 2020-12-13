function foo() {
  const a = 10 + 10;
  const b = function foo() {
    return a;
  };
}

console.log(typeof foo());
