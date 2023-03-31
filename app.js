const toggle = document.querySelector('.toggle')
const nav = document.querySelector('.hide')

toggle.addEventListener('click', function(){
    nav.classList.toggle('hide')
})