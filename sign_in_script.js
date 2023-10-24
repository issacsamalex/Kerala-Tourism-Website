var emailError = document.getElementById('email-error');

function validateEmail() {
    var email = document.getElementById('floatingInput').value;
    var emailBox = document.getElementById('floatingInput');

    if (email.length == 0) {
        emailError.innerHTML = '*email is required';
        emailBox.style.borderColor = "#cc0000";
        emailBox.style.boxShadow = "0px 0px 10px 2px #ffcccc";
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = '*email invalid';
        emailBox.style.borderColor = "#cc0000";
        emailBox.style.boxShadow = "0px 0px 10px 2px #ffcccc";
        return false;
    } else {
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        emailBox.removeAttribute("style");
        return true;
    }
}

let showPasswordBtn = document.querySelector('.show-password');
let passwordInp = document.querySelector('#floatingPassword');
let passwordChecklist = document.querySelectorAll('.list-item');
let msg = document.getElementById('message');
let str = document.getElementById('strength');

showPasswordBtn.addEventListener('click', () => {
    showPasswordBtn.classList.toggle('fa-eye');
    showPasswordBtn.classList.toggle('fa-eye-slash');

    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';
})

// strong password validation

let validationRegex = [
    { regex: /.{8,}/ },
    { regex: /[0-9]/ },
    { regex: /[a-z]/ },
    { regex: /[A-Z]/ },
]

passwordInp.addEventListener('keyup', () => {
    validationRegex.forEach((item, i) => {
        let isValid = item.regex.test(passwordInp.value.replace(/\s/g, ""));
        if (isValid) {
            passwordChecklist[i].classList.add('checked');
        } else {
            passwordChecklist[i].classList.remove('checked')
        }
    })
})

// Password strength validation

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.{8,}/;

function trigger() {
    if (passwordInp.value.replace(/\s/g, "").length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
    if (passwordInp.value.replace(/\s/g, "").length <= 3 && (passwordInp.value.match(regExpWeak) || passwordInp.value.match(regExpMedium) || passwordInp.value.match(regExpStrong))) no = 1;
    if (passwordInp.value.replace(/\s/g, "").length >= 6 && ((passwordInp.value.match(regExpWeak) && passwordInp.value.match(regExpMedium)) || (passwordInp.value.match(regExpMedium) && passwordInp.value.match(regExpStrong)) || (passwordInp.value.match(regExpWeak) && passwordInp.value.match(regExpStrong)))) no = 2;
    if (passwordInp.value.replace(/\s/g, "").length >= 8 && passwordInp.value.match(regExpWeak) && passwordInp.value.match(regExpMedium) && passwordInp.value.match(regExpStrong)) no = 3;
    if (no == 1) {
        str.innerHTML = "weak";
        passwordInp.style.boxShadow = "0px 0px 10px 2px #ffcccc"
        passwordInp.style.borderColor = "#cc0000";
        msg.style.color = "#cc0000";
    }
    if (no == 2) {
        str.innerHTML = "medium";
        passwordInp.style.boxShadow = "0px 0px 10px 2px #ffdd99"
        passwordInp.style.borderColor = "#cc8800";
        msg.style.color = "#cc8800";
    }
    if (no == 3) {
        str.innerHTML = "strong";
        passwordInp.style.boxShadow = "0px 0px 10px 2px #b3ffb3"
        passwordInp.style.borderColor = "#00cc00";
        msg.style.color = "#00cc00";
    }
    if (passwordInp.value.length == 0) {
        msg.style.display = "block";
        str.innerHTML = "required";
        passwordInp.style.boxShadow = "0px 0px 10px 2px #ffcccc"
        passwordInp.style.borderColor = "#cc0000";
        msg.style.color = "#cc0000";
    }
}