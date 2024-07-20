const passwordInput = document.getElementById('password');
const togglePassword = document.querySelector('.togglePassword');

togglePassword.addEventListener('mousedown', () => {
    passwordInput.setAttribute('type', 'text');
});

togglePassword.addEventListener('mouseup', () => {
    passwordInput.setAttribute('type', 'password');
});

togglePassword.addEventListener('mouseleave', () => {
    passwordInput.setAttribute('type', 'password');
});