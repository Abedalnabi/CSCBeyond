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
import { getCart, clearUserCart } from '../../../../api/RestfulAPI/cart';
import useCartContext from '../../../../contextApi/contexts/CartContext';

const CartComponent = () => {
	const [loading, setLoading] = useState(true);
	const { cart, setCart, clearCart } = useCartContext();

	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await getCart();

				const updatedCart = response.cart.products.map((item) => ({
					...item,
					total: item.quantity * item.product.price, // calculate total
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

	const handleQuantityChange = (id, change) => {
		// تحديث الكمية في السلة وحساب الـ total
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

	const handleClearCart = () => {
		clearCart();
		clearUserCart();
	};

	const handleUpdateCart = () => {
		console.log('Cart updated', cart);
	};

	const getSubtotal = () => {
		return cart?.reduce((total, item) => total + item.total, 0);
	};

	const getTotal = () => {
		return getSubtotal();
	};

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
