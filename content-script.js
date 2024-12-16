// Create a button in top bar
let newElement = document.createElement('button');
newElement.textContent = "Fact Check";
newElement.style.padding = "10px";

//style the button

//Add event listener
let listening = false;
let isClicked = false;

//Makes the speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

//transcript that claims will be pulled from
const transcript = "";
recognition.onresult = (event) => {
    transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    console.log(transcript);
};

button.addEventListener("click", function() {
    if(isClicked) {
        //record video clip
        if(!listening) {
            listening = true;
            //start recognition process
            recognition.start();
            //change looks
            this.textContent = '👂';
        }
        else {
            listening = false;
        }
    }
    else {
        //change looks
        this.textContent = '🤓';
    }
    alert("Button in header was clicked!");
    isClicked = !isClicked;
});

//Once recording is done, open page (resembling the notification page)
//look at transcript and ask ChatGPT to list what claims it makes
//list deeper explanation under each claim
//save recording stuff to pop-up 