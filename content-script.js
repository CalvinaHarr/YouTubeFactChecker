// Create a button in top bar
let button = document.createElement('button');
button.textContent = "Fact Check";
// button.style.padding = "10px";
// button.style.position = "absolute"; // Position it absolutely within its parent
// button.style.top = "10px"; // 10 pixels from the top
// button.style.left = "10px"; // 10 pixels from the left
// button.style.zIndex = "1000"; // Ensure it appears above other 

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