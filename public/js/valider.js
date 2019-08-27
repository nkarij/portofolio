/* dette erstatter onsubmit i html, men så skal HTML fjernes fra form-element */

// let form = document.querySelector('#formular');
let form = document.forms.formular;

form.addEventListener('submit', function(event){
    event.preventDefault();
    // console.log(form);
    valider(form);   
});


function valider(form){
    // FIRST NAME
    if(form.nameinput.value.length == "") {
        form.querySelector(".nameinput__error").style.display = "block";
        form.querySelector(".nameinput__error").innerHTML = "Udfyld feltet";
        form.nameinput.focus();
        return false;
    }else if(form.nameinput.value.length < 2) {
        form.querySelector(".nameinput__error").style.display = "block";
        form.querySelector(".nameinput__error").innerHTML = "Mindst 2 bogstaver";
        form.nameinput.focus();
        return false;
    }else if(!isNaN(form.nameinput.value)) {
        form.querySelector(".nameinput__error").style.display = "block";
        form.querySelector(".nameinput__error").innerHTML = "Må ikke indeholde tal";
        form.nameinput.focus();
        return false;
    } else {
        form.querySelector(".nameinput__error").style.display = "none";
        form.querySelector(".nameinput__error").innerHTML = "";
    }

    // LAST NAME
    if(form.surnameinput.value.length == "") {
        form.querySelector(".surnameinput__error").style.display = "block";
        form.querySelector(".surnameinput__error").innerHTML = "Udfyld feltet";
        form.surnameinput.focus();
        return false;
    }else if(form.surnameinput.value.length < 2) {
        form.querySelector(".surnameinput__error").style.display = "block";
        form.querySelector(".surnameinput__error").innerHTML = "Navn skal være mindst 2 bogstaver";
        form.surnameinput.focus();
        return false;
    }else if(!isNaN(form.surnameinput.value)) {
        form.querySelector(".surnameinput__error").style.display = "block";
        form.querySelector(".surnameinput__error").innerHTML = "Må ikke indeholde tal";
        form.surnameinput.focus();
        return false;
    } else {
        form.querySelector(".surnameinput__error").style.display = "none";
        form.querySelector(".surnameinput__error").innerHTML = "";
    }

    // EMAIL
    if(form.mailinput.value.length < 1){
        form.querySelector(".mailinput__error").style.display = "block";
        form.querySelector(".mailinput__error").innerHTML = "Udfyld feltet";
        // form.mailinput.style.backgroundColor = "#ffaaaa";
        form.mailinput.focus();
        return false;
    }else{
        if(validateEmail(form.mailinput.value)){ //NB! se Regex nederst!
            form.querySelector(".mailinput__error").style.backgroundColor = "transparent";
            form.querySelector(".mailinput__error").innerHTML = "";
        }else{
            form.querySelector(".mailinput__error").style.display = "block";
            form.querySelector(".mailinput__error").innerHTML = "Forkert mailadresse";
            // form.email.style.backgroundColor = "#ffaaaa";
            form.mailinput.focus();
            return false;
           }
    }

    // PHONE NUMBER
    if(form.tlfinput.value.length < 1){
        form.querySelector(".tlfinput__error").style.display = "block";
        form.querySelector(".tlfinput__error").innerHTML = "Udfyld feltet";
        // form.mailinput.style.backgroundColor = "#ffaaaa";
        form.tlfinput.focus();
        return false;
    }else{
        console.log(form.tlfinput.value);
        if(validatePhone(form.tlfinput)){ //NB! se Regex nederst!
            form.querySelector(".tlfinput__error").style.backgroundColor = "transparent";
            form.querySelector(".tlfinput__error").innerHTML = "";
        }else{
            form.querySelector(".tlfinput__error").style.display = "block";
            form.querySelector(".tlfinput__error").innerHTML = "Format: 8 tal, ingen mellemrum";
            // form.email.style.backgroundColor = "#ffaaaa";
            form.tlfinput.focus();
            return false;
           }
    }

    addSubmitMessage(form);
};


function addSubmitMessage(form){
    let parentElement = document.querySelector('#formular-submit-message__area')
    let cloneThisNode = document.querySelector('#formular-submit-message');
    let duplicateNode = cloneThisNode.cloneNode(true);
    // console.log(form);
    // console.log(duplicateNode);
    form.innerHTML = "";
    parentElement.classList.add('submit-message__active')
    parentElement.insertAdjacentElement('beforeend', duplicateNode);

}


// REGEXs


function validateEmail(email){
    let regEx = /(.+)@(.+){2,}\.(.+){2,}$/; 
    return regEx.test(String(email).toLowerCase()); 
};

// 8 cifres, no whitespace.
function validatePhone(tlfinput){
  let regEx = /^\d{8}$/;
//   console.log(regEx);
//   console.log(tlfinput);
  if((tlfinput.value.match(regEx))){
        return true;
    } else {
        // alert("message");
        return false;
    }
}