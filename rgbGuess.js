var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();;
var generatedColorDisplay = document.getElementById("generatedColor");
var messageDisplay = document.querySelector("#message")


generatedColorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//make color
	squares[i].style.background=colors[i];
	//make button
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
		} else {
			messageDisplay.textContent = "Try Again"
			this.style.background = "#232323";
		}
	})
}


function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
	//change each color to match pickedColor

}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]

}

function generateRandomColors(num){
	var arr = []
	for(var i=0;i<num;i++){
		arr.push(randomColor());

	}

	return arr
}	

function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + "," + g + "," + b ")";
}