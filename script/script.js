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

updateTrack(); // Initialize the track when the page loads