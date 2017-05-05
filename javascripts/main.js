
function populatePage (inventory) {
	// console.log("inventory", inventory);
	var carCards = "";
	var divElement = document.getElementById("container");
	var counter = 0;

	var carsArray = inventory.cars;
		// console.log("carsArray",inventory.cars)
		for (prop in carsArray){
			if (counter % 3 === 0) {
				carCards +=`<div class="row">`
				console.log("row-start", counter);
			}
			 carCards +=
  `<div class="col-sm-4 cool"><h3>${carsArray[prop].make}</h3><h4>${carsArray[prop].model}</h4><h5>Year:${carsArray[prop].year}</h5><h5>Price:${carsArray[prop].price}</h5><p class="description">${carsArray[prop].description}</div>`
  		if ((counter + 1) % 3 === 0) {
  			carCards += `</div>`;
  			console.log("rowEnd",counter);
  		}
  		counter++;

	}
			divElement.innerHTML += carCards;
		CarLot.activateEvents();
}



// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

