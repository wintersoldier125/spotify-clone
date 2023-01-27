console.log('welcome to spotify')
//initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let mastersongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// let songItemplay =Array.from(document.getElementsByClassName("songItemplay"));

// console.log(songItemplay)

let songs = [
    { songName: 'spectre1', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'spectre2', filePath: 'song/2.mp3', coverPath: 'covers/2.jpg' },
    { songName: 'spectre3', filePath: 'song/3.mp3', coverPath: 'covers/3.jpg' },
    { songName: 'spectre4', filePath: 'song/4.mp3', coverPath: 'covers/4.jpg' },
    { songName: 'spectre5', filePath: 'song/5.mp3', coverPath: 'covers/5.jpg' },
    { songName: 'spectre6', filePath: 'song/6.mp3', coverPath: 'covers/6.jpg' },
    { songName: 'spectre7', filePath: 'song/7.mp3', coverPath: 'covers/7.jpg' },
    { songName: 'spectre8', filePath: 'song/8.mp3', coverPath: 'covers/8.jpg' },
    { songName: 'spectre9', filePath: 'song/9.mp3', coverPath: 'covers/9.jpg' },
    { songName: 'spectre10', filePath: 'song/10.mp3', coverPath: 'covers/10.jpg' }
]


songItems.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
})
//audio element
// audioElement.play()

//handle play pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        mastersongName.innerText = songs[songIndex].songName
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate')

    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress)

    myProgressBar.value = progress;
    //updateeseekbal
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

// songItemplay.forEach((element) =>{
//     element.addEventListener('click', ()=>{
//         console.log(element)
//     })
// })


const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `songs/${songIndex + 1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        mastersongName.innerText = songs[songIndex].songName
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')

    })
})

document.getElementById('after').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    mastersongName.innerText = songs[songIndex].songName
    audioElement.src = `songs/${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9
    }
    else {
        songIndex -= 1
    }
    mastersongName.innerText = songs[songIndex].songName
    audioElement.src = `songs/${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')

})

