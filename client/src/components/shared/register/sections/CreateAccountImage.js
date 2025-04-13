import React from 'react';
import { TextField, Button, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Facebook, Google, Apple } from '@mui/icons-material';

const RegisterPage = () => {
	return (
		<Grid item xs={12} md={6}>
			<Box textAlign="center">
				<img
					src="https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb" // Replace with your custom illustration
					alt="Illustration"
					style={{ width: '20%', height: 'auto' }}
				/>
			</Box>
		</Grid>
	);
};

export default RegisterPage;
