import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CircularProgress, Typography, Button } from '@mui/material';
import { getCart, updateCart, clearUserCart, checkout } from '../../../../api/RestfulAPI/cart';
import useCartContext from '../../../../contextApi/contexts/CartContext';
import AppRoutes from '../../../../config/appRoutes';
import CartTable from './CartTable';
import CartTotals from './CartTotals';
import NotificationDialog from './NotificationDialog';
import { staticText } from './staticText';
import { goToTop } from '../../common/goToTop';

const CartSection = () => {
	const [loading, setLoading] = useState(true);
	const [openDialog, setOpenDialog] = useState(false);
	const [dialogMessage, setDialogMessage] = useState('');
	const { cart, setCart, clearCart } = useCartContext();
	const navigate = useNavigate();

	useEffect(() => {
		goToTop();
	}, []);

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

	const handleClearCart = async () => {
		clearCart();
		clearUserCart();
		setDialogMessage(staticText.notifications.cartCleared);
		setOpenDialog(true);
		goToTop();
	};

	const handleUpdateCart = async () => {
		try {
			const updatedProducts = cart.map((item) => ({
				productId: item.product._id,
				quantity: item.quantity,
			}));
			await updateCart(updatedProducts);
			// TODO:update the cart in the redux

			setDialogMessage(staticText.notifications.cartUpdated);
			setOpenDialog(true);
		} catch (error) {
			console.error('Error updating cart:', error);
			setDialogMessage(staticText.notifications.errorUpdatingCart);
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
			if (response.status === 'success') {
				setDialogMessage(staticText.notifications.checkoutSuccess);
				setOpenDialog(true);

				setTimeout(() => {
					navigate(AppRoutes.HOME);
				}, 3000);

				setTimeout(() => {
					handleClearCart();
				}, 3000);
			} else {
				setDialogMessage(staticText.notifications.checkoutError);
				setOpenDialog(true);
			}
		} catch (error) {
			console.error('Error during checkout:', error);
			setDialogMessage(staticText.notifications.checkoutProcessError);
			setOpenDialog(true);
		}
	};

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
				{staticText.notifications.cartEmpty}
			</Typography>
		);
	}

	return (
		<Container>
			<Box display="flex" justifyContent="space-between" gap={3} mt={10}>
				<Box flex={2}>
					<CartTable cart={cart} handleQuantityChange={handleQuantityChange} />
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Button
							variant="contained"
							color="primary"
							onClick={handleUpdateCart}
							style={{ marginTop: '16px', width: '150px' }}
						>
							{staticText.cartTotals.updateCartButton}
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={handleClearCart}
							style={{ marginTop: '16px', width: '150px' }}
						>
							{staticText.cartTotals.clearCartButton}
						</Button>
					</Box>
				</Box>

				<CartTotals getSubtotal={cart.reduce((total, item) => total + item.total, 0)} handleCheckout={handleCheckout} />
			</Box>

			<NotificationDialog open={openDialog} message={dialogMessage} onClose={() => setOpenDialog(false)} />
		</Container>
	);
};

export default CartSection;
