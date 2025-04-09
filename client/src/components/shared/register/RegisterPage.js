import React from 'react';
import { Grid, Container } from '@mui/material';
import CreateAccountCard from './sections/CreateAccountCard';
import CreateAccountImage from './sections/CreateAccountImage';

const RegisterPage = () => {
	return (
		<Container>
			<Grid container spacing={3} alignItems="center">
				<CreateAccountCard />
				<CreateAccountImage />
			</Grid>
		</Container>
	);
};

export default RegisterPage;
