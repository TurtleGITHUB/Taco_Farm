/* Script file for the Chapter 12 - Taco Farm app */

// event listener for the button click
document.getElementById("button").addEventListener("click", addTaco);

// global variable which starts the taco count at zero
var tacoAmount = 0;

// definition of the addTaco() function
function addTaco() {

	
		// Increment the tacoAmount when the function starts
		tacoAmount++;

	if(tacoAmount <= 10) {
		// write the tacoAmount to the document
		document.getElementById("tacoCount").textContent = tacoAmount;
		// variable create the data for a new <img> element node
		var newImg = document.createElement("img");
		// set the src attribute of that new <img> element node
		newImg.setAttribute("src", "tacos.png");
		// append the completed <img> node to the document
		document.getElementById("tacoFarm").appendChild(newImg);
	} else {	
		document.getElementsByTagName("h3")[0].innerHTML = "WOAH, TOO MANY TACOS!";
		document.getElementById("button").removeEventListener("click", addTaco);

	}
}