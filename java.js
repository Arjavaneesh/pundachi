function validateLogin() {

    const username = document.getElementById('username').value;

    const password = document.getElementById('password').value;

 

    const validUsername = "TTC0824020";

    const validPassword = "myre";

 

    if (username === validUsername && password === validPassword) {

        alert("Login successful!");

        return true;

    } else {

        document.getElementById('error-message').style.display = "block";

        return false;

    }

}