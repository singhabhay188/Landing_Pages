let smallCursor = document.querySelector('.smallcursor');

let openSideBar = document.querySelector('#openSideBar');
let closeSideBar = document.querySelector('#closeSideBar');
let sideBar = document.querySelector('#sidebar');

// openSideBar.addEventListener('click',()=>{
//     sideBar.style.transform = 'translateX(0px)';
// })

// document.body.addEventListener('click',()=>{
//     console.log('body clicked');
// })

// closeSideBar.addEventListener('click',()=>{
//     sideBar.style.transform = 'translateX(250px)';
// })



Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.1,
  });

  Shery.makeMagnet("nav ul li", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#menu ul li", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".menu-icon", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  Shery.makeMagnet("#logo" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  function toggleMenu() {
    var menu = document.getElementById('menu');
    var menuIcon = document.querySelector('.menu-icon');
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
      menuIcon.textContent = '✖'; // Change icon to close
    } else {
      menuIcon.textContent = '☰'; // Change icon to menu
    }
  }