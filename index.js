document.addEventListener("DOMContentLoaded", (event) => {
    const playlistsURL = 'http://localhost:3000/playlists/'
    const usersURL = 'http://localhost:3000/users/'
    const keyboard = document.getElementById('keyboard')
    const loginContainer = document.getElementById('login-container')
    

    document.addEventListener('submit', (event)=>{
        event.preventDefault()
            if(loginContainer.children[2].id === "log-in"){
                fetch(usersURL)
                .then(resp => resp.json())
                .then(users => usersHandler(users))
            } 
            else if(loginContainer.children[3].id === "submit"){
                createUser()
            }
    }) // if user form
    

    const usersHandler = (users) => {
        const loginSignupValue = loginContainer.children[1].value
        let allNames = []
        users.forEach(user => allNames.push(user.username))
        const userCheck = allNames.find(name => name === loginSignupValue)
        if(userCheck){
            renderWelcome(userCheck)
        } else {
            createUser()
        }
    }


    const renderWelcome = (userCheck) => {
        const playlistForm = document.getElementById('playlist-form') 
        const welcomeBanner = document.createElement('div')
        welcomeBanner.id = 'welcome'
        welcomeBanner.innerHTML += `<h1>Welcome Back ${userCheck}</h1>`
        playlistForm.appendChild(welcomeBanner)
    }// Username Submit Listener

    const createUser = () => {
        const loginSignupValue = loginContainer.children[1].value
        console.log("Why are you here?")
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
        .then(resp => resp.json())
        .then(userCheck => renderWelcome(userCheck))
    }





    ///////////////// DISABLE WHILE FORM ELEMENT ARE SELECTED?//////////////////////
	// document.addEventListener("keydown", (event) => {
    //     const sound = event.code
    //     // console.log(event.code)
    //     const playSound = document.getElementById(sound)
    //     const fancySpan = document.getElementById('fancy-span')
    //     fancySpan.innerText = event.key.toUpperCase()
    //     playSound.play()
    // });
    ///////////////// DISABLE WHILE FORM ELEMENT ARE SELECTED?//////////////////////

    
    keyboard.addEventListener('click', (e) => {
        const keyboardLi = document.querySelector('li')
        const fancySpan = document.getElementById('fancy-span')
        const eventTarget = e.target.innerText
        const playSound = document.getElementById(`Key${eventTarget}`)
        playSound.play()
        fancySpan.innerText = eventTarget
    })

    const getPlaylists = (playlistsURL) => {
        fetch(playlistsURL)
        .then(resp => resp.json())
        .then(playlists => renderPlaylist(playlists))
    }

    const renderPlaylist = (playlists) => {
        const playlistSize = 10;
        let allPlaylists = []
        playlists.forEach(playlist => allPlaylists.push(playlist))
        const displayPlaylists = allPlaylists.slice(0, playlistSize)
        
        displayPlaylists.forEach(playlist => playlistLister(playlist))
    }

    const playlistLister = (playlist) => {
        const fancyContainer = document.getElementById('playlist-goes-here')
        const playlistContainer = document.createElement('div')
        playlistContainer.className = 'playlist-container'
        playlistContainer.innerHTML += 
        `
        <div><h3>${playlist.sequence}</h3></div><button id=${playlist.id} class='edit-btn'>Edit</button><button id=${playlist.id} class='delete-btn'>Delete</button>
        `
        fancyContainer.appendChild(playlistContainer)
    }

    document.addEventListener('click', (event) => {
        if (event.target.className === 'delete-btn') {
            deletePlaylist(event.target.id)
        }
        else if (event.target.className === 'edit-btn') {
            const sequenceField = document.getElementById('sequence-field')
            sequenceValue = sequenceField.value
            // updatePlaylist(event.target.id)
        }
    })
    
    
    const updatePlaylist = (id) => {
        

        fetch((playlistsURL + id), {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'sequence': name,
        })
        })
        .then(resp => resp.json())
        .then(thing => renderthing(thing))
    }


    
    getPlaylists(playlistsURL)
}); // DOM Content Loaded




  // const sequenceContainer = document.getElementById("playlist-form")
// const sequenceValue = // console.log(sequenceContainer.children)


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