var name = document.forms['form']['name'];
var surname = document.forms['form']['surname'];
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var password2 = document.forms['form']['password2'];

var name_error = document.getElementById('name_error');
var surname_error = document.getElementById('surname_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');
var password2_error = document.getElementById('password2_error');
/*function validated(){
  if (name.value === '') {
    name.style.borderColor = "red";
    name_error.innerHTML = "Questo campo è obbligatorio!";
    name_error.style.visibility = "visible";
    name.focus();
    return false;
  }
  if (surname.value === '') {
    surname.style.borderColor = "red";
    surname_error.innerHTML = "Questo campo è obbligatorio!";
    surname_error.style.visibility = "visible";
    surname.focus();
    return false;
  }
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
  */

function checkPassword() {
  let password = document.getElementById('password').value;
  let password2 = document.getElementById('password2').value;
  let password2_error = document.getElementById('password2_error');

  if (password.length != 0) {
    if(password === password2){
      password2_error.innerHTML = "Le password corrispondono";
      password2_error.style.visibility = "visible";
      document.getElementById('password2_error').style.color = "green";
      document.getElementById("submit").disabled = false;
    }
    else {
      password2_error.innerHTML = "Le password non corrispondono";
      password2_error.style.visibility = "visible";
      document.getElementById('password2_error').style.color = "red";
      document.getElementById("submit").disabled = true;
    }
  }
}
