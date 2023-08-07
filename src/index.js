// write your code here
fetch('http://localhost:3000/ramens')
.then(r => r.json())
.then(data => {
    data.forEach(ramenMenu)
    fillCard(data[0])
})

function ramenMenu(data){
    const menuImg = document.createElement('img')
    const menu = document.querySelector('#ramen-menu')

    menuImg.src = data.image
    menu.appendChild(menuImg)

    menuImg.addEventListener('click',()=>{
        fillCard(data)
    })
}

function fillCard(data){
    const mainImg = document.querySelector('.detail-image')
    const ramenName = document.querySelector('.name')
    const rest = document.querySelector('.restaurant')
    const rate = document.querySelector('#rating-display')
    const comm = document.querySelector('#comment-display')

    mainImg.src = data.image
    ramenName.textContent = data.name
    rest.textContent = data.restaurant
    rate.textContent = data.rating
    comm.textContent = data.comment
}

function postRamen(){
    const newName = document.querySelector('#new-name')
    const newRest = document.querySelector('#new-restaurant')
    const newImg = document.querySelector('#new-image')
    const newRate = document.querySelector('#new-rating')
    const newCom = document.querySelector('#new-comment')

    fetch('http://localhost:3000/ramens',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json'
    },body: JSON.stringify({
        name: newName.value,
        image: newImg.value,
        restaurant: newRest.value,
        rating: newRate.value,
        comment: newCom.value,
    })
    }).then(r=> r.json())
    .then(data => ramenMenu(data))
    
}


const form = document.querySelector('#new-ramen')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    postRamen()
})