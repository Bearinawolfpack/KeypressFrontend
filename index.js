document.addEventListener("DOMContentLoaded", (event) => {
    const url = 'http://localhost:3000/playlists'
    
 

    fetch(url)
    .then(resp => resp.json())
    .then(playlists => playlists)

    


	document.addEventListener("keydown", (event) => {
        const sound = event.code
        const playSound = document.getElementById(sound)
        console.log(playSound)
            playSound.play()
        
    });
    









});

