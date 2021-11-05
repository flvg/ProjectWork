var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

function validated(){
  if (email.value === '') {
    email.style.borderColor = "red";
    email_error.innerHTML = "Questo campo è obbligatorio!";
    email_error.style.visibility = "visible";
    email.focus();
    return false;
  }
  if (password.value === '') {
    password.style.borderColor = "red";
    password_error.innerHTML = "Questo campo è obbligatorio!";
    password_error.style.visibility = "visible";
    password.focus();
    return false;
  }
}
