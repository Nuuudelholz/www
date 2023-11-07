
let offset = 0;
const sliderLine = document.querySelector('.gallery__photo');

document.querySelector('.next').addEventListener('click', function() {
    offset += 1000;
    if (offset > 2000) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';

});

document.querySelector('.prev').addEventListener('click', function() {
    offset -= 1000;
    if (offset < 0) {
        offset = 2000;
    }
    sliderLine.style.left = -offset + 'px';
});