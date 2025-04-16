import React from 'react';
import { Container, Box } from '@mui/material';
import InformationAboutUs from './InformationAboutUs';
import ContactWay from './ContactWay';
import GetInTouchForm from './GetInTouchForm';
import styles from './style';

const InfoAndContactSection = () => {
	return (
		<Container sx={{ textAlign: 'left' }}>
			<Box sx={styles.sectionWrapper}>
				<InformationAboutUs />
				<ContactWay />
			</Box>

			<GetInTouchForm />
		</Container>
	);
};

export default InfoAndContactSection;
