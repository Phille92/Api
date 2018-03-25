
var play, 
    oscillator,
    changefreq,
    changetype
  

var oscProp = {
    type: "sine",
    frequency: 250,
    playing: false

}



// create audio context
var audioContext = new (window.AudioContext || window.webkitAudioContext)();

window.onload = function(){
    
    play = function(){
        if(oscProp.playing){
            oscillator.stop();
            oscProp.playing = false;
        }
        else {
            oscillator = audioContext.createOscillator();
            oscillator.type = oscProp.type;
            oscillator.frequency.setValueAtTime(oscProp.frequency, audioContext.currentTime);
            oscillator.connect(audioContext.destination);
            oscillator.start();
            oscProp.playing = true;
        }

    }
    changefreq = function(){
        oscProp.frequency = document.getElementById("freqslider").value;
        play();
        play();


       }

    changetype = function(){
        oscProp.type = document.querySelector("input[name = 'waveform']:checked").value;
        play();
        play();


       }




}







































/*var sine = document.getElementById("sine");
var square = document.getElementById("square");
var volume = document.getElementById("square");

// create oscillator
var oscillator = context.createOscillator();

document.mousedown = function (event) {
    oscillator.connect(context.destination);
    oscillator.start();
};

// starts oscillatotr when you click the div
sine.onclick = function (){
    oscillator.type = 'sine';
    oscillator.connect(context.destination);
    play(type, value);
};*/