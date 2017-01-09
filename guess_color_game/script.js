var square = document.getElementsByClassName("square");
var colors = getRandomColors(6);
var displayColor = document.getElementById("displayColor");
var result = document.getElementById("result");
var h1 = document.querySelector("h1"); 
var selectedColor = pickColor();

displayColor.textContent = selectedColor;



for(var i = 0; i<square.length; i++){
	square[i].style.background = colors[i];
	square[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if(clickedColor === selectedColor){
			result.textContent = "Correct!!";
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

