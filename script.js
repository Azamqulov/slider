const slider = document.querySelector('.slider')
const img = document.querySelector('#imgg')
// button
const next = document.querySelector('#btn1')
const prev = document.querySelector('#btn2') 

let count = 0

function removeActive(){
    for (let i = 0 ; i < imgg.length; i++) {
        imgg[i].classList.remove('active');
    }
}

prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)

// 

function nextSlide(){
    removeActive();
    count++;
    if (count === imgg.length) {
        count = 0;
    }
    imgg[count].classList.add('active');
}
// Preve 

function prevSlide () {
    removeActive();
    
    if (count === 0) {
        count = imgg.length;
    }    
    count--;
    imgg[count].classList.add('active')
}
