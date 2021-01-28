var submitButton = document.getElementById('submit');
var emailInput = document.getElementById('email');
var validationText = document.getElementById('validation-text');

submitButton.onclick = function() {
	// Prevent default event to keep the submit button from reloading the page
	// while retaining its semantics
	event.preventDefault();
	console.log("sick");
	
	// Validate email and set validation message text
	var email = emailInput.value;
	if ((email.endsWith('.com') ||
		email.endsWith('.edu')) &&
		email.includes('@')) {
		validationText.textContent = "Email successfully recorded.";
	}
	else {
		validationText.textContent = "Invalid email address.";
	}
	
	// Make the validation message display if it isn't already
	validationText.classList.remove('invisible');
}