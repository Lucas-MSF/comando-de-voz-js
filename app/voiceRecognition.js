SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
button = document.querySelector('.button-start');

button.addEventListener('click', function () {
    button.classList.add('click');
    button.innerHTML = 'ouvindo... <i class="fa-solid fa-microphone-lines ">'
    recognition.start();
})

const recognition = new SpeechRecognition();
const chuteElement = document.getElementById('chute');

recognition.lang = 'pt-Br';
recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    button.classList.remove('click');
    button.innerHTML = 'Falar Valor <i class="fa-solid fa-microphone-lines ">'
    speakText = e.results[0][0].transcript;
    writeOnScreen(validateValue(speakText));

}
function writeOnScreen(text) {
    h3 = document.querySelector('h3');
    h3.classList.add('invisivel');
    chuteElement.innerHTML = text;

}