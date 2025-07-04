let massiv = [100, 20, 30, 40, 50];

function sum(arya) {
  let massiv = arya[0];
  for (let i = 0; i < arya.length; i++) {
    if (massiv < arya[i]) {
      massiv = arya[i];
    }
  }
  return massiv;
}
const number = sum(massiv);
console.log(number);
