const socket = io();

let name;
let textarea = document.querySelector('#textarea');
let messageArea = document.querySelector('.message_area');

do {
    name = prompt('Please enter your name: ');
} while (!name);

textarea.addEventListener('keyup', (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        sendMessage(e.target.value.trim());
        e.preventDefault(); // Prevents the new line
        textarea.value = ''; // Clear the textarea
    }
});

function sendMessage(message) {
    if(message !== '') {
        let msg = {
            user: name,
            message: message
        };

        appendMessage(msg, 'outgoing');

        socket.emit('message', msg);
    }
}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div');
    let className = type;
    mainDiv.classList.add(className, 'message');

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `;

    mainDiv.innerHTML = markup;

    messageArea.appendChild(mainDiv);
    messageArea.scrollTop = messageArea.scrollHeight; // Scroll to the bottom of the chat
}

socket.on("message", (msg) => {
    appendMessage(msg, 'incoming');
});
