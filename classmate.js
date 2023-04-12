const drum = new Audio('audio/drum.mp3');
const symbal = new Audio('audio/symbal.mp3');
let count = 0;
let intervalList = [];
let id = null;
function generateRandomNumber(maxValue) {
	return Math.floor(Math.random() * maxValue) + 1;
}
function keyPress(e){
	if (e.key === " "){
		onClick(e)
	}
}
function onClick(e) {
	count = iter.value;
	generate(max.value);

}
function generate(maxValue) {
	var result = document.getElementById("result");
	var frame = 0;
	if (id !== null){
		clearInterval(id)
	}
	id = setInterval(function(){
		frame += 1;
		resultNumber = String(generateRandomNumber(maxValue));
		result.innerHTML = resultNumber;
		if (Math.random()<1/10 && frame>10){
			end();
			clearInterval(id);
		}
	},100)
	symbal.play();
	symbal.loop = true;
}
function end(){
	var history = document.getElementById("history")
	history.innerHTML += resultNumber+"<br/>";
	count --
	symbal.pause();
	if (count===0){
		drum.play();
	}else{
		setTimeout(()=>generate(max.value),1000);
	}
}
var generateBtn = document.getElementById("generate-btn");
var max = document.getElementById("range");
var iter = document.getElementById("iter");
generateBtn.addEventListener("click", onClick);
document.addEventListener("keypress",keyPress);
