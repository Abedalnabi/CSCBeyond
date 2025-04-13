import React from 'react';
import { Grid, Container } from '@mui/material';
import LoginCard from './sections/LoginCard';
import LoginImage from './sections/LoginImage';

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
				<LoginCard />
				<LoginImage />
			</Grid>
		</Container>
	);
};

export default RegisterPage;
