document.addEventListener("DOMContentLoaded", (event) => {
    const playlistsURL = 'http://localhost:3000/playlists/'
    const usersURL = 'http://localhost:3000/users/'
    const keyboard = document.getElementById('keyboard')
    const loginContainer = document.getElementById('login-container')
    const playlistContainer = document.getElementById('playlist-container')
    const playlistForm = document.getElementById('playlist-form')  
    const editedSequence = playlistContainer.children[1].value
    
    
    document.addEventListener('submit', (event)=>{
        event.preventDefault()
        // console.log(event.target.id)
            if(loginContainer.children[2].id === "log-in"){
                getUsers(usersURL)
            } 
            else if (event.target.id === 'save'){
                console.log(editedSequence)
            }
            // else {
            //     createUser()
            // }
    }) // submit listener

    const getUsers = (usersURL) => {
        fetch(usersURL)
        .then(resp => resp.json())
        .then(users => (
            // console.log(users),
            usersHandler(users)))
    }
    

    const usersHandler = (users) => {
        const loginSignupValue = loginContainer.children[1].value
        let allNames = []
        users.forEach(user => allNames.push(user.username))
        const userCheck = allNames.find(name => name === loginSignupValue)
        if(userCheck){
            renderWelcome(userCheck)
        } else {
            createUser(loginSignupValue)
        } // valid user?
    } // .usersHandler


    const renderWelcome = (user) => {
        const welcomeBanner = document.createElement('div')
        welcomeBanner.id = 'welcome'
        welcomeBanner.innerHTML += `<h1>Welcome Back ${user}</h1>`
        playlistForm.appendChild(welcomeBanner)
    } // Username Submit Listener

    const createUser = (loginSignupValue) => {
        // const loginSignupValue = loginContainer.children[1].value
        console.log(loginSignupValue)
        fetch(usersURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'username': `${loginSignupValue}`
            })
        })
        .then(response => response.json())
        .then(user => renderWelcome(user))
    } // .createUser

    keyboard.addEventListener('click', (e) => {
        const fancySpan = document.getElementById('fancy-span')
        const eventTarget = e.target.innerText
        const playSound = document.getElementById(`Key${eventTarget}`)
        playSound.play()
        fancySpan.innerText = eventTarget
    }) // keyboard event listener

    const getPlaylists = (playlistsURL) => {
        fetch(playlistsURL)
        .then(resp => resp.json())
        .then(playlists => renderPlaylist(playlists))
    } // .getPlaylists

    const renderPlaylist = (playlists) => {
        const playlistSize = 10;
        let allPlaylists = []
        playlists.forEach(playlist => allPlaylists.push(playlist))
        const displayPlaylists = allPlaylists.slice(0, playlistSize)
        
        displayPlaylists.forEach(playlist => playlistLister(playlist))
    } // .renderPlaylist

    const playlistLister = (playlist) => {
        const fancyContainer = document.getElementById('playlist-goes-here')
        const playlistContainer = document.createElement('div')
        playlistContainer.className = 'playlist-container'
        playlistContainer.innerHTML += 
        `
        <div><h3>${playlist.sequence}</h3></div><button id=${playlist.id} class='edit-btn'>Edit</button><button id=${playlist.id} class='delete-btn'>Delete</button>
        `
        fancyContainer.appendChild(playlistContainer)
    } // .playlistLister

    document.addEventListener('click', (event) => {
        if (event.target.className === 'delete-btn') {
            deletePlaylist(event.target.id)
        }
        else if (event.target.className === 'edit-btn') {
            updatePlaylist(event.target.id)
        }
    }) // document click listener
    
    
    const updatePlaylist = (id) => {
        fetch(playlistsURL + id)
        .then(resp => resp.json())
        .then(playlist => sequenceEditor(playlist))
    } // .updatePlaylist
    

    playlistContainer.addEventListener('click', (event) => {
        if(event.target.id === "play-button"){
            sortPlaylist(playlistContainer.children[1].value)
        }
    })

    const sortPlaylist = (sequenceValue) => {
        let letterArray = []
        sequenceValue.split("").forEach(letter => letterArray.push(letter));

        for (let i=0; i<=letterArray.length; i++) { 
            task(i); 
        }
        function task(i) { 
            setTimeout(function() {
                playPlaylist(letterArray[i]) 
            }, 1000 * i); 
        } 
        // playPlaylist(letter)
    }

    const playPlaylist = (letter) => {
        const playSound = document.getElementById(`Key${letter.toUpperCase()}`) // add to uppercase to prevent bugs
        playSound.play()
        // setTimeout(()=> {}, 1000)
    }

    const sequenceEditor = (playlist) => {
        playlistContainer.children[1].value = playlist.sequence
    } // .sequenceEditor


    // const playlistPost = (editedSequence) => {

    //     console.log(editedSequence)
        // fetch((playlistsURL + id), {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         'sequence': $`{}`,
        //     })
        //     })
        //     .then(resp => resp.json())
        //     .then(playlist => renderPlaylist(playlist))
    // }


    
    
    ///////////////// DISABLE WHILE FORM ELEMENT ARE SELECTED?//////////////////////
	document.addEventListener("keydown", (event) => {
        const sound = event.code
        // console.log(event.code)
        const playSound = document.getElementById(sound)
        const fancySpan = document.getElementById('fancy-span')
        fancySpan.innerText = event.key.toUpperCase()
        playSound.play()
    });
    ///////////////// DISABLE WHILE FORM ELEMENT ARE SELECTED?//////////////////////
    
    getPlaylists(playlistsURL)
}); // DOM Content Loaded




// const sequenceContainer = document.getElementById("playlist-form")
// const sequenceValue = 
// console.log(sequenceContainer.children[0])


// get all playlists
    // parse that list of playlists of all playlists that do not belong to that user
    // lists sequences that belong to current user under that user's banner with their own divs and buttons (delete, update)





//---------------------------TEMPLATE------------------------------------------
    // function postMonster(url, newMonsterObject){
    //     fetch(url, {
    //         method: "POST",
    //         headers: 
    //         {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //         },
    //         body: JSON.stringify(newMonsterObject)
    //     })
    //     .then(resp => resp.json())
    //     .then(monsterThatWasAdded => renderMonster(monsterThatWasAdded))
    // }
       // monsterCollection.addEventListener('submit', function(e){
    //     e.preventDefault()

    //     const newMonster = {
    //         name: e.target.querySelector('#name').value,
    //         age: e.target.querySelector('#age').value,
    //         description: e.target.querySelector('#description').value
    //     }

    //     postMonster('http://localhost:3000/monsters', newMonster)
    //     monsterCollection.reset()
    // })
//------------------------------TEMPLATE-----------------------------------



// function postUser(playlistsURL, newUserObj){
    //     fetch(playlistsURL, {
    //         method: "POST",
    //         headers:
    //         {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(newUserObj)
    //     })
    //     .then(resp => resp.json())
    //     .then(addedUser => renderNewUser(addedUser))
    // }// .postUser
    // document.addEventListener('submit', (e)=>{
    //     e.preventDefault();
    //     console.log(usernameTarget)
    //     const newUser = {
    //         username: e.target.querySelector('#log-in-field').value
    //     } // New User
        
    //     postUser('http://localhost:3000/users', newUser)
    // }) // 'Submit' Event Listener


         // else if(event.target.id === 'playlist-form'){
        //     const playlistContainer = document.getElementById('playlist-container')
        //     console.log(playlistContainer.children[1].value)
        // }