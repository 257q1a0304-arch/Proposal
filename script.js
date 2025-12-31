// Floating Hearts Animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate floating hearts continuously
setInterval(createFloatingHeart, 300);

// Confetti Animation
function createConfetti() {
    const colors = ['#ff6b6b', '#ff8787', '#ffa5a5', '#ffc9c9', '#ffe3e3', '#ff69b4', '#ff1493', '#ff69b4'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// Playful "No" Button - Moves Away
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

noButton.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    noButton.style.transition = 'all 0.3s ease';
});

noButton.addEventListener('click', (e) => {
    e.preventDefault();
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    
    // Make "Yes" button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 2) + 'px';
    yesButton.style.padding = '15px 35px';
});

// "Yes" Button Celebration
yesButton.addEventListener('click', () => {
    // Trigger confetti celebration
    createConfetti();
    
    // Show celebration message
    const celebration = document.createElement('div');
    celebration.classList.add('celebration-message');
    celebration.innerHTML = `
        <h1>🎉 Yay! 🎉</h1>
        <p>I knew you'd say yes! 💕</p>
        <p>You've made me the happiest! ❤️</p>
    `;
    document.body.appendChild(celebration);
    
    // Add extra floating hearts
    for (let i = 0; i < 50; i++) {
        setTimeout(createFloatingHeart, i * 50);
    }
    
    // Hide the buttons
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
    
    // Add celebration animation
    setTimeout(() => {
        celebration.style.opacity = '1';
        celebration.style.transform = 'scale(1)';
    }, 100);
});

// Add sparkle effect to cursor
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.8) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        sparkle.innerHTML = '✨';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});

// Pulsing effect for the question
const questionElement = document.querySelector('.question');
if (questionElement) {
    setInterval(() => {
        questionElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            questionElement.style.transform = 'scale(1)';
        }, 500);
    }, 2000);
}

// Add romantic background music toggle (optional)
function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    if (music) {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    }
}

// Additional romantic effects
function createRose() {
    const rose = document.createElement('div');
    rose.innerHTML = '🌹';
    rose.classList.add('floating-rose');
    rose.style.left = Math.random() * 100 + '%';
    rose.style.animationDuration = (Math.random() * 4 + 3) + 's';
    rose.style.fontSize = (Math.random() * 25 + 25) + 'px';
    document.body.appendChild(rose);
    
    setTimeout(() => {
        rose.remove();
    }, 7000);
}

// Occasionally add roses
setInterval(() => {
    if (Math.random() > 0.7) {
        createRose();
    }
}, 2000);

// CSS Animations (to be added to your CSS file)
const style = document.createElement('style');
style.textContent = `
    .floating-heart {
        position: fixed;
        bottom: -50px;
        animation: floatUp linear forwards;
        pointer-events: none;
        z-index: 1000;
    }
    
    @keyframes floatUp {
        to {
            bottom: 110%;
            opacity: 0;
            transform: translateX(${Math.random() * 100 - 50}px);
        }
    }
    
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        top: -10px;
        animation: confettiFall linear forwards;
        pointer-events: none;
        z-index: 1000;
    }
    
    @keyframes confettiFall {
        to {
            top: 110%;
            transform: rotateZ(360deg);
        }
    }
    
    .celebration-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg, #ff6b6b, #ff8787);
        padding: 40px 60px;
        border-radius: 20px;
        text-align: center;
        color: white;
        opacity: 0;
        transition: all 0.5s ease;
        z-index: 2000;
        box-shadow: 0 10px 40px rgba(255, 107, 107, 0.5);
    }
    
    .celebration-message h1 {
        font-size: 3rem;
        margin: 0;
        animation: bounce 1s infinite;
    }
    
    .celebration-message p {
        font-size: 1.5rem;
        margin: 10px 0;
    }
    
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    
    .sparkle {
        position: absolute;
        pointer-events: none;
        animation: sparkleAnimation 1s ease-out forwards;
        z-index: 999;
    }
    
    @keyframes sparkleAnimation {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-20px);
        }
    }
    
    .floating-rose {
        position: fixed;
        bottom: -50px;
        animation: roseFloat linear forwards;
        pointer-events: none;
        z-index: 1000;
    }
    
    @keyframes roseFloat {
        to {
            bottom: 110%;
            opacity: 0;
            transform: translateX(${Math.random() * 150 - 75}px) rotate(360deg);
        }
    }
    
    .question {
        transition: transform 0.5s ease;
    }
`;
document.head.appendChild(style);
