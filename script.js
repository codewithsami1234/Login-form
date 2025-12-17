// Select forms
const loginForm = document.querySelector('.login');
const signupForm = document.querySelector('.signup');

// ----- Switch forms -----
function showSignup() {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    clearErrors();
}

function showLogin() {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    clearErrors();
}

// ----- Clear all error messages -----
function clearErrors() {
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
}

// ----- Login Validation -----
function validateLogin() {
    clearErrors(); // remove previous errors

    const username = document.getElementById("loginUser").value.trim();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPass").value.trim();

    let valid = true;

    if (username === "") {
        document.querySelector("#loginUser + .error").textContent = "Username is required";
        valid = false;
    } 
     else if (username.length < 3) {
        document.querySelector("#loginUser + .error").textContent = "Username must be at least 3 characters";
        valid = false;
    }

    if (email === "") {
        document.querySelector("#loginEmail + .error").textContent = "Email is required";
        valid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.querySelector("#loginEmail + .error").textContent = "Enter a valid email";
        valid = false;
    }

    if (password === "") {
        document.querySelector("#loginPass + .error").textContent = "Password is required";
        valid = false;
    }

    if (valid) {
        alert("Login successfully!");
    }

    return false; 
}

// ----- Signup Validation -----
function validateSignup() {
    clearErrors(); 

    const username = document.getElementById("signupUser").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPass").value.trim();

    let valid = true;

    if (username === "") {
        document.querySelector("#signupUser + .error").textContent = "Username is required";
        valid = false;
    } else if (username.length < 3) {
        document.querySelector("#signupUser + .error").textContent = "Username must be at least 3 characters";
        valid = false;
    }

    if (email === "") {
        document.querySelector("#signupEmail + .error").textContent = "Email is required";
        valid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.querySelector("#signupEmail + .error").textContent = "Enter a valid email";
        valid = false;
    }

    if (password === "") {
        document.querySelector("#signupPass + .error").textContent = "Password is required";
        valid = false;
    }

    if (valid) {
        alert("Signup successfully!");
    }

    return false; 
}
