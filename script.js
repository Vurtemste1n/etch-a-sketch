function toBuiltGrid(gridSize) {
  for (let i = 1; i <= gridSize; i++) {
    const column = document.createElement("div");
    container.appendChild(column);
    column.classList.add("column");
    for (let j = 1; j <= gridSize; j++) {
      const row = document.createElement("div");
      column.appendChild(row);
      row.classList.add("row");
      row.addEventListener("mouseover", () => {
        row.classList.add("color");
      });
    }
  }
}
function gridSizePromt() {
  let size;
  let userChoice = prompt("Enter desirable grid size: ");
  if (Number(userChoice) <= 100) {
    size = Number(userChoice);
  } else alert("ERROR:your number is higher than 100");
  return size;
}
const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".grid-size");
let gridSize;
gridSizeButton.addEventListener("click", () => {
  gridSize = gridSizePromt();
  toBuiltGrid(gridSize);
});
container.addEventListener("click", () => {
  toBuiltGrid(16);
});
