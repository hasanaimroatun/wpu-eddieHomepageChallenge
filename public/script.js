const burgerBtn = document.querySelector('.burgerButton');
const btn1 = burgerBtn.children[0];
const btn2 = burgerBtn.children[1];
const btn3 = burgerBtn.children[2];

const navBar = document.querySelector('.navBar');
const navBarBtn = navBar.children;


burgerBtn.addEventListener('click', function(){
    btn1.classList.toggle('btn1-clicked')
    btn2.classList.toggle('btn2-clicked')
    btn3.classList.toggle('btn3-clicked')
    navBar.classList.toggle('navBar-clicked')
    navBar.classList.toggle('navBar')
})

for(const btn of navBarBtn) {
    btn.addEventListener('click', function(){
        btn1.classList.toggle('btn1-clicked')
        btn2.classList.toggle('btn2-clicked')
        btn3.classList.toggle('btn3-clicked')
        navBar.classList.toggle('navBar-clicked')
        navBar.classList.toggle('navBar')
    })
}


const nav2InfoContainers = document.querySelectorAll('.nav2InfoContainer');

for(const nav2Container of nav2InfoContainers) {
    nav2Container.addEventListener('mouseenter', function() {
        nav2Container.classList.toggle('nav2InfoContainer-hover')
    })
    nav2Container.addEventListener('mouseleave', function() {
        nav2Container.classList.toggle('nav2InfoContainer-hover')
    })
}