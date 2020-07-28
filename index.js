document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Coffee check, Nap check, Laptop on. Ready to code!");
    
    const mySound = document.getElementById("sound");
    const correctButton = document.getElementById("correct");
    correctButton.addEventListener("click", function(){ mySound.play(); }); 

	document.addEventListener("keydown", (event) => {
		console.dir(event);
	});
});
