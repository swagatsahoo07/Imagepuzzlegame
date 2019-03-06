function imagePuzzler(){
	window.location = "imagePuzzlerGamePage.html";
}
function validPuzzler(){
	var num = 321654987;
	var temp = document.getElementById("enterValue").value;
	if(num == temp)
		alert("Puzzel solved sucessfully");
	else
		alert("Miss match occour");
}
function puzzleGenerator(){
	alert("This Features will be added");
}