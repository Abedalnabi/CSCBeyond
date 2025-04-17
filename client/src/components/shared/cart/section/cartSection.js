import React, { useState, useEffect, useMemo } from 'react';
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
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import { getCart, updateCart, clearUserCart, checkout } from '../../../../api/RestfulAPI/cart';
import useCartContext from '../../../../contextApi/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import AppRoutes from '../../../../config/appRoutes';

const CartComponent = () => {
	const [loading, setLoading] = useState(true);
	const [openDialog, setOpenDialog] = useState(false);
	const [dialogMessage, setDialogMessage] = useState('');
	const { cart, setCart, clearCart } = useCartContext();
	const navigate = useNavigate(); // For redirecting to home page

	// Fetch cart items from API
	const fetchCartItems = async () => {
		try {
			const response = await getCart();
			const updatedCart = response.cart.products.map((item) => ({
				...item,
				total: item.quantity * item.product.price,
			}));
			setCart(updatedCart);
		} catch (error) {
			console.error('Error fetching cart items', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchCartItems();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Handle quantity change for an item in the cart
	const handleQuantityChange = (id, change) => {
		const updatedItems = cart.map((item) =>
			item._id === id
				? {
						...item,
						quantity: item.quantity + change,
						total: (item.quantity + change) * item.product.price,
				  }
				: item
		);
		setCart(updatedItems);
	};

	// Clear the cart by removing all items
	const handleClearCart = async () => {
		clearCart();
		clearUserCart();
		setDialogMessage('Cart cleared successfully!');
		setOpenDialog(true);
	};

	// Update the cart with the modified quantities
	const handleUpdateCart = async () => {
		try {
			const updatedProducts = cart.map((item) => ({
				productId: item.product._id,
				quantity: item.quantity,
			}));

			const response = await updateCart(updatedProducts);
			if (response.status === 200) {
				const updatedCart = response.data.cart.products.map((item) => ({
					...item,
					total: item.quantity * item.product.price,
				}));
				setCart(updatedCart);
				setDialogMessage('Cart updated successfully!');
				setOpenDialog(true);
			} else {
				setDialogMessage('Error updating cart!');
				setOpenDialog(true);
			}
		} catch (error) {
			console.error('Error updating cart:', error);
			setDialogMessage('Error updating cart!');
			setOpenDialog(true);
		}
	};

	// Handle the checkout process
	const handleCheckout = async () => {
		const shippingAddress = {
			addressLine1: '123 Main Street',
			addressLine2: 'Apt 4B',
			city: 'Amman',
			postalCode: '12345',
			country: 'Jordan',
			phoneNumber: '1234567890',
		};

		const checkoutData = {
			products: cart.map((item) => ({
				product: item.product._id,
				quantity: item.quantity,
			})),
			shippingAddress,
		};

		try {
			const response = await checkout(checkoutData);
			console.log('response', response);
			if (response.status === 'success') {
				// Show dialog first
				setDialogMessage('Checkout successful! Waiting for admin approval...');
				setOpenDialog(true);

				// Wait for 3 seconds, then redirect to home page
				setTimeout(() => {
					navigate(AppRoutes.HOME); // Redirect to home page
				}, 3000);

				// Optionally, clear the cart after the dialog is shown
				setTimeout(() => {
					handleClearCart(); // Clear cart after dialog
				}, 3000);
			} else {
				setDialogMessage('Error placing the order!');
				setOpenDialog(true);
			}
		} catch (error) {
			console.error('Error during checkout:', error);
			setDialogMessage('There was an error with your checkout process.');
			setOpenDialog(true);
		}
	};

	const getSubtotal = useMemo(() => {
		return cart.reduce((total, item) => total + item.total, 0);
	}, [cart]);

	const getTotal = useMemo(() => getSubtotal, [getSubtotal]);

	// Loading state check
	if (loading) {
		return (
			<Box display="flex" justifyContent="center" alignItems="center" height="100vh">
				<CircularProgress />
			</Box>
		);
	}

	// Empty cart check
	if (cart.length === 0) {
		return (
			<Typography variant="h6" align="center">
				Cart is empty
			</Typography>
		);
	}

	return (
		<Container>
			<Box display="flex" justifyContent="space-between" gap={3} mt={10}>
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
												<Typography variant="body1" sx={{ margin: '0 8px' }}>
													{item.quantity}
												</Typography>
												<Button variant="outlined" onClick={() => handleQuantityChange(item._id, 1)}>
													+
												</Button>
											</Box>
										</TableCell>
										<TableCell>{`$${item.total?.toFixed(2)}`}</TableCell>
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

				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography mb={3} variant="h5">
						Cart Totals
					</Typography>
					<Box p={2} borderRadius={1} bgcolor="#f4f4fc">
						<Box mb={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<Typography variant="h6">Subtotals:</Typography>
							<Typography variant="h6">${getSubtotal?.toFixed(2)}</Typography>
						</Box>
						<Divider />
						<Box mb={2} mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<Typography variant="h6">Total: </Typography>
							<Typography variant="h6">${getTotal?.toFixed(2)}</Typography>
						</Box>
						<Divider />
						<Typography mb={3} mt={3} variant="body2" color="#19d16f">
							Shipping & taxes calculated at checkout
						</Typography>
						<Button
							variant="contained"
							sx={{ color: 'white', bgcolor: '#19d16f' }}
							onClick={handleCheckout}
							style={{ marginTop: '16px', width: '100%' }}
						>
							Proceed To Checkout
						</Button>
					</Box>
				</Box>
			</Box>

			{/* Dialog for success/failure messages */}
			<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
				<DialogTitle>Notification</DialogTitle>
				<DialogContent>
					<Typography variant="body1">{dialogMessage}</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpenDialog(false)} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
};

export default CartComponent;
