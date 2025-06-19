// Create a webpage that allows the user to draw on the grid using their mouse.

// Capture grid container element
const gridContainer = document.getElementById("grid-container");
console.log(gridContainer);

// Button to change the size of the grid (only limited up to 100)
const gridButton = document.getElementById("rightKnob");
console.log(gridButton);

//Reset button
resetButton = document.getElementById("leftKnob");
console.log(resetButton);

// Set the default grid to 16 x 16 when app is rendered
let defaultGrid = 16;

// Change grid button will prompt the user
// to enter a number (not exceeding 100 & not below 3)
// and have the current div be removed
// in exchange for the new grid number
// the user entered
gridButton.addEventListener("click", function () {
  const gridChange = prompt("how would you like your grid to look like?");
  if (gridChange < 2 || gridChange > 100) {
    alert("Error! Please choose between 2 and 100");
  } else {
    defaultGrid = Number(gridChange);
    console.log("Grid Change", gridChange);
    console.log("Default Grid", defaultGrid);
    generateGrid(defaultGrid);
  }
});

// Use a for loop to generate new divs for grid-container
//Check if user entered their own grid number through prompt

function generateGrid(defaultGrid) {
  console.log("before wipe", gridContainer.children.length);
  gridContainer.innerHTML = "";
  console.log("After wipe", gridContainer.children.length);

  // Cell grid size to make sure that width of grid container
  // will be divided by the defualtGrid variable,
  // even when it changes by the user
  const gridCellSize = 342 / defaultGrid;

  for (i = 0; i < defaultGrid * defaultGrid; i++) {
    // Create a variable that will generate a div
    // These div's will generate until the for loop meets its condition
    const gridCell = document.createElement(`div`);
    gridCell.classList.add("grid-cell");

    // Set the width and height of grid cells by
    // matching it with the cellSize (342 / defaultGrid)
    gridCell.style.width = `${gridCellSize}px`;
    gridCell.style.height = `${gridCellSize}px`;

    // The grid-cell class will be appended as a child to the
    // containerGrid in order for the cells to be displayed
    gridContainer.appendChild(gridCell);

    // whenever the user hovers over a grid-cell, the background colour
    // should be turned to black
    gridCell.addEventListener("mousemove", function () {
      gridCell.classList.add("hover");
    });

    // Reset the cell's back to white when clicking on reset button
    resetButton.addEventListener("click", function () {
      gridCell.classList.remove("hover");
    });
  }
}

generateGrid(defaultGrid);
