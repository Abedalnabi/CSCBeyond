import React, { useState, useEffect } from 'react';
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
import { getCart, updateCart, clearUserCart, checkout } from '../../../../api/RestfulAPI/cart'; // Added the new checkout function
import useCartContext from '../../../../contextApi/contexts/CartContext';

const CartComponent = () => {
	const [loading, setLoading] = useState(true);
	const { cart, setCart, clearCart } = useCartContext();

	// Fetch cart items on component mount
	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await getCart();
				// Calculate total price for each item in the cart
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
		fetchCartItems();
	}, []);

	// Handle quantity change for an item in the cart
	const handleQuantityChange = (id, change) => {
		const updatedItems = cart?.map((item) =>
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
	const handleClearCart = () => {
		clearCart();
		clearUserCart();
	};

	// Update the cart with the modified quantities
	const handleUpdateCart = async () => {
		try {
			// Prepare the updated products to send to the API
			const updatedProducts = cart.map((item) => ({
				productId: item.product._id,
				quantity: item.quantity,
			}));

			const response = await updateCart(updatedProducts);
			if (response.status === 200) {
				// Recalculate total price after updating the cart
				setCart(
					response.data?.cart.products.map((item) => ({
						...item,
						total: item.quantity * item.product.price,
					}))
				);
			} else {
				console.error('Error updating cart:', response?.data?.message);
			}
		} catch (error) {
			console.error('Error updating cart:', error);
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

		// Prepare the data to send for the checkout
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
				// Clear the cart after successful checkout
				handleClearCart();
				alert('Order placed successfully!');
			} else {
				alert('Error placing the order!');
			}
		} catch (error) {
			console.error('Error during checkout:', error);
			alert('There was an error with your checkout process.');
		}
	};

	// Calculate the subtotal of all items in the cart
	const getSubtotal = () => {
		return cart?.reduce((total, item) => total + item.total, 0);
	};

	// Calculate the total cost of the cart
	const getTotal = () => {
		return getSubtotal();
	};

	// Loading state while cart items are being fetched
	if (loading) {
		return <Typography variant="h6">Loading cart items...</Typography>;
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
								{cart?.map((item) => (
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
							<Typography variant="h6">${getSubtotal()?.toFixed(2)}</Typography>
						</Box>
						<Divider />
						<Box mb={2} mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<Typography variant="h6">Total: </Typography>
							<Typography variant="h6">${getTotal()?.toFixed(2)}</Typography>
						</Box>
						<Divider />
						<Typography mb={3} mt={3} variant="body2" color="#19d16f">
							Shipping & taxes calculated at checkout
						</Typography>
						<Button
							variant="contained"
							sx={{ color: 'white', bgcolor: '#19d16f' }}
							onClick={handleCheckout} // Link to the new checkout function
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
