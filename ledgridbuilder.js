			// let canvas = document.querySelector('canvas');
			let canvas = document.getElementById("led");
			let context = canvas.getContext('2d');
			

			const params = {
				Width: 1920,
				Height: 1080,
				TileWidth: 120,
				TileHeight: 120,
				Name: 'LED WALL',
				FirstTile: 1,
				TextColour: '#FFFFFF',
				Colour1: '#FF0000',
				Colour2: '#0000FF',
				LineColour: '#FFFFFF',
				Outline: '#00FF00',
				Overflow: '#555555',



			};
// TweakPane
const pane = new Tweakpane.Pane({title: 'Settings',});
 			
				pane.addInput(params, 'Width');
				pane.addInput(params, 'Height');
				pane.addInput(params, 'TileWidth');
				pane.addInput(params, 'TileHeight');
				pane.addInput(params, 'Name');
				pane.addInput(params, 'FirstTile');
				pane.addInput(params, 'Colour1');
				pane.addInput(params, 'Colour2');
				pane.addInput(params, 'TextColour');
				pane.addInput(params, 'LineColour');
				pane.addInput(params, 'Outline');
				pane.addInput(params, 'Overflow');

				const btn = pane.addButton({title: 'Update'});




function buildGrid () {
			// Colour Style
			// let tileCol1 = prompt('Odd Colour');
			// let tileCol2 = prompt('Even Colour');
			// let name = prompt('Slice Name');
			let name = params.Name;
			let tileCol1 = params.Colour1;
			let tileCol2 = params.Colour2;
			let fontCol = params.TextColour;
			let lineCol = params.LineColour;
			let borderCol = params.Outline;
			let overflowCol = params.Overflow;

			// Get LED wall dims
			// let widthInput = prompt('Screen Resolution Width?');
			// let heightInput = prompt('Screen Resoloution Height?');
			let widthInput = params.Width;
			let heightInput = params.Height;
			// let widthInput = 1000;
			// let heightInput = 1000;
			let width = parseInt(widthInput);
			let height = parseInt(heightInput);
			let canvasdims = "width:" + widthInput + " height:" + heightInput;

			// Set the canvas resolution
			document.getElementById("led").width = widthInput;
			document.getElementById("led").height = heightInput;

			// Set Background Colour
			context.fillStyle = overflowCol;
    		context.fillRect(0, 0, width, height);

			// LED Tile Module size
      		// let LEDw = prompt('LED tile Width in Pixels?');
      		// let LEDh = prompt('LED tile Height in Pixels?');
      		let LEDw = params.TileWidth;
      		let LEDh = params.TileHeight;
      		// let LEDh = 100;
      		// let LEDw = 100;
      		var tileW = parseInt(LEDw);
      		var tileH = parseInt(LEDh);
      		const tileXcount = Math.floor(width / tileW);
      		const tileYcount = Math.floor(height / tileH);
      		console.log(tileYcount);

      		// Tile
      		let tx = 0;
      		let ty = 0;
      		let tile = params.FirstTile - 1;

      		//Tile Number Font
      		var fontsize = (tileH / 10) + (tileW / 10) / 2;
      		var mainfont = (width / 10) + (height / 10) / 2;
      		context.font = `${fontsize}px Arial`;

      		//Grid
      		let col = 0;
      		let row = 0;

      		
      		// Build LED Grid - Y Loop
      		for (let y = 0; y < tileYcount; y++) {
      		  row = row + 1;
      		  // Build LED Grid - X loop
      		  for (let x = 0; x < tileXcount; x++) {
      		    // Tile numbering
      		    tile = tile + 1;
      		    col = col + 1;
      		    console.log('col ' + col + ' row ' + row + ' tile ' + 	tile);

      		    // Tile colour altertating-----HEAD FUUUUCK!! (There must be an easier method)
      		    // IF the number of columns is even and the current row is even
      		    if (tileXcount % 2 == 0 && row % 2 == 0) {
      		    	// 
      		    	if (tile % 2 == 0) {  
		      		context.fillStyle = tileCol1;
		      		} else {
		      		context.fillStyle = tileCol2;
      		    	}
      		    	context.fillRect(tx, ty, tileW, tileH);
      		    	context.fillStyle = 'white';
      		    	context.fillText(tile, tx + fontsize / 4, ty + fontsize);
      		    	tx = tx + tileW
  					}
      				else {
						// Alternate Tiles (odd even)
		      			if (tile % 2 == 0) {  
		      			context.fillStyle = tileCol2;
		      			} else {
		      			context.fillStyle = tileCol1;
      		   			 }
      		    			context.fillRect(tx, ty, tileW, tileH);
      		    			context.fillStyle = 'white';
      		    			context.fillText(tile, tx + fontsize / 4, ty + fontsize);
      		   			 tx = tx + tileW
  						}
  					}
  						ty = ty + tileH;
  						tx = 0;
			}
// Line - Overlays
				context.lineWidth = "2";
				context.strokeStyle = lineCol;

				context.save();

//Circle
				
				context.beginPath();
				context.arc(width / 2, height / 2, (height / 4) * 1, 0, Math.PI * 2);
				context.stroke();

				context.beginPath();
				context.arc(width / 2, height / 2, (height / 4) * 2, 0, Math.PI * 2);
				context.stroke();

				context.beginPath();
				context.arc(width / 2, height / 2, (height / 4) * 3, 0, Math.PI * 2);
				context.stroke();

				context.beginPath();
				context.arc(width / 2, height / 2, height / 8, 0, Math.PI * 2);
				context.stroke();

				context.beginPath();
				context.moveTo(0, 0);
				context.lineTo(width, height);
				context.stroke();

				context.beginPath();
				context.moveTo(width, 0);
				context.lineTo(0, height);
				context.stroke();

				context.lineWidth = "5";
				context.strokeStyle = borderCol;

				context.beginPath();
				context.moveTo(0, 0);
				context.lineTo(width, 0);
				context.lineTo(width, height);
				context.lineTo(0, height);
				context.lineTo(0, 0);
				context.stroke();

				context.restore();

				context.fillStyle = fontCol;


				if (height > width) {
				context.font = `${mainfont}px Arial`;
				context.translate(width / 2, height / 2);
				context.rotate(-90 * (Math.PI / 180));
				context.textAlign = 'center';
				context.fillText(name, 0, mainfont / 2.5);
} else {
				context.font = `${mainfont}px Arial`;
				context.translate(width / 2, height / 2);
				context.textAlign = 'center';
				context.fillText(name, 0, mainfont / 2.5);
}


}

buildGrid();

pane.on('change', (ev) => { buildGrid()});

// btn.on('click', () => { buildGrid()});

// Print Slice Dims
// console.log('Tiles Horz '+ tileXcount);
// console.log('Tiles Vert '+ tileYcount);







			var timeStamp = new Date();
			console.log(timeStamp);
