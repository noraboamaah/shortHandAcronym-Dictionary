var outputAreaRef = document.querySelector(".outputArea");
	var output = " ";



document.querySelector(".btnSearch").addEventListener("click", function(word){
	
		var word = document.querySelector(".word");

	var accronyms = {
	omg: "Oh My God",
	lol: "Laugh Out Loud",
	lmao: "Laugh My Ass Off",
	wtf: "What The F**k"
	};

if (accronyms[word] !== undefined){
	word = accronyms[word];
}

output = word;

outputAreaRef.innerHTML = output;
});
