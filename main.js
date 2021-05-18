var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHtml = "";
recognition.start();
}

recognition.onresult = function run (event) {
    console.log (event);
    var content= event.result[0][0].transcript;
    console.log (content);

    document.getElementById("textbox").innerHTML = content ;
}