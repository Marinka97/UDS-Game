
function myFunction() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}



function validateEmail(email) {
  var x = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return x.test(email);
}

function validate() {
  var $result = $("#result");
  var email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
	document.getElementById('email').style.borderColor = "green";
  } else {
    $result.text(" The E-mail is not valid :(");
    document.getElementById('email').style.borderColor = "red";
  }
  return false;
}

$("#validate").bind("click", validate);