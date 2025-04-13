import { useState, useCallback } from 'react';
import { validateEmail, validatePassword } from '../../common/validation';

export const useValidation = () => {
	const [fieldErrors, setFieldErrors] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const validateField = useCallback((name, value, password) => {
		setFieldErrors((prev) => {
			let errorMessage = '';
			if (name === 'email') {
				errorMessage = validateEmail(value);
			} else if (name === 'password') {
				errorMessage = validatePassword(value);
			} else if (name === 'confirmPassword') {
				errorMessage = value !== password ? 'Passwords do not match' : '';
			}
			return { ...prev, [name]: errorMessage };
		});
	}, []);

	return { fieldErrors, validateField };
};
