document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const message = document.getElementById('message');
    const letter = document.getElementById('letter');
    const capital = document.getElementById('capital');
    const number = document.getElementById('number');
    const length = document.getElementById('length');

    passwordInput.onkeyup = function() {
        let valid = true;

        // Validate lowercase letters
        const lowerCaseLetters = /[a-z]/g;
        if(passwordInput.value.match(lowerCaseLetters)) {
            letter.classList.remove('invalid');
            letter.classList.add('valid');
        } else {
            letter.classList.remove('valid');
            letter.classList.add('invalid');
            valid = false;
        }

        // Validate capital letters
        const upperCaseLetters = /[A-Z]/g;
        if(passwordInput.value.match(upperCaseLetters)) {
            capital.classList.remove('invalid');
            capital.classList.add('valid');
        } else {
            capital.classList.remove('valid');
            capital.classList.add('invalid');
            valid = false;
        }

        // Validate numbers
        const numbers = /[0-9]/g;
        if(passwordInput.value.match(numbers)) {
            number.classList.remove('invalid');
            number.classList.add('valid');
        } else {
            number.classList.remove('valid');
            number.classList.add('invalid');
            valid = false;
        }

        // Validate length
        if(passwordInput.value.length >= 8) {
            length.classList.remove('invalid');
            length.classList.add('valid');
        } else {
            length.classList.remove('valid');
            length.classList.add('invalid');
            valid = false;
        }

        // Show or hide the message
        if (valid) {
            message.style.display = 'none';
        } else {
            message.style.display = 'block';
        }
    }
});
