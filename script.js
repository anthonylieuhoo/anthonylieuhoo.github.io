document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.querySelector(".yes-button");
    const noButton = document.querySelector(".no-button");
    const images = document.querySelectorAll(".image");
    const happyGif = document.getElementById("happy-gif");
    const sadGif = document.getElementById("sad-gif");
    const alertGif = document.getElementById("alert-gif");
    const moonImg = document.getElementById("moon-img");
    const text = document.getElementById("text");
    let count = 0;

    // Load confetti script dynamically
    function loadConfetti(callback) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.1/dist/confetti.browser.min.js";
        script.onload = callback;
        document.body.appendChild(script);
    }

    function startConfetti() {
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 } // Adjust to start from higher
        });
    }

    yesButton.addEventListener("click", function () {
        images.forEach(image => {
            image.style.opacity = "0";
        });

        happyGif.style.opacity = "1";
        text.textContent = "Yay!! No takebacks!! Now then... shall we?? 🎉";
        noButton.style.display = "none";
        count = 0;

        // Start confetti effect
        if (typeof confetti !== "undefined") {
            startConfetti();
        } else {
            loadConfetti(startConfetti);
        }
    });

    noButton.addEventListener("click", function () {
        images.forEach(image => {
            image.style.opacity = "0";
        });

        switch (count) {
            case 0:
                sadGif.style.opacity = "1";
                text.textContent = "Aww, why not??";
                break;
            case 1:
                alertGif.style.opacity = "1";
                text.textContent = "This isn't going like we planned!! What are we going to do!?";
                break;
            case 2:
                moonImg.style.opacity = "1";
                noButton.style.display = "none";
                text.textContent = "Minions!! We are going to steal the button!!";
                break;
        }

        if (count < 2) {
            count += 1;
        }
    });
});
