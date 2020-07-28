document.addEventListener("DOMContentLoaded", (event) => {
    const url = 'http://localhost:3000/playlists'
    
    const mySound = document.getElementById("sound");
    const correctButton = document.getElementById("correct");
    correctButton.addEventListener("click", function(){ mySound.play(); }); 

    fetch(url)
    .then(resp => resp.json())
    .then(playlists => playlists)

    const playSound = document.getElementById('sound')
    


	document.addEventListener("keydown", (event) => {
        if(event.code === 'KeyT'){
            playSound.play()
        }
	});
});
