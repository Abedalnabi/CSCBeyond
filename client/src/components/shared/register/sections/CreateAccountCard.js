import React, { useState, useCallback } from 'react';
import { Button, Box, Typography, Grid, Card, CardContent, Alert, CircularProgress, Divider, useTheme } from '@mui/material';
import { Facebook, Google, Apple } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../Utilities/CustomTextField/CustomTextField';
import { register } from '../../../../api/RestfulAPI//user';
import STATIC_TEXT from '../staticText';
import { useValidation } from '../helper/useValidation';

const CreateAccountCard = () => {
	const theme = useTheme();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [loading, setLoading] = useState(false);

	const { fieldErrors, validateField } = useValidation();

	const fields = [
		{ name: 'email', label: 'Email Address', type: 'email' },
		{ name: 'password', label: 'Password', type: 'password' },
		{ name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
	];

	const handleChange = useCallback(
		(e) => {
			const { name, value } = e.target;
			setFormData((prev) => ({ ...prev, [name]: value }));
			validateField(name, value, formData.password);
		},
		[formData.password, validateField]
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
			setSuccess(STATIC_TEXT.ACCOUNT_CREATED_SUCCESS);
			setTimeout(() => navigate('/login'), 2000);
		},
		[formData, navigate]
	);

	return (
		<Grid size={{ xs: 12, md: 6 }}>
			<Card
				sx={{
					borderRadius: '16px',
					boxShadow: `0 3px 5px ${theme.palette.grey[700]}`,
					padding: '16px',
				}}
			>
				<CardContent>
					<Typography variant="h4" gutterBottom>
						<span>{STATIC_TEXT.CREATE} </span>
						<span style={{ color: theme.palette.primary.main }}>{STATIC_TEXT.ACCOUNT}</span>
					</Typography>

					<form onSubmit={handleRegister}>
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
								<Alert severity="error" sx={{ mb: 2 }}>
									{error}
								</Alert>
							)}
							{success && (
								<Alert severity="success" sx={{ mb: 2 }}>
									{success}
								</Alert>
							)}
						</Box>

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
							{loading ? <CircularProgress size={24} /> : STATIC_TEXT.CREATE_ACCOUNT}
						</Button>

						<Box textAlign="center" sx={{ mt: 2 }}>
							<Typography variant="body2">
								{STATIC_TEXT.ALREADY_CREATED} <a href="/login">{STATIC_TEXT.LOGIN_HERE}</a>
							</Typography>
						</Box>

						<Box display="flex" justifyContent="center" sx={{ mt: 2, gap: 1 }}>
							<Divider sx={{ margin: '20px', width: '50%' }}>{STATIC_TEXT.OR}</Divider>
						</Box>
						<Box display="flex" justifyContent="center" sx={{ mt: 2, gap: 1 }}>
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

						<Box textAlign="center" sx={{ mt: 3 }}>
							<Typography variant="body2">
								By continuing, you agree to the{' '}
								<span style={{ color: theme.palette.primary.main }}>{STATIC_TEXT.TERMS_OF_SERVICE}</span> and{' '}
								<span style={{ color: theme.palette.primary.main }}>{STATIC_TEXT.PRIVACY_POLICY}</span>
							</Typography>
						</Box>
					</form>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default CreateAccountCard;
