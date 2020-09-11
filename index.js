function applytheme(theme){
	document.body.classList.remove('tauto','tlight','tdark');
	document.body.classList.add(theme);
}

let theme=localStorage.getItem("theme") || "tauto";
applytheme(theme);
document.querySelector("#themeselector").value=theme;

document.querySelector("#themeselector").addEventListener("change",themeselect);

function themeselect(){
    let currenttheme=this.value;
   	applytheme(currenttheme);
   	localStorage.setItem("theme",currenttheme);
}