const input = document.getElementById("input");
const baby = document.getElementById("baby");
const button = document.getElementById("button");
const baba = [];
function push() {
  const num = Number(input.value);
  if (input.value.trim() !== "") {
    baba.push(num);
    baba.sort((a, b) => a - b);
    baby.innerText = baba.join(", ");
    input.value = "";
  }
}

addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    push();
  }
});
