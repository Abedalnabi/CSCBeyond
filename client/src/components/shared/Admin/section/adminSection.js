// AdminSection.js
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import OrderList from './orderList';
import ContactList from './contactList';
import styles from './style';

const AdminSection = () => {
	return (
		<Box sx={styles.adminSectionContainer}>
			<Typography mt={7} mb={7} variant="h3" sx={styles.sectionTitle}>
				Admin Section
			</Typography>
			<OrderList />
			<ContactList />
		</Box>
	);
};

export default AdminSection;
