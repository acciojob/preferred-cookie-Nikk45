//your JS code here. If required.
let form = document.getElementById('form');

let size = document.getElementById('fontsize');
let color = document.getElementById('fontcolor');

form.addEventListener('submit',(e)=>{
	e.preventDefault();
	let fontSize = size.value;
	let fontColor = color.value;
	console.log(fontColor,fontSize);

	document.cookie = `fontsize = ${fontSize}; path=https://course.acciojob.com/open-web-editor?question=c594255e-e53e-49ef-b3cb-0e68e8866e36`;
	document.cookie = `fontcolor = ${fontColor}; path=https://course.acciojob.com/open-web-editor?question=c594255e-e53e-49ef-b3cb-0e68e8866e36`;

	document.body.style.fontSize = fontSize+"px";
	document.body.style.color = fontColor;
})

document.addEventListener('DOMContentLoaded', (e)=>{
	// e.preventDefault();
	let styles = document.cookie.split(';');
	// console.log(styles);
	let arr = [];
	styles.forEach((style)=>{
		arr.push(style.split("="));	
	})

		// console.log(arr);
	size.value = arr[11][1];
	color.value = arr[10][1];
	document.body.style.fontSize = arr[11][1]+"px";
	document.body.style.color = arr[10][1];
});



