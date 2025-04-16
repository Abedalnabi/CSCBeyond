import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import styles from './style';
import STATIC_TEXT from './staticText';

const OrderCompleted = () => {
	const navigate = useNavigate();

	return (
		<Container sx={styles.container}>
			<Box sx={styles.iconBox}>
				<CheckCircleIcon sx={styles.icon} />
			</Box>

			<Typography variant="h4" sx={styles.title}>
				{STATIC_TEXT.TITLE}
			</Typography>

			<Typography variant="body1" sx={styles.subtitle}>
				{STATIC_TEXT.DESCRIPTION}
			</Typography>

			<Button variant="contained" color="primary" sx={styles.button} onClick={() => navigate('/products')}>
				{STATIC_TEXT.BUTTON}
			</Button>
		</Container>
	);
};

export default OrderCompleted;
