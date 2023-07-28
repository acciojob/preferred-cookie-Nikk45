//your JS code here. If required.
let form = document.getElementById('form');

let size = document.getElementById('fontsize');
let color = document.getElementById('fontcolor');

form.addEventListener('submit',(e)=>{
	e.preventDefault();
	let fontSize = size.value;
	let fontColor = color.value;
	console.log(fontColor,fontSize);

	document.cookie = `fontSize = ${fontSize}; path=https://course.acciojob.com/open-web-editor?question=c594255e-e53e-49ef-b3cb-0e68e8866e36`;
	document.cookie = `fontColor = ${fontColor}; path=https://course.acciojob.com/open-web-editor?question=c594255e-e53e-49ef-b3cb-0e68e8866e36`;

	document.body.style.fontSize = fontSize+"px";
	document.body.style.color = fontColor;
})

document.addEventListener('DOMContentLoaded', (e)=>{
	e.preventDefault();
	let styles = document.cookie.split(';');
	console.log(styles);
	styles.forEach((style)=>{
		let arr = style.split("=");
		console.log(arr[1]);
		
		if(arr[0]==="fontSize"){
			size.value = arr[1];
			document.body.style.fontSize = fontSize+"px";
		}
		else if(arr[0] === 'fontColor'){
			color.value = arr[1];
			document.body.style.color = fontColor;
		}
	})
});



