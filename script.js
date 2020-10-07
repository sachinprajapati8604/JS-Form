
var error = document.getElementsByClassName('error');

// Form validation code.

function validate() {

    if (document.myForm.Name.value == "") {
        error[0].innerHTML = "Name required."
        error[0].style.visibility = "visible";
        error[0].style.color = "red";
        document.myForm.Name.focus();
        return false;

    }
    if (document.myForm.Email.value == "") {
        error[1].innerHTML = "Email id required."
        error[1].style.visibility = "visible";
        error[1].style.color = "red";
        document.myForm.Email.focus();
        return false;
    }
    if ((document.myForm.Phone.value == "") || (document.myForm.Phone.value.length != 10)) {
        error[2].innerHTML = "Mobile no. required."
        error[2].style.visibility = "visible";
        error[2].style.color = "red";
        document.myForm.Phone.focus();
        return false;
    }
    if (document.myForm.dob.value == "") {
        error[3].innerHTML = "Dob required."
        error[3].style.visibility = "visible";
        error[3].style.color = "red";
        document.myForm.dob.focus();
        return false;
    }
    if (document.myForm.password.value == "") {
        error[4].innerHTML = "Password required."
        error[4].style.visibility = "visible";
        error[4].style.color = "red";
        document.myForm.password.focus();
        return false;
    }
    return (true);
}

