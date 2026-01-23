function validateName() {
    let name = document.getElementById("name").value;
    let error = document.getElementById("nameError");

    if (name.length < 3) {
        error.innerText = "Name must be at least 3 characters";
        return false;
    }
    error.innerText = "";
    return true;
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(pattern)) {
        error.innerText = "Enter valid email";
        return false;
    }
    error.innerText = "";
    return true;
}

function validateMobile() {
    let mobile = document.getElementById("mobile").value;
    let error = document.getElementById("mobileError");

    if (mobile.length !== 10 || isNaN(mobile)) {
        error.innerText = "Enter 10 digit number";
        return false;
    }
    error.innerText = "";
    return true;
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let error = document.getElementById("passwordError");
    
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

    if (!password.match(pattern)) {
        error.innerText = "Password must contain uppercase, lowercase, number, special char";
        return false;
    }
    error.innerText = "";
    return true;
}

function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let error = document.getElementById("confirmPasswordError");

    if (password !== confirm) {
        error.innerText = "Passwords do not match";
        return false;
    }
    error.innerText = "";
    return true;
}

function validateDOB() {
    let dob = document.getElementById("dob").value;
    let error = document.getElementById("dobError");
    
    let pattern = /^(0[1-9]|[12][0-9]|3[01])[\/-](0[1-9]|1[012])[\/-](19|20)\d\d$/;

    if (!dob.match(pattern)) {
        error.innerText = "Enter valid date (dd/mm/yyyy or dd-mm-yyyy)";
        return false;
    }
    error.innerText = "";
    return true;
}

function validateForm() {
    return (
        validateName() &&
        validateEmail() &&
        validateMobile() &&
        validatePassword() &&
        validateConfirmPassword() &&
        validateDOB()
    );
}
