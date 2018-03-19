
 // --------------- C R E A T E   G R I D ----------------
function makeGrid() {  
  // choose size
  let height = $("#input_height").val();
  let width = $("#input_width").val();
  let table = $("#pixel_canvas");
  
  // deletes already existing grid
  table.empty();
  
  //max width/height = 15, if more, change number to 15
  if (height > 15) {
    height = 15;
  }
  if (width > 15) {
    width = 15;
  }
  
  //create grid
	for (let i = 0; i < height; i++) {
		table.append("<tr></tr>");
		for (let j = 0; j < width; j++) {
			table.children().last().append("<td></td>");
		}
	}
}

// When size is submitted by the user, call makeGrid()
$("#button_create").click(function(event) {
  event.preventDefault();
  makeGrid();
});

// ---------------- P A I N T   C E L L -------------------
// paint cell at clicking on cell with selected color
$("#pixel_canvas").on("click", "td", function() {
  // select color
  let color = $("#colorPicker").val();
  // change color of cell with selected color
  $(this).css("background-color", color);
});

// double click deletes color in one cell
$("#pixel_canvas").on("dblclick", "td", function() {
  $(this).css("background-color", "");
});

// paint cells while dragging mouse over cells
// I haven't figured it out yet how to do this


// --------------- D E L E T E   G R I D --------------------
// when pressing button Delete canvas, grid will dissapear
$("#button_delete").click(function(event) {
  event.preventDefault();
  $("#pixel_canvas").empty();
});
