const form = document.querySelector("form");
const email = document.getElementById("email");
const error = email.nextElementSibling;
const emailRegExp =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener("load", () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    email.className = isValid ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
email.addEventListener("input", () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (isValid) {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    } 
    else {
        email.className = "invalid";
    }
});

// This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (!isValid) {
        email.className = "invalid";
        error.textContent = "Please provide a valid email address";
        error.className = "error active";
    } 
    else 
    {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
    }
});


// document.getElementById('myForm').onsubmit = validateForm;

// function validateForm() {
//     var reEmail = /^\w+([\.-]?\w+)*@w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
//     var counter = 0;

//     if (!reEmail.test(document.getElementById('email').value) ) {
//         fixForm(document.getElementById('email'), "Please provide a valid email address" );
//         counter++;
//     }

//     if (counter > 0)
//     { return false; }
//     else{ return true;}
// }

// function fixForm(field, message){
//     var errorMessage = field.id + "-err";
//     document.getElementById(errorMessage).innerHTML = message;

// }