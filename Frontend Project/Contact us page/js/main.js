let myForm = document.querySelector("#signUp");
let btnSubmit = document.querySelector(".btnSubmit");

myForm.addEventListener("submit", function(e) {
    e.preventDefault();

    checkInputs()
});

function checkInputs() {
    let email = document.querySelector("input[name='email']");
    let textarea = document.querySelector("#comments");

    if (email.value == "") {
        setError(email, "cannot be empty")
    } else {
        setSucces(email)
    }

    if (textarea.value == "") {
        setError(textarea, "cannot be empty")
    } else {
        setSucces(textarea)
    }
}

function setError(inp, msg) {
    inp.style.borderColor = "red";
    inp.nextElementSibling.innerText = msg;
    inp.nextElementSibling.className += "d-block";
    inp.nextElementSibling.style.color = "red";

}

function setSucces(inp) {
    inp.style.borderColor = "";
    inp.nextElementSibling.className = "invalid-feedback";
}