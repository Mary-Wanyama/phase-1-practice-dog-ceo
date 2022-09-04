console.log('%c HI', 'color: firebrick')
 document.addEventListener('DOMContentLoaded', function (e) {
  e.preventDefault()
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(data=>renderImgs(data))

function renderImgs(dogs) {
  dogs.message.forEach(dog=>{
    const dogImg = document.querySelector('#dog-image-container')
    const img = document.createElement('img')
    img.src =dog
    dogImg.appendChild(img)
  }
  )
}

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(res=> res.json())
  .then(breeds => renderBreeds(breeds))

  function renderBreeds(dogs) {
    Object.keys(dogs.message).forEach(dog=>{
      const ul = document.querySelector('#dog-breeds')
      const li = document.createElement('li')
      li.innerText = dog
      ul.appendChild(li)
    })
  }
  const edit = document.querySelector('#breed-dropdown')
  edit.addEventListener('change', function(event){
  document.querySelectorAll('#dog-breeds li').forEach(sort => {
      event.preventDefault()
      if (sort.textContent[0]!==event.target.value) {
        sort.style.color= 'red'
        sort.style.font.size = '3px'
      }
      else if (sort.textContent[0]===event.target.value){
        sort.style.display = 'none'
      }
    });
    console.log(event.target.value)
  })
 })

