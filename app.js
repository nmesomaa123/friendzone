// app.js
const curatorMessages = [
    "I like your energy. Let's see if you're a fit.",
    "The city is quiet tonight. Perfect for a Shadow Drop.",
    "Nmesoma is watching. Stay reliable.",
    "Looking for a spark? You're in the right place."
];

async function requestAccess() {
    const email = document.getElementById('user-email').value;
    const textElement = document.getElementById('curator-text');

    if(email.includes('@')) {
        // This is the new part: Sending data to your backend
        const response = await fetch('https://your-api-link.com/join', {
            method: 'POST',
            body: JSON.stringify({ email: email }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            textElement.innerText = "You're on the list. Nmesoma is reviewing your profile.";
        }
    } else {
        textElement.innerText = "Be real with me. That's not an email.";
    }
}

// Randomly rotate Curator's wisdom every 5 seconds
setInterval(() => {
    const randomMsg = curatorMessages[Math.floor(Math.random() * curatorMessages.length)];
    document.getElementById('curator-text').innerText = randomMsg;
}, 5000);