// src/utils/validation.js

// Password validation function with enhanced rules (length, uppercase, lowercase, number, special character)
export const validatePassword = (password) => {
	const minLength = password.length >= 6; // Ensure password has at least 6 characters
	const hasUpperCase = /[A-Z]/.test(password); // Check for at least one uppercase letter
	const hasLowerCase = /[a-z]/.test(password); // Check for at least one lowercase letter
	const hasNumbers = /[0-9]/.test(password); // Check for at least one number
	const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Check for special characters

	if (!minLength) {
		return 'Password should be at least 6 characters long.';
	}
	if (!hasUpperCase) {
		return 'Password should contain at least one uppercase letter.';
	}
	if (!hasLowerCase) {
		return 'Password should contain at least one lowercase letter.';
	}
	if (!hasNumbers) {
		return 'Password should contain at least one number.';
	}
	if (!hasSpecialChar) {
		return 'Password should contain at least one special character.';
	}
	return ''; // Return empty if the password meets all requirements
};

// Email validation function using regex
export const validateEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email) ? '' : 'Please enter a valid email address.';
};
