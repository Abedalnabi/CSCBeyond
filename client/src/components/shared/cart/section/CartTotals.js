import React from 'react';
import { Box, Divider, Typography, Button } from '@mui/material';
import { staticText } from './staticText'; // Import static text
import { styles } from './style'; // Import styles

const CartTotals = ({ getSubtotal, handleCheckout }) => (
	<Box sx={styles.cartTotals.container}>
		<Typography mb={3} variant="h5">
			{staticText.cartTotals.title}
		</Typography>
		<Box sx={styles.cartTotals.box}>
			<Box sx={styles.cartTotals.subtotalBox}>
				<Typography variant="h6">{staticText.cartTotals.subtotals}</Typography>
				<Typography variant="h6">${getSubtotal?.toFixed(2)}</Typography>
			</Box>
			<Divider />
			<Box sx={styles.cartTotals.totalBox}>
				<Typography variant="h6">{staticText.cartTotals.total}</Typography>
				<Typography variant="h6">${getSubtotal?.toFixed(2)}</Typography>
			</Box>
			<Divider />
			<Typography sx={styles.cartTotals.shippingText} variant="body2">
				{staticText.cartTotals.shippingText}
			</Typography>
			<Button variant="contained" sx={styles.cartTotals.checkoutButton} onClick={handleCheckout}>
				{staticText.cartTotals.checkoutButton}
			</Button>
		</Box>
	</Box>
);

export default CartTotals;
