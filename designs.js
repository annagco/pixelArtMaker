// Select color input
const colorInput = document.getElementById('colorPicker');
// Select size input
const sizePicker = document.getElementById('sizePicker');

const trList = [];

sizePicker.addEventListener("submit", makeGrid);
pixelCanvas.addEventListener('click', colorFill);

// When size is submitted by the user, call makeGrid()
function makeGrid(e) {
  preventRefresh(e);
  cleanGrid();
  insertTableCells();
}

// will create the Grid
function insertTableCells(){
  const pixelCanvas = document.getElementById('pixelCanvas');
  const heightInput = document.getElementById('inputHeight');
  const widthInput = document.getElementById('inputWidth');

  for (let row = 0; row < heightInput.value; row++){
    tr = document.createElement('tr');
    trList.push(tr); // will add rows to trList to use them in cleanGrid
    pixelCanvas.appendChild(tr);
    for (let column = 0; column < widthInput.value; column++) {
      td = document.createElement('td');
      tr.appendChild(td);
    }
  }
}

// cleanGrid will remove the table rows, if there are any
function cleanGrid(){
  trList.forEach(function (tr) {
    tr.remove();
  });
}

function preventRefresh(e){
  if(e.preventDefault)
  {
    e.preventDefault();
  }
  else
  {
    e.returnValue=false;
  }
}

function colorFill(evt){
  if (evt.target.nodeName.toLowerCase() === 'td') {
    evt.target.style.backgroundColor = colorInput.value;
  }
}
