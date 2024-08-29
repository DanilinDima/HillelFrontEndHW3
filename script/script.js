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


function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
}






document.querySelector('.burger-button').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.mobile-nav').classList.toggle('open');

    if (document.querySelector('.mobile-nav').classList.contains('open')) {
        disableScroll();
    } else {
        enableScroll();
    }

    const submenus = document.querySelectorAll('.mobile-nav-item-submenu-1, .mobile-nav-item-submenu-2');
    submenus.forEach(function(submenu) {
        submenu.style.display = 'none';
    });


    const arrows = document.querySelectorAll('.sub-first img, .sub-second img');
    arrows.forEach(function(arrow) {
        arrow.style.transform = 'rotate(90deg)';
    });
});

document.querySelector('.sub-first').addEventListener('click', function(e) {
    e.preventDefault();
    const submenu1 = document.querySelector('.mobile-nav-item-submenu-1');
    const submenu2 = document.querySelector('.mobile-nav-item-submenu-2');
    const arrow1 = this.querySelector('img');

    submenu1.style.display = submenu1.style.display === 'block' ? 'none' : 'block';
    arrow1.style.transform = submenu1.style.display === 'block' ? 'rotate(-90deg)' : 'rotate(90deg)';


    submenu2.style.display = 'none';
    document.querySelector('.sub-second img').style.transform = 'rotate(90deg)';
});

document.querySelector('.sub-second').addEventListener('click', function(e) {
    e.preventDefault();
    const submenu = document.querySelector('.mobile-nav-item-submenu-2');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

    const arrow = this.querySelector('img');
    arrow.style.transform = submenu.style.display === 'block' ? 'rotate(-90deg)' : 'rotate(90deg)';
});

document.querySelectorAll('.mobile-nav-item').forEach(function(item) {
    item.addEventListener('click', function(e) {
        if (!e.target.closest('.sub-first') && !e.target.closest('.sub-second')) {
            document.querySelector('.burger-button').classList.remove('active');
            document.querySelector('.mobile-nav').classList.remove('open');

            const submenus = document.querySelectorAll('.mobile-nav-item-submenu-1, .mobile-nav-item-submenu-2');
            submenus.forEach(function(submenu) {
                submenu.style.display = 'none';
            });

            const arrows = document.querySelectorAll('.sub-first img, .sub-second img');
            arrows.forEach(function(arrow) {
                arrow.style.transform = 'rotate(90deg)';
            });
        }
    });
});




