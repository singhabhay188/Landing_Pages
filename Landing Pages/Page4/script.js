let image = document.querySelector('img');

let x = image.getClientRects();
let middle = (x[0].right+x[0].left) /2;

//image.style.transform = 'rotateX(50deg)';

image.addEventListener('mousemove',dets=>{
    let rotx = 68 - dets.clientX/11;
    let roty = Math.abs(rotx);

    image.style.transform = `rotateX(${rotx}deg) rotateY(${roty}deg)`;
})

image.addEventListener('mouseleave',()=>{
    image.style.transform = `rotateX(0deg) rotateY(0deg)`;
})


let cursor = document.querySelector('#cursor');
document.querySelector('body').addEventListener('mousemove',dets=>{
    let x = dets.clientX;
    let y = dets.clientY;

    console.log(x,y);
    cursor.style.top = `${y}px`;
    cursor.style.left = `${x}px`;
})