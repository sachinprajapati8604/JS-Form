const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const dob = document.getElementById('dob');
const password = document.getElementById('pass');


// -----------addding event --------------
form.addEventListener('submit', (event) => {
    event.preventDefault();

    validate();
})

const sendData = (fnameVal, sRate, count) => {
     if (sRate === count) {
         swal("Welcome! " + fnameVal + " Registration Successful");
       
         document.getElementById('form').reset();  //for reset the field after submission
        
       getnormal();
       
//       //  location.href = "user.html?fname=${fnameVal}";
     }

 }

// ---------for final data validation -----by fetch arrow funtion

const Successmsg = (fnameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === 'form-control success') {
            var sRate = 0 + i;
            //     console.log(sRate)
            sendData(fnameVal, sRate, count);
        } else {
            //  console.log("I am in else")
            return false;

        }
    }

}

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1)
        return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2)
        return false;
    if (dot === emailVal.length - 1)
        return false;

    return true;
}

// ---------defining the validate function-------------

const validate = () => {
    // ---------removing white space------
    const fnameVal = fname.value.trim();
    const lnameVal = lname.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const dobVal = dob.value.trim();
    const passwordVal = password.value.trim();


    if (fnameVal === "") {
        setErrormsg(fname, 'first name required');

    } else if (fnameVal.length <= 2) {
        setErrormsg(fname, 'first name should be min 3 character');

    }
    else {
        setSuccessmsg(fname);
    }
    // last name not required for user point of view ...while this field is fill or not it will show green signal to user.
    if (lnameVal === "" || lnameVal != "") {

        setSuccessmsg(lname);
    }

    if (emailVal === "") {
        setErrormsg(email, 'email id required');

    } else if (!isEmail(emailVal)) {
        setErrormsg(email, 'not a valid email id');

    }
    else {
        setSuccessmsg(email);
    }

    if (phoneVal === "") {
        setErrormsg(phone, 'mobile number required');

    } else if (phoneVal.length != 10) {
        setErrormsg(phone, 'mobile number must be 10 digit.');

    }
    else {
        setSuccessmsg(phone);
    }
    if (dobVal === "") {
        setErrormsg(dob, 'Date of birth required');

    }
    else {
        setSuccessmsg(dob);
    }

    if (passwordVal === "") {
        setErrormsg(password, 'password required');

    } else if (passwordVal.length < 8) {
        setErrormsg(password, 'password  should be min 8 character');

    }
    else {
        setSuccessmsg(password);
    }


    Successmsg(fnameVal);


}

function setErrormsg(input, errormsg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsg;


}
function setSuccessmsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function getnormal(){
   var x= document.getElementsByTagName("input");
    var i;
    for(i=0;i<x.length;i++){
        x[i].style.borderColor="transparent";
    }
    var y=document.getElementsByTagName("i");
    var j;
    for(j=0;j<y.length;j++){
        y[j].style.visibility="hidden";
    }
}