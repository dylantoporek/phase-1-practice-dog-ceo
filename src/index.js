//console.log('%c HI', 'color: firebrick')
//const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(data => imgHandler(data))

function imgHandler(obj){
    imgArr = [...obj.message]
    let imgBox = document.querySelector("#dog-image-container")
    imgArr.forEach(element => {
        let newDog = document.createElement('img')
        newDog.src = element
        imgBox.appendChild(newDog)

    })
}

fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(data => breedHandler(data))

function breedHandler(obj){
    let breeds = obj.message
    let list = document.querySelector("#dog-breeds")
    for (const breed in breeds){
        let newBreed = document.createElement('li')
        newBreed.setAttribute('class', 'dog')
        newBreed.innerHTML = breed
        list.appendChild(newBreed)
    }
}

