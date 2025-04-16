import React from 'react';
import { Container, Box } from '@mui/material';
import InformationAboutUs from './InformationAboutUs';
import ContactWay from './ContactWay';
import GetInTouchForm from './GetInTouchForm';

const InfoAndContactSection = () => {
	return (
		<Container sx={{ textAlign: 'left' }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					gap: '60px',
					marginTop: '50px',
					flexDirection: { xs: 'column', sm: 'row' }, // Ensures responsiveness
				}}
			>
				<InformationAboutUs />
				<ContactWay />
			</Box>

			<GetInTouchForm />
		</Container>
	);
};

export default InfoAndContactSection;
