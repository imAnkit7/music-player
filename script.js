const explore = () => {
    document.getElementsByClassName('box')[0].style.backgroundColor = '#2e492a'
}
const unexplore = () => {
    document.getElementsByClassName('box')[0].style.removeProperty("background-color")
}

function changeBg() {
    let navbar = document.querySelector('.header');
    let scrollValue = window.scrollY;
    if (scrollValue < 150) {
        navbar.classList.remove('scrolled')
    } else {
        navbar.classList.add('scrolled')
    }
}

const bar = document.querySelector('.fa-bars')
bar.addEventListener('click', () => {
    let menubar = document.querySelector('.menu');
    menubar.classList.toggle('active')
})

const cross = document.querySelector('.fa-x')
cross.addEventListener('click', () => {
    let menubar = document.querySelector('.menu');
    menubar.classList.remove('active')
})

window.addEventListener('scroll', changeBg)

const songsInfo = [
    {
        id: '1',
        img: 'images/ramji.png',
        song: 'music/Kaushalya_Dashrath.mp3',
        name: 'Kaushalya_Dashrath.mp3'
    },
    {
        id: '2',
        img: 'images/Luv.jpg',
        song: 'music/LUV_LETTER_.mp3',
        name: 'LUV_LETTER_.mp3'
    },
    {
        id: '3',
        img: 'images/fighter.jpg',
        song: 'music/Lover_Also_.mp3',
        name: 'Lover_Also_.mp3'
    },
    {
        id: '4',
        img: 'images/thug.jpg',
        song: 'music/Thug_Le.mp3',
        name: 'Thug_Le.mp3'
    },
]

const nextdata = [
    {
        id: '1',
        img: 'images/thug.jpg',
        song: 'music/Thug_Le.mp3',
        name: 'Thug_Le.mp3'
    },
    {
        id: '2',
        img: 'images/besabriyaan.jpg',
        song: 'music/BESABRIYAAN.mp3',
        name: 'BESABRIYAAN.mp3'
    },
    {
        id: '3',
        img: 'images/jadu.jpg',
        song: 'music/Kaala_Jaadu.mp3',
        name: 'Kaala_Jaadu.mp3'
    },
    {
        id: '4',
        img: 'images/adat.jpg',
        song: 'music/Aadat_Se.mp3',
        name: 'Aadat_Se.mp3'
    }
]

const container = document.querySelector('.songCard')
const container2 = document.querySelector('.songCard2')
const showCard = songsInfo.map((project, index) => {
    return `
    <div class="card" onclick="playAudio('${project.song}')" ondblclick="pauseAudio('${project.song}')">
        <img id="img" src=${project.img}>
        <div class="desc">
            <i class="fa-solid fa-circle-play playIcon"></i>
            <h4>${project.name}</h4>
            <h5>By Sangeet.com</h5>
        </div>
    </div>
    `
})

const showCard2 = nextdata.map((project, index) => {
    return `
    <div class="card" onclick="playAudio('${project.song}')" ondblclick="pauseAudio('${project.song}')">
        <img id="img" src=${project.img}>
        <div class="desc">
            <i class="fa-solid fa-circle-play playIcon"></i>
            <h4>${project.name}</h4>
            <h5>By Sangeet.com</h5>
        </div>
    </div>
    `
})

container.innerHTML = showCard
container2.innerHTML = showCard2

// ------------------------------------------------
const cards = document.getElementsByClassName('card')

//   setTimeout(alertFunc,2000)
// const 
var audio = new Audio()
const playAudio = (src) => {
    audio.src = src
    audio.play();
    // alert('double click to pause')
}

const pauseAudio=()=>{
    // audio.src = src
    audio.pause();
}



