import React from 'react';
import { Container } from '@mui/material';
import CreateAccountCard from './sections/CreateAccountCard';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';

const RegisterPage = () => {
	return (
		<div>
			<CustomHeader
				title="Register"
				breadcrumbLinks={[
					{ label: 'Home', href: '/' },
					{ label: 'Register', href: '#' },
				]}
			/>
			<Container>
				<CreateAccountCard />
			</Container>
		</div>
	);
};

export default RegisterPage;
