const drum = new Audio('audio/drum.mp3');
const symbal = new Audio('audio/symbal.mp3');
function generateRandomNumber() {
	return Math.floor(Math.random() * 36) + 1; // 1����36�܂ł̃����_���Ȑ���Ԃ�
}


function generate() {
	var result = document.getElementById("result");
	var frame = 0;
	const id = setInterval(function(){
		frame += 1;
		result.innerHTML = generateRandomNumber();
		if (Math.random()<1/10 && frame>10){
			end();
			clearInterval(id);
		}
	},100)
	symbal.play();
	symbal.loop = true;
}
function end(){
	symbal.pause();
	drum.play();
}
var generateBtn = document.getElementById("generate-btn"); // �{�^�����擾
generateBtn.addEventListener("click", generate); // �{�^���ɃN���b�N�C�x���g��ǉ�

//////////////////////////////////////////////////////////////////////////////

// //画面に画像を表示する
document.write( '<img id="images" src="images/penguin.png">' );

// //キャラクターを動かす
var y = 0;
 document.getElementById( 'rico' ).onclick = function() {
	y += 32;
 	document.getElementById( 'rico' ).style.top = y + "px";
}
