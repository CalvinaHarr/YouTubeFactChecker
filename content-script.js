// Create a new element
let newElement = document.createElement('button');
//^Creates a new button in the top bar
newElement.textContent = "Fact Check";
newElement.style.padding = "10px";

//Add event listener
button.addEventListener("click", function() {
    alert("Button in header was clicked!");
});