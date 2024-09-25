let cover = document.querySelector('.cover')
cover.addEventListener('click',function (event){
    console.log('ok')
    event.target.classList.remove('cover--show')
})
let navList = document.querySelector('.nav-list')
let mobileButton = document.querySelector('.mobile-button')
mobileButton.addEventListener('click',function (event){
    event.target.classList.toggle('mobile-button--clicked')
    navList.classList.toggle('nav-list--open')
})
let navWrapper = document.querySelector('.nav__wrapper')
let nav = document.querySelector('.nav')
document.addEventListener('scroll',function (){
    let scrollTop = document.documentElement.scrollTop
    if (scrollTop > 0){
        nav.classList.add('nav--scroll')
    }else {
        nav.classList.remove('nav--scroll')
    }
})