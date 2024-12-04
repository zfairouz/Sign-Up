// Get form and input elements
const form = document.getElementById('registrationForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Get error elements
const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Validation functions
function validateFullName(name) {
    // Only letters (uppercase and lowercase), max 25 characters
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!name) return 'Full Name is required';
    if (name.length > 25) return 'Full Name must be 25 characters or less';
    if (!nameRegex.test(name)) return 'Full Name can only contain letters';
    return '';
}

function validateEmail(email) {
    // Only letters, numbers, . and @, max 20 characters
    const emailRegex = /^[a-zA-Z0-9.@]+$/;
    if (!email) return 'Email is required';
    if (email.length > 20) return 'Email must be 20 characters or less';
    if (!emailRegex.test(email)) return 'Invalid email format';
    return '';
}

function validatePassword(password) {
    if (!password) return 'Password is required';
    if (password.length > 20) return 'Password must be 20 characters or less';
    return '';
}

function validateConfirmPassword(confirmPassword, password) {
    if (!confirmPassword) return 'Please confirm your password';
    if (confirmPassword !== password) return 'Passwords do not match';
    return '';
}

// Function to show error
function showError(input, errorElement, errorMessage) {
    if (errorMessage) {
        input.classList.add('error-input');
        errorElement.textContent = errorMessage;
    } else {
        input.classList.remove('error-input');
        errorElement.textContent = '';
    }
}

// Event listeners for real-time validation
fullNameInput.addEventListener('input', () => {
    const error = validateFullName(fullNameInput.value);
    showError(fullNameInput, fullNameError, error);
});

emailInput.addEventListener('input', () => {
    const error = validateEmail(emailInput.value);
    showError(emailInput, emailError, error);
});

passwordInput.addEventListener('input', () => {
    const error = validatePassword(passwordInput.value);
    showError(passwordInput, passwordError, error);
});

confirmPasswordInput.addEventListener('input', () => {
    const error = validateConfirmPassword(
        confirmPasswordInput.value, 
        passwordInput.value
    );
    showError(confirmPasswordInput, confirmPasswordError, error);
});

// Form submission handler
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    const fullNameError = validateFullName(fullNameInput.value);
    const emailError = validateEmail(emailInput.value);
    const passwordError = validatePassword(passwordInput.value);
    const confirmPasswordError = validateConfirmPassword(
        confirmPasswordInput.value, 
        passwordInput.value
    );

    // Show errors
    showError(fullNameInput, document.getElementById('fullNameError'), fullNameError);
    showError(emailInput, document.getElementById('emailError'), emailError);
    showError(passwordInput, document.getElementById('passwordError'), passwordError);
    showError(
        confirmPasswordInput, 
        document.getElementById('confirmPasswordError'), 
        confirmPasswordError
    );

    // Check if form is valid
    if (!fullNameError && !emailError && !passwordError && !confirmPasswordError) {
        alert('Form submitted successfully!');
        console.log('Form Data:', {
            fullName: fullNameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        });
        form.reset(); // Optional: reset form after successful submission
    }
});