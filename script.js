// Basic effect: typing text glitch
document.addEventListener('DOMContentLoaded', () => {
    const glitchText = document.querySelector('.glitch');
    const originalText = glitchText.textContent;

    setInterval(() => {
        glitchText.textContent = randomizeText(originalText);
        setTimeout(() => glitchText.textContent = originalText, 100);
    }, 3000);

    function randomizeText(text) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';
        return text.split('').map(c => (Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : c)).join('');
    }
});

// Terminal boot effect
const bootLines = [
    "Initializing Web Node...",
    "Checking system integrity...",
    "Loading modules: Web Systems, TUI Tools, GUI Apps...",
    "Connecting to my Github Page...",
    "Boot complete. Welcome, Jan Cordeiro.",
    ">> Access granted."
];

const bootText = document.getElementById('boot-text');
const siteContent = document.getElementById('site-content');
let currentLine = 0;
let currentChar = 0;

function typeLine() {
    if (currentLine < bootLines.length) {
        if (currentChar < bootLines[currentLine].length) {
            bootText.textContent += bootLines[currentLine][currentChar];
            currentChar++;
            setTimeout(typeLine, 40);
        } else {
            bootText.textContent += '\n';
            currentLine++;
            currentChar = 0;
            setTimeout(typeLine, 400);
        }
    } else {
        setTimeout(() => {
            document.getElementById('boot-screen').style.display = 'none';
            siteContent.style.display = 'block';
        }, 800);
    }
}

typeLine();