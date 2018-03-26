// creates audio context
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
// store variables 
var play, 
    oscillator,
    changefreq,
    changetype,
    changefreq1,
    changefreq2,
    play1,
    play2
  

var oscProp = {
    type: "sine",
    frequency: 250,
    frequency2: 250,
    frequency3: 250,
    playing: false

}

window.onload = function(){
    
    play = function(){
        //stops it from playing when starting site
        if(oscProp.playing){
            oscillator.stop();
            oscProp.playing = false;
        }
        //creates and starts oscillator
        else {
            oscillator = audioContext.createOscillator();
            oscillator.type = oscProp.type;
            oscillator.frequency.setValueAtTime(oscProp.frequency, audioContext.currentTime);
            oscillator.connect(audioContext.destination);
            oscillator.start();
            oscProp.playing = true;
        }
    }

    play1 = function(){
        if(oscProp.playing){
            oscillator.stop();
            oscProp.playing = false;
        }
        else {
            oscillator = audioContext.createOscillator();
            oscillator.type = oscProp.type;
            oscillator.frequency.setValueAtTime(oscProp.frequency2, audioContext.currentTime);
            oscillator.connect(audioContext.destination);
            oscillator.start();
            oscProp.playing = true;
        }
    }

    play2 = function(){
        if(oscProp.playing){
            oscillator.stop();
            oscProp.playing = false;
        }
        else {
            oscillator = audioContext.createOscillator();
            oscillator.type = oscProp.type;
            oscillator.frequency.setValueAtTime(oscProp.frequency3, audioContext.currentTime);
            oscillator.connect(audioContext.destination);
            oscillator.start();
            oscProp.playing = true;
        }
    }
}




//takes the value from freqsilder and chages the frequency
changefreq = function(){
    oscProp.frequency = document.getElementById("freqslider").value;
    play();
    play();


   }

   changefreq1 = function(){
    oscProp.frequency2 = document.getElementById("freqslider2").value;
    play1();
    play1();


   }

   changefreq2 = function(){
    oscProp.frequency3 = document.getElementById("freqslider3").value;
    play2();
    play2();


   }