document.addEventListener("DOMContentLoaded", (event) => {
    const url = 'http://localhost:3000/playlists'
    // const userForm = document.querySelector('form')
    // console.log(userForm)

    fetch(url)
    .then(resp => resp.json())
    .then(playlists => playlists)


    function postUser(url, newUserObj){
        fetch(url, {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newUserObj)
        })
        .then(resp => resp.json())
        .then(addedUser => renderNewUser(addedUser))
    }// .postUser
    

    // document.addEventListener('submit', (e)=>{
    //     e.preventDefault();
    //     console.log(usernameTarget)
    //     const newUser = {
    //         username: e.target.querySelector('#log-in-field').value
    //     } // New User
        
    //     postUser('http://localhost:3000/users', newUser)
    // }) // 'Submit' Event Listener
    
    document.addEventListener('submit', (e)=>{
        e.preventDefault()
        const usernameTarget = e.target.
        //.querySelector('#log-in-field')
        console.log(usernameTarget)
    })











	// document.addEventListener("keydown", (event) => {
    //     const sound = event.code
    //     // console.log(event.code)
    //     const playSound = document.getElementById(sound)
    //     const fancySpan = document.getElementById('fancy-span')
    //     fancySpan.innerText = event.key.toUpperCase()
    //      playSound.play()
        
<<<<<<< HEAD
    });


=======
    // });
>>>>>>> 22dd7253390f61a98bfb20e46211793e51513204
    
    // document.addEventListener('click', (e) => {
    //     // if(){}
    //     // console.dir(e.target.parentElement.attributes[1])
    //     const keyboardLi = document.querySelector('li')
    //     // console.log(keyboardLi)
    //     // console.log(e.target.parentElement)
    //     const fancySpan = document.getElementById('fancy-span')
    //     const eventTarget = e.target.innerText
    //     const playSound = document.getElementById(`Key${eventTarget}`)
    //     playSound.play()
    //      fancySpan.innerText = eventTarget

    //     console.log(e.target.innerText)
    //  })

}); // DOM Content Loaded






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