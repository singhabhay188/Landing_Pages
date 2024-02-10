let openSideBar = document.querySelector('#openSideBar');
let closeSideBar = document.querySelector('#closeSideBar');
let sideBar = document.querySelector('#sidebar');

openSideBar.addEventListener('click',()=>{
    sideBar.style.transform = 'translateX(0px)';
})

document.body.addEventListener('click',()=>{
    console.log('body clicked');
})

closeSideBar.addEventListener('click',()=>{
    sideBar.style.transform = 'translateX(250px)';
})

