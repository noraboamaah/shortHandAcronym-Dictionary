var outputAreaRef = document.querySelector(".outputArea");
var button = document.querySelector(".btnSearch");
	var output = " ";



button.addEventListener("click", search); 

	function search(){
	
		var word = document.querySelector(".word").value;

				var accronyms = {
				omg: "Oh My God",
				lol: "Laugh Out Loud",
				lmao: "Laugh My Ass Off",
				wtf: "What The F**k",
				rn: "Right Now", 
				nvm: "Never Mind",
				tb: "throw back",
				tbt: "throw back thursday",
				mcm: "Man Cruch Monday",
				mcw: "Man Cruch Wednesday",
				mce: "Man Crush Everyday",
				wcm: "Woman Crush Monday",
				wce: "Woman Crush Everyday",
				tbh: "To be Honest",
				brb: "Be Right back",
				wyd: "What You Doing",
				wydrn: "What you Doing Right Now",
				kmft: "Kommot For There",
				fk: "F**k You",
				smh: "Shaking My Head",
				smhvh: "Shaking My Head Very Hard",
				bs: "bullshit"
			};

if (accronyms[word] !== undefined){
	word = accronyms[word];
}

output = word;

outputAreaRef.innerHTML = output;
};
