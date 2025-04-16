import React, { useState, useCallback } from 'react';
import { Button, Box, Typography, Grid, Card, CardContent, Alert, CircularProgress, Divider, useTheme } from '@mui/material';
import { Facebook, Google, Apple } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

import CustomTextField from '../../Utilities/CustomTextField/CustomTextField';
import { loginUser } from '../../../../api/RestfulAPI/user';
import STATIC_TEXT from './staticText';
import { useValidation } from '../../common/helper/useValidation';
import useUserContext from '../../../../contextApi/contexts/UserContext';
import loginStyles from './style';

const LoginCard = () => {
	const theme = useTheme();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [success, setSuccess] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const { login } = useUserContext();
	const { fieldErrors, validateField } = useValidation();

	const fields = [
		{ name: 'email', label: 'Email Address', type: 'email' },
		{ name: 'password', label: 'Password', type: 'password' },
	];

	const handleChange = useCallback(
		(e) => {
			const { name, value } = e.target;
			setFormData((prev) => ({ ...prev, [name]: value }));
			validateField(name, value);
		},
		[validateField]
	);

	const handleLogin = useCallback(
		async (e) => {
			e.preventDefault();
			setError('');
			setSuccess('');
			setLoading(true);

			const { email, password } = formData;

			try {
				const res = await loginUser({ email, password });

				if (res.status !== 200) {
					setError(res.message);
					setLoading(false);
					return;
				}

				if (res.token) login(res.token);
				setSuccess(STATIC_TEXT.LOGIN_SUCCESS);
				setTimeout(() => navigate('/'), 2000);
			} catch (err) {
				console.error('Login error:', err);
				setError('An error occurred, please try again.');
				setLoading(false);
			}
		},
		[formData, navigate, login, setError]
	);

	const isFormValid = Object.values(fieldErrors).every((err) => !err) && formData.email && formData.password;

	return (
		<Grid container spacing={5} sx={loginStyles.gridContainer}>
			<Grid item xs={12} md={6}>
				<Card sx={loginStyles.card(theme)}>
					<CardContent>
						<Typography variant="h4" gutterBottom>
							<span style={loginStyles.loginTitle(theme)}>{STATIC_TEXT.LOGIN}</span>
						</Typography>

						<form onSubmit={handleLogin}>
							{fields.map((field) => (
								<CustomTextField
									key={field.name}
									label={field.label}
									name={field.name}
									type={field.type}
									value={formData[field.name]}
									onChange={handleChange}
									error={!!fieldErrors[field.name]}
									helperText={fieldErrors[field.name]}
								/>
							))}

							<Box>
								{error && (
									<Alert severity="error" sx={loginStyles.alertBox}>
										{error}
									</Alert>
								)}
								{success && (
									<Alert severity="success" sx={loginStyles.alertBox}>
										{success}
									</Alert>
								)}
							</Box>

							<Box sx={{ mt: 2 }}>
								<Typography textAlign="start" variant="body2">
									<Link to="/forgetPassword" style={loginStyles.forgotPasswordLink}>
										{STATIC_TEXT.FORGET_PASSWORD}
									</Link>
								</Typography>
							</Box>

							<Button
								variant="contained"
								fullWidth
								size="large"
								type="submit"
								sx={{ mt: 2 }}
								disabled={isLoading || !isFormValid}
							>
								{isLoading ? <CircularProgress size={24} /> : STATIC_TEXT.LOGIN_BUTTON}
							</Button>

							<Box textAlign="center" sx={{ mt: 2 }}>
								<Typography variant="body2">
									{STATIC_TEXT.DONT_HAVE_ACCOUNT} <Link to="/register">{STATIC_TEXT.REGISTER_HERE}</Link>
								</Typography>
							</Box>

							<Box display="flex" justifyContent="center" sx={{ mt: 2, gap: 1 }}>
								<Divider sx={loginStyles.orDivider}>{STATIC_TEXT.OR}</Divider>
							</Box>

							<Box sx={loginStyles.socialButtonsBox}>
								<Button variant="outlined" startIcon={<Google />}>
									{STATIC_TEXT.GOOGLE}
								</Button>
								<Button variant="outlined" startIcon={<Facebook />}>
									{STATIC_TEXT.FACEBOOK}
								</Button>
								<Button variant="outlined" startIcon={<Apple />}>
									{STATIC_TEXT.APPLE}
								</Button>
							</Box>
						</form>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default LoginCard;
