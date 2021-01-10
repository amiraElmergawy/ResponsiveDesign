var userName = document.querySelector('#userName');
var email = document.querySelector('#email');
var form = document.querySelector("#myForm");
var alertDiv = document.querySelector("#alert");

function checkName() {
    var name = userName.value.trim();
    if (name.length <= 3) {
        showError("Name Must be More Than 3 Character");
    }
    else {
        removeError()
    }
}

function checkEmail() {
    var re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var emailValid = email.value.trim();
    if (emailValid === "") {
        showError("Email Must be Not Empty");
    }
    else if (!re.test(emailValid)) {
        showError("Enter Valid Email");
    }
    else {
        removeError()
    }
}

function showError(message) {
    alertDiv.textContent = message;
    alertDiv.classList.add("alert","alert-danger");
}

function removeError() {
    alertDiv.textContent = "";
    alertDiv.classList.remove('alert','alert-danger');
}

form.addEventListener('input', function (e) {
    // console.log(e.target.id); // userName - email - password
    switch (e.target.id) {
        case 'userName':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
    }
})
