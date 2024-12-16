// Create a new element
let newElement = document.createElement('button');
//^Creates a new button in the top bar
newElement.textContent = "Fact Check";
newElement.style.padding = "10px";

//Add event listener
let listening = false;
//Makes the speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';
//transcript stuff
const transcript = "";
recognition.onresult = (event) => {
    transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    console.log(transcript);
};

button.addEventListener("click", function() {
    //record video clip
    if(!listening) {
        listening = true;
        //start recognition process
        recognition.start();
    }
    else {
        listening = false;
    }
    //change button look to stop
    //when stopped, compile claims
    alert("Button in header was clicked!");
});