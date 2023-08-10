let offset = 0;
const sliderLine = document.querySelector('.gallery__photo');

document.querySelector('.next').addEventListener('click', function() {
    offset += 840;
    if (offset > 2400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';

});

document.querySelector('.prev').addEventListener('click', function() {
    offset -= 840;
    if (offset < 0) {
        offset = 2400;
    }
    sliderLine.style.left = -offset + 'px';
});