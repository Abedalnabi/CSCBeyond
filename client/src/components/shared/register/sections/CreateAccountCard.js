import React, { useState, useCallback, useEffect } from 'react';
import { Button, Box, Typography, Grid, Card, CardContent, Alert, CircularProgress } from '@mui/material';
import { Facebook, Google, Apple } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../Utilities/CustomTextField/CustomTextField'; // Import the custom text field component
import { validatePassword, validateEmail } from '../../common/validation'; // Import validation functions

import { register } from '../../../../api/RestfulAPI//user';

const RegisterPage = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [loading, setLoading] = useState(false);

	const [fieldErrors, setFieldErrors] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const fields = [
		{ name: 'email', label: 'Email Address', type: 'email' },
		{ name: 'password', label: 'Password', type: 'password' },
		{ name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
	];

	const handleChange = useCallback(
		(e) => {
			const { name, value } = e.target;
			setFormData((prev) => ({ ...prev, [name]: value }));

			if (name === 'email') {
				setFieldErrors((prev) => ({
					...prev,
					email: validateEmail(value),
				}));
			}
			if (name === 'password') {
				setFieldErrors((prev) => ({
					...prev,
					password: validatePassword(value),
				}));
			}
			if (name === 'confirmPassword') {
				setFieldErrors((prev) => ({
					...prev,
					confirmPassword: value !== formData.password ? 'Passwords do not match.' : '',
				}));
			}
		},
		[formData]
	);

	const handleRegister = useCallback(
		async (e) => {
			e.preventDefault();
			setError('');
			setSuccess('');
			setLoading(true);

			const { email, password } = formData;

			const res = await register({ email, password });
			if (res.status !== 201) {
				setError(res.message);
				setLoading(false);
				return;
			}
			setSuccess('Account created successfully. Redirecting to login page...');
			setTimeout(() => navigate('/login'), 2000);
		},
		[formData, navigate]
	);

	return (
		<Grid item xs={12} md={6}>
			<Grid container spacing={2} alignItems="center">
				<Grid item xs={12} md={6}>
					<Card>
						<CardContent>
							<Typography variant="h4" gutterBottom>
								Create Account
							</Typography>

							{error && (
								<Alert severity="error" sx={{ mb: 2 }}>
									{error} {/* Display error message if there's an error */}
								</Alert>
							)}
							{success && (
								<Alert severity="success" sx={{ mb: 2 }}>
									{success} {/* Display success message if registration is successful */}
								</Alert>
							)}

							<form onSubmit={handleRegister}>
								{fields.map((field) => (
									<CustomTextField
										key={field.name}
										label={field.label}
										name={field.name}
										type={field.type}
										value={formData[field.name]}
										onChange={handleChange}
										error={!!fieldErrors[field.name]} // field error state
										helperText={fieldErrors[field.name]} // (error message)
									/>
								))}

								<Button
									variant="contained"
									fullWidth
									size="large"
									type="submit"
									sx={{ mt: 2 }}
									disabled={
										loading ||
										Object.values(fieldErrors).some((err) => err) ||
										!formData.email ||
										!formData.password ||
										!formData.confirmPassword
									}
								>
									{loading ? <CircularProgress size={24} /> : 'Create Account'}
								</Button>

								<Box textAlign="center" sx={{ mt: 2 }}>
									<Typography variant="body2">
										Already have an account? <a href="/login">Login here</a>
									</Typography>
								</Box>

								<Box display="flex" justifyContent="center" sx={{ mt: 2, gap: 1 }}>
									<Button variant="outlined" startIcon={<Google />}>
										Google
									</Button>
									<Button variant="outlined" startIcon={<Facebook />}>
										Facebook
									</Button>
									<Button variant="outlined" startIcon={<Apple />}>
										Apple
									</Button>
								</Box>
							</form>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default RegisterPage;
