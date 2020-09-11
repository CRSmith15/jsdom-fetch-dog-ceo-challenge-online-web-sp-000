console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
.then(resp = resp.json())
.then(result => {
  dogPics(result.message)
})

function dogPics(dogs){
  console.log(dogs)
  dogs.forEach(dog => {
    console.log(dog)
    const goodBoyContainer = document.querySelector('#dog-image-container')
    const goodBoy= document.createElement('img')
    goodBoy.src = dog
    goodBoyContainer.appendChild(goodboy)
  })
}
