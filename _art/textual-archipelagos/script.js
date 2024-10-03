const preElement = document.getElementById("string");
const preStyles = window.getComputedStyle(preElement);
const preWidth = parseInt(preStyles.width);
const preHeight = parseInt(preStyles.height);
const fontSize = parseInt(preStyles.fontSize);

const charWidth = fontSize * 0.6;
const lineHeight = fontSize * 1.2; 

// Function to measure character width using a canvas
function getCharacterWidth(char) {
    const tempCanvas = document.createElement('canvas');
    const context = tempCanvas.getContext('2d');
    context.font = preStyles.font; // Set the font
    return context.measureText(char).width; // Measure width
}

const charsPerLine = Math.floor(preWidth / charWidth);
const totalLines = Math.floor(preHeight / lineHeight);

const chars = "一丨人大木口日目田星雪魚鳥楓龍瀑龍驕鬱靂龘";
const charsLength = chars.length;

const button = document.getElementById('button');

function togglePlayPause() {
    if (isPlaying) {
        button.textContent = 'Play';
    } else {
        button.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

let isPlaying = true;

noise.seed(Math.random());

const depth = 100; 
let currentDepth = 0;

function update() {
    if (!isPlaying) return;

    let output = "";
    let time = currentDepth * 0.005;

    for (let i = 0; i < totalLines + 1; i++) {
        for (let j = 0; j < charsPerLine + 1; j++) {

            var value = noise.simplex3(i / 30, j / 30, time);

            if (value < -0.4) {
                output += "  ";
            } else {
 
                let normValue = (value + 0.4) / 1.3 * charsLength;
                output += chars.charAt(Math.floor(normValue));
            }
        }
        output += "\n";
    }
    button.addEventListener('click', togglePlayPause);
    preElement.textContent = output;
    currentDepth = (currentDepth + 1);
}

setInterval(update, 10);







