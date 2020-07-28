document.addEventListener("DOMContentLoaded", (event) => {
    const url = 'http://localhost:3000/playlists'
    
    const mySound = document.getElementById("sound");
    const correctButton = document.getElementById("correct");
    correctButton.addEventListener("click", function(){ mySound.play(); }); 

    fetch(url)
    .then(resp => resp.json())
    .then(playlists => console.log(playlists))




	document.addEventListener("keydown", (event) => {
		console.dir(event);
	});
});
