const hamBtn = document.getElementById('ham_img');
const menuWidth = document.querySelector('.hamburger-li');
const cancelBtn = document.getElementById('cancelBtn')

cancelBtn.addEventListener('click', ()=>{
    menuWidth.style.width = "0%";
})

hamBtn.addEventListener('click', ()=>{ 
    menuWidth.style.width = "50%";
} )