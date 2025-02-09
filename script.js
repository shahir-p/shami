// login




function loginCheck(event) {
    event.preventDefault(); // Prevent the form from default submission
    const userName = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const err = document.getElementById('err'); // Access the error message div

    // Clear any previous error messages
    err.innerHTML = "";

    if (userName && password) {
      if (userName === "admin" && password === "1234") {
        // Redirect to the home page
        window.location.href = './pages/homePage.html';
      } else {
        // Display an error message for incorrect credentials
        err.innerHTML = "Username and password do not match.";
      }
    } else {
      // Display an error message for empty fields
      err.innerHTML = "Please fill in both fields.";
    }

    // Remove the error message after 3 seconds
    if (err.innerHTML !== "") {
      setTimeout(() => {
        err.innerHTML = "";
      }, 3000);
    }
  }