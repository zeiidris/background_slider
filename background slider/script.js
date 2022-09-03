const body = document.body
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let ActiveSlide = 0;

rightBtn.addEventListener('click', ()=>{
    ActiveSlide++;
    if (ActiveSlide>slides.length-1) {
        ActiveSlide = 0;
        
    }else if (ActiveSlide<0) {
        ActiveSlide = slides.length-1;
    }setBgToBody();
    setActiveSldie();
})
leftBtn.addEventListener('click', ()=>{
    ActiveSlide--;
  
    if (ActiveSlide<0) {
        ActiveSlide = slides.length-1;
    }setBgToBody();
    setActiveSldie();
})
setBgToBody()


function setBgToBody() {
    body.style.backgroundImage = slides[ActiveSlide].style.backgroundImage;
}

function setActiveSldie() {
    slides.forEach(slide =>{
        slide.classList.remove('active')
        slides[ActiveSlide].classList.add('active')
    })
}