'use strict'
const closeBtn = document.querySelector('.close__btns')
const modals = document.querySelector('.modal')

modals.addEventListener('click',e=>{
    if(e.target.classList.contains('close__btns')){
        modals.style.display='none'
    }
})

document.addEventListener('keydown',e=>{
    if(e.key === 'Escape'){
        modals.style.display='none'
    }
})

