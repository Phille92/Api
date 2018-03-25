// create audio context
var context = new (window.AudioContext || window.webkitAudioContext)();

var sine = document.getElementById("sine");
var sinee = document.getElementById("sinee");
var sineee = document.getElementById("sineee");

var audioDuration = 1;

// create oscillator
var oscillator = context.createOscillator();

// starts oscillatotr when you click the box
sine.onclick = function (){
    oscillator.type = 'sine';
    oscillator.connect(context.destination);
    oscillator.frequency.setValueAtTime(440, context.currentTime)
    oscillator.start();
}
sinee.onclick = function (){
    oscillator.type = 'sinee';
    oscillator.connect(context.destination);
    oscillator.frequency.setValueAtTime(554.37, context.currentTime)
    oscillator.start();
}
sineee.onclick = function (){
    oscillator.type = 'sineee';
    oscillator.connect(context.destination);
    oscillator.frequency.setValueAtTime(659.25, context.currentTime)
    oscillator.start();
}

