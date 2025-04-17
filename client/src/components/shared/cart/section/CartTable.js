import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, Box, Paper } from '@mui/material';
import { staticText } from './staticText'; // Import static text
import { styles } from './style'; // Import styles

const CartTable = ({ cart, handleQuantityChange }) => (
	<TableContainer component={Paper} sx={styles.cartTable.container}>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell sx={styles.cartTable.header}>{staticText.cartTable.headers.product}</TableCell>
					<TableCell sx={styles.cartTable.header}>{staticText.cartTable.headers.price}</TableCell>
					<TableCell sx={styles.cartTable.header}>{staticText.cartTable.headers.quantity}</TableCell>
					<TableCell sx={styles.cartTable.header}>{staticText.cartTable.headers.total}</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{cart.map((item) => (
					<TableRow key={item._id}>
						<TableCell>{item.product.name}</TableCell>
						<TableCell>{`$${item.product.price?.toFixed(2)}`}</TableCell>
						<TableCell>
							<Box display="flex" alignItems="center">
								<Button
									variant="outlined"
									onClick={() => handleQuantityChange(item._id, -1)}
									disabled={item.quantity <= 1}
								>
									-
								</Button>
								<Typography variant="body1" sx={styles.cartTable.quantityButton}>
									{item.quantity}
								</Typography>
								<Button variant="outlined" onClick={() => handleQuantityChange(item._id, 1)}>
									+
								</Button>
							</Box>
						</TableCell>
						<TableCell sx={styles.cartTable.totalCell}>{`$${item.total?.toFixed(2)}`}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</TableContainer>
);

export default CartTable;
