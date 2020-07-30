document.addEventListener("DOMContentLoaded", (event) => {
    const playlistsURL = 'http://localhost:3000/playlists/'
    const usersURL = 'http://localhost:3000/users/'
    const keyboard = document.getElementById('keyboard')
    const loginContainer = document.getElementById('login-container')


    fetch(playlistsURL)
    .then(resp => resp.json())
    .then(playlists => playlists)
    
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
            // alert("Please Signup")
            createUser()
        }
    }

    const renderWelcome = (userCheck) => {
        const playlistForm = document.getElementById('playlist-form') 
        const welcomeBanner = document.createElement('div')
        welcomeBanner.id = 'welcome'
        welcomeBanner.innerHTML += `<h1>Welcome Back ${userCheck}</h1>`
        playlistForm.appendChild(welcomeBanner)

        getPlaylists()
    }// Username Submit Listener

    const createUser = () => {
        const loginSignupValue = loginContainer.children[1].value
        // document.getElementById('welcome').reset();
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

        console.log(e.target.innerText)
    })

}); // DOM Content Loaded

const getPlaylists = ()




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