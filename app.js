const slider = document.querySelector('.slider')
const img = document.querySelector('#imgg')

const prev = document.querySelector('#btn1')
const next = document.querySelector('#btn2')

let count = 0;

function RemoveActive(){
    for (let i = 0; i < imgg.length; i++ ) {
        imgg[i].classList.remove('active');
    }
}

prev.addEventListener('click' , prevSlide )
next.addEventListener('click' , nextSlide )

function nextSlide(){
    RemoveActive()

    count++;
    if (count === imgg.length){
        count = 0;
    }
    imgg[count].classList.add('active');
}

function prevSlide (){
    RemoveActive();

    if(count === 0) {
        count = imgg.length;
    }
    count--;
    imgg[count].classList.add('active');
}