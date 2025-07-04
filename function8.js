function double(hello) {
  let sum = 0;
  for (let i = 1; i <=hello; i++) {
    sum = sum + i;
  }
  return sum;
}
const result = double(2);
console.log(result);
