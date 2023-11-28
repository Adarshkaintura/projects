let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.onresult = handleSpeechResult;

function speakText() {
    let textInput = document.getElementById('textInput').value;
    let utterance = new SpeechSynthesisUtterance(textInput);
    window.speechSynthesis.speak(utterance);
}

function startRecognition() {
    recognition.start();
}

function stopRecognition() {
    recognition.stop();
}

function handleSpeechResult(event) {
    let result = event.results[0];
    let transcript = result[0].transcript;
    document.getElementById("output").innerHTML = "You said: " + transcript;
}

// Optional: You can adjust the speaking rate
let utterance = new SpeechSynthesisUtterance();
utterance.rate = 1; // Adjust the value as needed
