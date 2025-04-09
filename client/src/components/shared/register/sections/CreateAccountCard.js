import React from 'react';
import { TextField, Button, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Facebook, Google, Apple } from '@mui/icons-material';

const RegisterPage = () => {
	return (
		<Grid item xs={12} md={6}>
			<Grid container spacing={2} alignItems="center">
				<Grid item xs={12} md={6}>
					<Card>
						<CardContent>
							<Typography variant="h4" gutterBottom>
								Create Account
							</Typography>
							<form>
								<TextField label="Email Address" variant="outlined" fullWidth margin="normal" />
								<TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
								<TextField
									label="Confirm Password"
									type="password"
									variant="outlined"
									fullWidth
									margin="normal"
								/>
								<Button variant="contained" fullWidth size="large" style={{ marginTop: '16px' }}>
									Create Account
								</Button>

								<Box textAlign="center" style={{ marginTop: '16px' }}>
									<Typography variant="body2">
										Already created? <a href="#">Login here</a>
									</Typography>
								</Box>

								<Box display="flex" justifyContent="center" style={{ marginTop: '16px' }}>
									<Button variant="outlined" startIcon={<Google />} style={{ marginRight: '8px' }}>
										Sign In with Google
									</Button>
									<Button variant="outlined" startIcon={<Facebook />} style={{ marginRight: '8px' }}>
										Sign In with Facebook
									</Button>
									<Button variant="outlined" startIcon={<Apple />}>
										Sign In with Apple
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
