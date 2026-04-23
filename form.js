let message = document.getElementById("message");
let form = document.getElementById("form");
let nameInput = document.getElementById("name");    
let emailInput = document.getElementById("email");
// let messageInput = document.getElementById("message");
let submitButton = document.getElementById("submit");   
let response = document.getElementById("response"); 

submitButton.addEventListener("click", function(event) {
    console.log("Submit button clicked");
    response.innerHTML = message.value + " " + nameInput.value + " " + emailInput.value + " " + message.value;
});