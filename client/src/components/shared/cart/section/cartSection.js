import React, { useState } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Button,
	Paper,
	Typography,
	Box,
	Container,
	Divider,
} from '@mui/material';

const CartComponent = () => {
	const [cartItems, setCartItems] = useState([
		{ id: 1, name: 'Ut diam consequat', price: 32.0, quantity: 1, total: 32.0 },
		{ id: 2, name: 'Vel faucibus posuere', price: 32.0, quantity: 1, total: 32.0 },
		{ id: 3, name: 'Ac vitae vestibulum', price: 32.0, quantity: 1, total: 32.0 },
		{ id: 4, name: 'Elit massa diam', price: 32.0, quantity: 1, total: 32.0 },
		{ id: 5, name: 'Proin pharetra elementum', price: 32.0, quantity: 1, total: 32.0 },
	]);

	const handleQuantityChange = (id, change) => {
		const updatedItems = cartItems.map((item) =>
			item.id === id ? { ...item, quantity: item.quantity + change, total: (item.quantity + change) * item.price } : item
		);
		setCartItems(updatedItems);
	};

	const handleClearCart = () => {
		setCartItems([]);
	};

	const handleUpdateCart = () => {
		console.log('Cart updated', cartItems);
	};

	const getSubtotal = () => {
		return cartItems.reduce((total, item) => total + item.total, 0);
	};

	const getTotal = () => {
		return getSubtotal();
	};

	return (
		<Container>
			<Box display="flex" justifyContent="space-between" gap={3} mt={10}>
				{/* Cart Items */}
				<Box flex={2}>
					<TableContainer component={Paper} sx={{ boxShadow: 'none', border: 'none' }}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell sx={{ color: '#1d3178', fontSize: '20px', fontWeight: 'bold' }}>Product</TableCell>
									<TableCell sx={{ color: '#1d3178', fontSize: '20px', fontWeight: 'bold' }}>Price</TableCell>
									<TableCell sx={{ color: '#1d3178', fontSize: '20px', fontWeight: 'bold' }}>
										Quantity
									</TableCell>
									<TableCell sx={{ color: '#1d3178', fontSize: '20px', fontWeight: 'bold' }}>Total</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{cartItems.map((item) => (
									<TableRow key={item.id}>
										<TableCell>{item.name}</TableCell>
										<TableCell>{`$${item.price.toFixed(2)}`}</TableCell>
										<TableCell>
											<Box display="flex" alignItems="center">
												<Button
													variant="outlined"
													onClick={() => handleQuantityChange(item.id, -1)}
													disabled={item.quantity <= 1}
												>
													-
												</Button>
												<Typography variant="body1" sx={{ margin: '0 8px' }}>
													{item.quantity}
												</Typography>
												<Button variant="outlined" onClick={() => handleQuantityChange(item.id, 1)}>
													+
												</Button>
											</Box>
										</TableCell>
										<TableCell>{`$${item.total.toFixed(2)}`}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<Button
								variant="contained"
								color="primary"
								onClick={handleUpdateCart}
								style={{ marginTop: '16px', width: '150px' }}
							>
								Update Cart
							</Button>
							<Button
								variant="contained"
								color="primary"
								onClick={handleClearCart}
								style={{ marginTop: '16px', width: '150px' }}
							>
								Clear Cart
							</Button>
						</Box>
					</TableContainer>
				</Box>

				{/* Cart Totals */}
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography mb={3} variant="h5">
						Cart Totals
					</Typography>
					<Box p={2} borderRadius={1} bgcolor="#f4f4fc">
						<Box mb={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<Typography variant="h6">Subtotals:</Typography>
							<Typography variant="h6">${getSubtotal().toFixed(2)}</Typography>
						</Box>
						<Divider />
						<Box mb={2} mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<Typography variant="h6">Total: </Typography>
							<Typography variant="h6">${getTotal().toFixed(2)}</Typography>
						</Box>
						<Divider />

						<Typography mb={3} mt={3} variant="body2" color="#19d16f">
							Shipping & taxes calculated at checkout
						</Typography>
						<Button
							variant="contained"
							sx={{ color: 'white', bgcolor: '#19d16f' }}
							style={{ marginTop: '16px', width: '100%' }}
						>
							Proceed To Checkout
						</Button>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default CartComponent;
