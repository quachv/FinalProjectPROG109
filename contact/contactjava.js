function ValidateForm(){
	var validFullname = false;
	var userEmail = document.getElementById("email").value;
	var validEmail = false;
	var errorMessages ="";  // All the error messages are going to stay in this variable
	var validateComment = false;

	if (fullname.value===null || fullname.value==="")
		errorMessages += "<p>Error. Name field is required.</p>";
	else
		validFullname = true; 

	if (email.value==="" || email.value===null)
		errorMessages += "<p>Error. Email is required.</p>";
	else
		validEmail = true; 
	
	if (comments.value===null|| comments.value==="")
		errorMessages += "<p>Error. Comment is required.</p>";
	else
		validComment = true; 
	
	document.getElementByID("errorMessages").innerHTML = errorMessages;

	return(validFullName && validEmail && validComment)
}