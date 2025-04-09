// utils/verification.js

// Regular expression to validate email format
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

module.exports = {
	// Function to validate the email format
	verifyEmail: (email) => {
		if (!email || !emailRegex.test(email)) {
			throw new Error('Invalid email format');
		}
	},

	// Function to check if all required fields are provided
	verifyFields: (data) => {
		for (let field in data) {
			const value = data[field];

			if (!value) {
				throw new Error(`${field} is required`); // Throw error if field is missing
			}
		}
	},

	// Function to validate password strength (at least 8 characters, with letters, numbers, and special characters)
	verifyPasswordStrength: (password) => {
		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{8,}$/;
		if (!passwordRegex.test(password)) {
			throw new Error('Password must be at least 8 characters long and contain a letter, number, and special character');
		}
	},
};
