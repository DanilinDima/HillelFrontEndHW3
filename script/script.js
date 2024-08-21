const rangeMin = document.getElementById('range-min');
const rangeMax = document.getElementById('range-max');
const minPriceLabel = document.getElementById('min-price-label');
const maxPriceLabel = document.getElementById('max-price-label');
const sliderTrack = document.querySelector('.slider-track');

function updateTrack() {
    const minValue = parseInt(rangeMin.value);
    const maxValue = parseInt(rangeMax.value);

    if (minValue > maxValue - 10) {
        rangeMin.value = maxValue - 10;
    }

    if (maxValue < minValue + 10) {
        rangeMax.value = minValue + 10;
    }

    const minPercent = (minValue / rangeMin.max) * 100;
    const maxPercent = (maxValue / rangeMax.max) * 100;

    sliderTrack.style.background = `linear-gradient(to right, #ddd ${minPercent}%, #4CAF50 ${minPercent}%, #4CAF50 ${maxPercent}%, #ddd ${maxPercent}%)`;

    minPriceLabel.textContent = minValue;
    maxPriceLabel.textContent = maxValue;
}

rangeMin.addEventListener('input', updateTrack);
rangeMax.addEventListener('input', updateTrack);

updateTrack(); 


document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {

        document.querySelectorAll('.nav-item').forEach(link => link.classList.remove('active-page'));
        

        this.classList.add('active-page');
    });
});

document.querySelectorAll('.shop-section .main_wrapper nav a').forEach(item => {
    item.addEventListener('click', function() {

        document.querySelectorAll('.shop-section .main_wrapper nav a').forEach(link => link.classList.remove('active'));
        

        this.classList.add('active');
    });
});

document.querySelectorAll('.shop-section .categories a').forEach(item => {
    item.addEventListener('click', function() {

        document.querySelectorAll('.shop-section .categories a').forEach(link => link.classList.remove('categories-active'));
        

        this.classList.add('categories-active');
    });
});

document.querySelectorAll('.shop-section .size a').forEach(item => {
    item.addEventListener('click', function() {

        document.querySelectorAll('.shop-section .size a').forEach(link => link.classList.remove('categories-active'));
        

        this.classList.add('categories-active');
    });
});

document.querySelectorAll('.home-section .menu-dd-parent a').forEach(item => {
    item.addEventListener('click', function() {

        document.querySelectorAll('.home-section .nav-item').forEach(link => link.classList.remove('active-page'));
        document.querySelector('.home-section .menu-dd-parent .nav-item').classList.add('active-page');
       

    
    });
});