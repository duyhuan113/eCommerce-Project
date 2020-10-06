const controller = {};

controller.register = (data) => {
    view.setErrorMessage('first-name-error', data.firstName === '' ? 'Please Enter Your First Name' : '');
    view.setErrorMessage('last-name-error', data.lastName === '' ? 'Please Enter Your Last Name' : '');

    if (data.email === '') {
        view.setErrorMessage('email-error', 'Please Enter Your Email')

    } else {
        if (validateEmail(data.email) == true) {
            view.setErrorMessage('email-error', '')
            document.getElementById('email-error').innerHTML = '';
        } else {
            view.setErrorMessage('email-error', 'Invalid Email')
        }
    }

    if (data.password === '') {
        view.setErrorMessage('password-error', 'Please Enter Your Password');
    } else {
        if (validatePassword(data.password) == true) {
            view.setErrorMessage('password-error', '');
        } else {
            view.setErrorMessage('password-error', 'Password Must Be Longer Than 6 Characters, Contains 1 Upper Case Character and 1 Number');
        }
    }
    if (data.confirmPassword === '') {
        view.setErrorMessage('confirm-password-error', 'Please Confirm Your Password');
    } else {
        if (data.confirmPassword !== data.password) {
            view.setErrorMessage('confirm-password-error', "Confirm Password Doesn't Match With PassWord");
        } else {
            view.setErrorMessage('confirm-password-error', '');
        }
    }

    if (data.firstName !== '' && data.lastName !== '' && data.email !== '' && data.password !== '' && data.confirmPassword === data.password) {
        model.register(data);
        model.newUser(data);
    };
};

controller.login = (data) => {
    view.setErrorMessage('email-error', data.email === '' ? 'Please Enter Your Email' : '');

    if (data.password === '') {
        view.setErrorMessage('password-error', 'Please Enter Your Password');
    } else {
        if (validatePassword(data.password) == true) {
            view.setErrorMessage('password-error', '');
        } else {
            view.setErrorMessage('password-error', 'Password Must Be Longer Than 6 Characters, Contains 1 Upper Case Character and 1 Number');
        }
    }
    if (data.email !== '' && data.password !== '') {
        model.login(data);
    };
};


function validateEmail(email) {
    const emailFomat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailFomat.test(String(email).toLowerCase());
};

function validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;

    return re.test(password);
};