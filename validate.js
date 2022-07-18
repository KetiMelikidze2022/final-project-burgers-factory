// form validation
let formElement = document.getElementById('registration');

formElement.addEventListener('submit', function (event) {

    event.preventDefault();
    let errors = {};
    let form = event.target;

    ValidateUserName(errors);

    ValidatePassword(errors);

    ValidateGender(form, errors);

    ValidateTermsAndConditions(errors);

    form.querySelectorAll('.error-text').forEach(element => {
        element.textContent = '';
    })

    SetErrorsOnElements(errors);

    if (Object.keys(errors).length == 0) {
        form.submit();
    }

    console.log(errors);
})

function SetErrorsOnElements(errors) {
    for (let item in errors) {
        console.log(item);

        let errorSpan = document.getElementById('error_' + item);
        if (errorSpan) {
            errorSpan.textContent = errors[item];
        }

    }
}

let toggleIcon = document.getElementById('toggleIcon');

showHidePassword = () => {
    let password = document.getElementById('password');
    let repeatPassword = document.getElementById('repeatPassword');

    if (password.type == 'password') {
        password.setAttribute('type', 'text');
        repeatPassword.setAttribute('type', 'text');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        toggleIcon.classList.remove('fa-eye-slash');
        password.setAttribute('type', 'password');
        repeatPassword.setAttribute('type', 'password');
    }
};

toggleIcon.addEventListener('click', showHidePassword);


function ValidateTermsAndConditions(errors) {
    let agree = document.getElementById('agree').checked;
    if (!agree) {
        errors.agree = 'You must agree our terms and conditions';
    }
}

function ValidateGender(form, errors) {
    let gender = false;
    form.querySelectorAll('[name = "gender"]').forEach(element => {
        if (element.checked) {
            gender = true;
        }
    });
    if (!gender) {
        errors.gender = 'Please select your gender';
    }
}

function ValidatePassword(errors) {
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('repeatPassword').value;

    if (password != password2 || password == "") {
        errors.password2 = 'Password can not be empty and Passwords do not match';
    }
}

function ValidateUserName(errors) {
    let username = document.getElementById('user').value;

    if (username.length < 5 || username == "") {
        errors.username = 'Username can not be empty and  must be more then 8 characters';
    }
}

