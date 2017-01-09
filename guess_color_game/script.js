var numSquares = 6;
var result = document.getElementById("result");
var resetButton = document.getElementById("newGame");
var square = document.getElementsByClassName("square");
var colors = getRandomColors(numSquares);
var displayColor = document.getElementById("displayColor");
var easyGame = document.getElementById("easyGame");
var hardGame = document.getElementById("hardGame");
var h1 = document.querySelector("h1"); 
var selectedColor = pickColor();


easyGame.addEventListener("click",function(){
	numSquares = 3;
	this.classList.add("gameMode");
	hardGame.classList.remove("gameMode");
	colors = getRandomColors(numSquares);
	selectedColor = pickColor();
	for(var i = 0; i<square.length;i++){
		if(colors[i]){
			square[i].style.background = colors[i];
		}else {
			square[i].style.display = "none";	
		}
	}
});

hardGame.addEventListener("click",function(){
	numSquares = 6;
	this.classList.add("gameMode");
	easyGame.classList.remove("gameMode");
	colors = getRandomColors(numSquares);
	selectedColor = pickColor();
	for(var i = 0; i<square.length;i++){
		square[i].style.background = colors[i];
		square[i].style.display = "block";	
	}
});


displayColor.textContent = selectedColor;

resetButton.addEventListener("click", function(){
	resetButton.textContent = "New Game";
	h1.style.background = "steelblue";
	colors = getRandomColors(numSquares);
	selectedColor = pickColor();
	displayColor.textContent = selectedColor;
	result.classList.add("result-hide");
	result.classList.remove("result-show");
	for(var i = 0; i<square.length; i++){
	square[i].style.background = colors[i];
	}
});



for(var i = 0; i<square.length; i++){
	square[i].style.background = colors[i];
	square[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if(clickedColor === selectedColor){
			result.textContent = "Correct!!";
			resetButton.textContent = "Play Again?";
			result.classList.remove("result-hide");
			result.classList.add("result-show");
			changeColors(clickedColor);
		}else {
			this.style.background = "#232323";
			result.textContent = "Try Again...";
			result.classList.remove("result-hide");
			result.classList.add("result-show");
		}
	});
}


function changeColors(color){
	for(var i = 0; i<square.length; i++){
		square[i].style.background = color;
	}
	h1.style.background = color;
}

function pickColor() {	
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function getRandomColors(num) {
	var colors = [];
	for(var i =0; i<num; i++){
		var r = getColor();
		var g = getColor();
		var b = getColor();
		colors.push("rgb(" + r + ", " + g + ", " + b +")"); 
	}
	return colors;
}

function getColor() {
	var color = Math.floor(Math.random() * 255 + 1);
	return color;
}

