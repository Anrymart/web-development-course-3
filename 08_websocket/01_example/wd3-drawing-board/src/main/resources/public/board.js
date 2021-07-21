const username = 'default';

// get board history
fetch('/history')
    .then(response => response.json())
    .then(data => {
        for (const item of data) {
            console.log(JSON.parse(item));
        }
    });

// WebSocket connection setup
let ws;
connectWs();

function connectWs() {
    // Establish the WebSocket connection and set up event handlers
    const protocol = (location.protocol === 'https:') ? 'wss' : 'ws';
    ws = new WebSocket(`${protocol}://${location.hostname}:${location.port}/board?user=${username}`);
    ws.onmessage = message => receiveMessage(message.data);
    ws.onclose = () => connectWs();
}

function sendMessage(message) {
    ws.send(JSON.stringify(message));
}

function receiveMessage(message) {
    message = JSON.parse(message);
    console.log(message);
}


const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const colorPicker = document.getElementById('colorPicker');

let color = colorPicker.value;
let isMouseDown = false;
let prevEvent;
colorPicker.addEventListener('change', () => {
    color = colorPicker.value;
});

document.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    prevEvent = event;
});
document.addEventListener('mouseup', () => {
    isMouseDown = false;
    prevEvent = null;
});
canvas.addEventListener('mouseout', () => {
    prevEvent = null;
});
canvas.addEventListener('mouseenter', (event) => {
    prevEvent = event;
})
canvas.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        context.beginPath();
        context.strokeStyle = color;
        context.moveTo(prevEvent.offsetX, prevEvent.offsetY);
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
        prevEvent = event;
    }
})
