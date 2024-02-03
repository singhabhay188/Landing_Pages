let playpause = document.querySelector('#playpause');
playpause.addEventListener('click',()=>{
    playpause.classList.toggle('bx-play');
    playpause.classList.toggle('bx-pause');
})

let inputRange = document.querySelector('#musicstatus');

inputRange.addEventListener('input',()=>{
    let v = inputRange.value;
    inputRange.style.background = `linear-gradient(90deg,rgba(225,225,228,255) ${v}%,rgba(133,129,137,255) ${v}%)`
})

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}


