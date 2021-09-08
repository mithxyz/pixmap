			// let canvas = document.querySelector('canvas');
			let canvas = document.getElementById("led");
			let context = canvas.getContext('2d');

			// Colour Style
			let tileCol1 = 'red';
			let tileCol2 = 'blue';
			let lineCol = 'white';
			let borderCol = 'green';
			let overflowCol = 'grey';

			// Get LED wall dims
			let widthInput = prompt('Screen Resolution Width?');
			let heightInput = prompt('Screen Resoloution Height?');
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
      		let LEDw = prompt('LED tile Width in Pixels?');
      		let LEDh = prompt('LED tile Height in Pixels?');
      		var tileW = parseInt(LEDw);
      		var tileH = parseInt(LEDh);
      		// const tileW = 192;
      		// const tileH = 192;
      		const tileXcount = Math.floor(width / tileW);
      		const tileYcount = Math.floor(height / tileH);
      		console.log(tileYcount);


      		// Slice
      		const sliceCount = 1; 
      		const sliceX = 0;
      		const sliceY = 0;
      		const sliceWtile = 8;
      		const sliceHtile = 12;
      		const sliceWpix = sliceWtile * tileW;
      		const sliceHpix = sliceHtile * tileH;
      		let sliceIndex = 0;

      		// Tile
      		let tx = 0;
      		let ty = 0;
      		let tile = 0;

      		//Tile Number Font
      		var fontsize = (tileH / 10) + (tileW / 10) / 2;
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
// Line Overlays
				context.lineWidth = "2";
				context.strokeStyle = lineCol;


				context.beginPath();
				context.arc(width / 2, height / 2, height / 3, 0, Math.PI * 2);
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
				


// Print Slice Dims
console.log('Tiles Horz '+ tileXcount);
console.log('Tiles Vert '+ tileYcount);







			var timeStamp = new Date();
			console.log(timeStamp);