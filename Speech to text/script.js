var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;
var SpeechRecognitionEvent =
    SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


const recognition = new SpeechRecognition();

const diagnostic = document.getElementById( "diagnostic" );
const confidenceId = document.getElementById( "cid" );
const rec = document.getElementById( "rec" );
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
let started = false;
rec.onclick = function ()
{
    if ( !started ) {
        recognition.start();
        started = !started
                diagnostic.innerText = "";
                confidenceId.innerText = "";
        rec.innerHTML = `<span class="material-symbols-outlined">
radio_button_checked
</span>`;
    } else
    {
        recognition.stop();
        rec.innerHTML = `<span class="material-symbols-outlined">
mic
</span> `
        started = !started

}
};

recognition.onresult = function ( event )
{
    console.log(event.results)
    const text = event.results[0][0].transcript;
    diagnostic.textContent = text;
    cid.textContent = Math.round(event.results[ 0 ][ 0 ].confidence * 100) + "%";
    
};


recognition.onnomatch = function (event) {
    diagnostic.textContent = "I didn't recognise that";
};

recognition.onerror = function (event) {
    diagnostic.textContent = "Error occurred in recognition: " + event.error;
};

recognition.onend = ( e ) =>
{
    console.log( "ended" );
}