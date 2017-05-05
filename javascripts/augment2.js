var CarLot = (function (oldCarLot){

	oldCarLot.reset = function () {
		// console.log("resetRunning");

		var different = document.getElementsByClassName("blue");
		for(var i = 0; i < different.length; i++){
			// console.log(different[i]);
			// different[i].addEventListener("click", function(event){
				different[i].classList.remove("blue");
			// });
		}
	}

	oldCarLot.funkedOut = function (card, color) {
		// console.log(card);
		card.classList.add("blue");

	}


	return oldCarLot;
})(CarLot || {})

