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
        row.style.opacity -= "-0.1";
      });
    }
  }
}
function gridSizePrompt() {
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
  container.textContent = "";
  gridSize = gridSizePrompt();
  toBuiltGrid(gridSize);
});
window.addEventListener("load", () => {
  toBuiltGrid(16);
});
