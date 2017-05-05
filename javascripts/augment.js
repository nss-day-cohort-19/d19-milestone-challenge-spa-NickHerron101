var CarLot = (function (oldCarLot){

	oldCarLot.activateEvents = function (){
		var newDescription = "";
		var cardChange = document.getElementsByClassName("cool");
		console.log("cardChange Array", cardChange);
		var currentDescription = document.getElementById("textDescription");
		currentDescription.addEventListener("keyup", function(event) {
			 newDescription.innerHTML = event.target.value;
		});
	for (var i = 0; i < cardChange.length; i++){
		cardChange[i].addEventListener("click", function(event){
		CarLot.reset();
			console.log(event.currentTarget);
		CarLot.funkedOut(event.currentTarget, "blue");
			//call another function to change border.
		// event.currentTarget.classList.add("different");
		newDescription = event.currentTarget.getElementsByClassName("description")[0];
		currentDescription.focus();
		currentDescription.value = "";
		});
	}
}
	return oldCarLot;
})(CarLot || {})
