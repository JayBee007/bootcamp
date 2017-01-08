var square = document.getElementsByClassName("square");
var colors = ["rgb(255, 0, 0)",
			  "rgb(255, 0, 255)",
			  "rgb(255, 255, 0)",
			  "rgb(0, 255, 0)",
			  "rgb(0, 255, 255)",
			  "rgb(0, 0, 255)"];
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