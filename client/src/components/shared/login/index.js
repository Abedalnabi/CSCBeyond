import React from 'react';
import { Container } from '@mui/material';
import LoginCard from './sections/LoginCard';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';

const LoginPage = () => {
	return (
		<div>
			<CustomHeader
				title="Login"
				breadcrumbLinks={[
					{ label: 'Home', href: '/' },
					{ label: 'Login', href: '#' },
				]}
			/>
			<Container>
				<LoginCard />
			</Container>
		</div>
	);
};

export default LoginPage;
