import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

// TODO: sepreate the static text and the style
const OrderCompleted = () => {
	const navigate = useNavigate();
	return (
		<Container sx={{ textAlign: 'center', mt: 5, width: '650px' }}>
			<Box sx={{ mt: 4 }}>
				<CheckCircleIcon sx={{ fontSize: 60, color: 'green' }} />
			</Box>
			<Typography variant="h4" sx={{ mt: 2, fontWeight: 'bold' }}>
				Your Order Is Completed!
			</Typography>
			<Typography variant="body1" sx={{ mt: 2, color: 'gray' }}>
				Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive
				an email confirmation when your order is completed.
			</Typography>

			<Button
				variant="contained"
				color="primary"
				sx={{ mt: 4, backgroundColor: '#FF4081', '&:hover': { backgroundColor: '#D500F9' } }}
				onClick={() => {
					navigate('/products');
				}}
			>
				Continue Shopping
			</Button>
		</Container>
	);
};

export default OrderCompleted;
