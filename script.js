// Variables (Selects html elements and gives them variables)
const grid = document.querySelector('#grid');
const colorPicker = document.querySelector('#color');
const hexInput = document.querySelector('#hex');
const clearButton = document.querySelector('#clear');

// Event listeners for 16x16 and 32x32 buttons
document.getElementById("16x16").onclick = function() {
  createGrid(16, 512); // call up creategrid to create 16x16 grid with 512 pixels
};

document.getElementById("32x32").onclick = function() {
  createGrid(32, 512); // call up creategrid to create 32x32 grid with 512 pixels
};

// Function used to create grid when the user hovers
function createGrid(size) {
  grid.innerHTML = ''; // Clear the grid
  createGridCells(size);
}

// Recursive Function create grid cells
function createGridCells(size, index = 0) {
  if (index >= size * size) {
    return; // Base case: All cells created
  }

  const content = document.createElement('div'); // create grid cell
  content.classList.add('grid');
  content.style.border = '0.5px solid red'; // set border style for the cell
  content.setAttribute('style', `flex: 1; flex-basis: ${512 / size}px;`); // set size of the cell
  grid.appendChild(content); // Add cell to grid

  createGridCells(size, index + 1); // Recursive call
}

let isTrue = false;

// event listener for hovering over the grid
grid.addEventListener('mouseover', function(e) {
  e.target.style.background = 'black'; // Make black the standard color if a color is not chosen
  clearButton.addEventListener('click', () => {
  e.target.style.background = 'white'; // When clicking clear grid, the whole grid turns white
  });
});
// event listner for when picking a color
colorPicker.addEventListener('input', () => {
  let color = colorPicker.value; // get selected color 
  hexInput.value = color; // Get color value in hex input field
  grid.addEventListener('mouseover', function(e) {
    e.target.style.background = color;
    clearButton.addEventListener('click', () => {
      e.target.style.background = 'white'; // When clicking clear grid, the whole grid turns white
    });
  });
});

// Function perform bubble sort 
function bubbleSortGrid(){
  const gridElements = Array.from(grid.querySelectorAll('.grid')); // convert the grid cells to array
  let sorted = false;

  while(!sorted){
    sorted = false;
    for(let i = 0; i < gridElements.length - 1; i++){
      const currentColor = getComputedStyle(gridElements[i]).backgroundColor; // Get background color of current cell.
      const nextColor = getComputedStyle(gridElements[i + 1]).backgroundColor; // get background color of the cell next to it

      if(currentColor > nextColor) {
        grid.insertBefore(gridElements[i + 1], gridElements[i]) // swap the positions of the cell
        sorted = true; // set sorted to true if a swap occurs
      }
    }
  }
}

// Event listner for the sort button that will call the bubbleSortGrid function when clicked
document.getElementById("sort").onclick = function() {
  bubbleSortGrid();
} 
// Clear grid
function clearGrid() {
  $('#grid div').empty(); // removes contents of all grid cells
}
// Event listener for the clear button
clearButton.addEventListener('click', clearGrid);
