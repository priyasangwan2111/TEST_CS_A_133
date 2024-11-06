
function validateForm() {

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();


    if (name === '') {
        alert("Please enter your name.");
        return false;
    }


    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    return true; 
}


function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
