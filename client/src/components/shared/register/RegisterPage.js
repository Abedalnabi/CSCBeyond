import React from 'react';
import { Grid, Container } from '@mui/material';
import CreateAccountCard from './sections/CreateAccountCard';
import CreateAccountImage from './sections/CreateAccountImage';

const RegisterPage = () => {
	return (
		<Container>
			<Grid
				container
				spacing={5}
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '50px',
				}}
			>
				<CreateAccountCard />
				<CreateAccountImage />
			</Grid>
		</Container>
	);
};

export default RegisterPage;
