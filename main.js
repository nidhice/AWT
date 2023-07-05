function validateForm() {
	var fullName = document.getElementById("fullName").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirmPassword").value;
	var gender = document.querySelector('input[name="gender"]:checked');
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var state = document.getElementById("state").value;
	var agreement = document.getElementById("agreement").checked;

	// Regular expressions for validation
	var alphanumericRegex = /^[a-zA-Z0-9]+$/;
	var passwordRegex = /^[a-zA-Z0-9!@#$%^&*()]+$/;
	var phoneRegex = /^\d{10}$/;
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Resetting error messages
	document.getElementById("fullNameError").innerHTML = "";
	document.getElementById("usernameError").innerHTML = "";
	document.getElementById("passwordError").innerHTML = "";
	document.getElementById("confirmPasswordError").innerHTML = "";
	document.getElementById("genderError").innerHTML = "";
	document.getElementById("phoneError").innerHTML = "";
	document.getElementById("emailError").innerHTML = "";
	document.getElementById("stateError").innerHTML = "";
	document.getElementById("agreementError").innerHTML = "";

	var isValid = true;

	// Full Name validation
	if (!fullName) {
		document.getElementById("fullNameError").innerHTML = "* Full Name is required";
		isValid = false;
	}

	// Username validation
	if (!username) {
		document.getElementById("usernameError").innerHTML = "* Username is required";
		isValid = false;
	} else if (!alphanumericRegex.test(username)) {
		document.getElementById("usernameError").innerHTML = "* Username should be alphanumeric";
		isValid = false;
	}

	// Password validation
	if (!password) {
		document.getElementById("passwordError").innerHTML = "* Password is required";
		isValid = false;
	} else if (!passwordRegex.test(password) || password.length < 6 || password.length > 10) {
		document.getElementById("passwordError").innerHTML = "* Password should be alphanumeric with 6 to 10 characters";
		isValid = false;
	}

	// Confirm Password validation
	if (!confirmPassword) {
		document.getElementById("confirmPasswordError").innerHTML = "* Confirm Password is required";
		isValid = false;
	} else if (password !== confirmPassword) {
		document.getElementById("confirmPasswordError").innerHTML = "* Passwords do not match";
		isValid = false;
	}

	// Gender validation
	if (!gender) {
		document.getElementById("genderError").innerHTML = "* Gender is required";
		isValid = false;
	}

	// Phone validation
	if (!phone) {
		document.getElementById("phoneError").innerHTML = "* Phone No is required";
		isValid = false;
	} else if (!phoneRegex.test(phone)) {
		document.getElementById("phoneError").innerHTML = "* Phone No should be a 10-digit number";
		isValid = false;
	}

	// Email validation
	if (!email) {
		document.getElementById("emailError").innerHTML = "* Email is required";
		isValid = false;
	} else if (!emailRegex.test(email)) {
		document.getElementById("emailError").innerHTML = "* Invalid email format";
		isValid = false;
	}

	// State validation
	if (!state) {
		document.getElementById("stateError").innerHTML = "* State is required";
		isValid = false;
	}

	// Agreement validation
	if (!agreement) {
		document.getElementById("agreementError").innerHTML = "* You must agree to the terms and conditions";
		isValid = false;
	}

	if (isValid) {
		// Redirect to login page
		window.location.href = "login.html";
	}
     return isValid;
}
