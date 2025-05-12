// script.js
function updateCountdown() {
    const targetDate = new Date('May 13, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "THE KING HAS RETURNED!";
    }
}

// Initial call
updateCountdown();
// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Enable audio after user interaction
document.addEventListener('click', function() {
    const audio = document.querySelector('audio');
    if (audio.paused) {
        audio.play().catch(error => console.log('Audio play failed:', error));
    }
}, { once: true });