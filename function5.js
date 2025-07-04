function positive(amount) {
  if (amount > 0) {
    return "positive";
  } else {
    return "negative";
  }
}
const posneg = positive(10);
console.log(posneg);
