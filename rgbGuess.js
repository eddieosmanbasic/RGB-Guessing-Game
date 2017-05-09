var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var generatedColorDisplay = document.getElementById("generatedColor");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var newColors = document.querySelector("#newColors")
var easyButton = document.querySelector("#easy")
var hardButton = document.querySelector("#hard")


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
			h1.style.background = clickedColor
		} else {
			messageDisplay.textContent = "Try Again"
			this.style.background = "#232323";
		}
	})
}

newColors.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	generatedColorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++) {
		squares[i].style.background=colors[i];
	}
	newColors.textContent = "Play Again?";
	h1.style.background = "#232323";

})

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor();
	generatedColorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none"
		}
	}
	newColors.textContent = "Play Again?";
	h1.style.background = "#232323";


})

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected")
	hardButton.classList.add("selected")
	numSquares = 6;
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor();
	generatedColorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++) {
		squares[i].style.background=colors[i];
		squares[i].style.display = "block";
	}
	newColors.textContent = "Play Again?";
	h1.style.background = "#232323";
})




function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
	//change each color to match pickedColor

}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];

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
	return "rgb(" + r + ", " + g + ", " + b + ")";
}