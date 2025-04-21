// OrderList.js
import React, { useEffect, useState } from 'react';
import {
	Box,
	CircularProgress,
	List,
	ListItem,
	ListItemText,
	Typography,
	Paper,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import { getOrders, updateOrder } from '../../../../api/RestfulAPI/order';
import styles from './style';
import staticText from './staticText';

const updateOrders = 'delivered';

const OrderList = () => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const [openDialog, setOpenDialog] = useState(false);
	const [selectedOrderId, setSelectedOrderId] = useState(null);

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await getOrders();
				setOrders(response.data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching orders:', error);
				setLoading(false);
			}
		};

		fetchOrders();
	}, []);

	const handleApprove = async (orderId, status) => {
		try {
			const updateParms = {
				orderId: orderId,
				status: status,
			};
			await updateOrder(updateParms);
			setSelectedOrderId(orderId);
			setOpenDialog(true);
		} catch (error) {
			console.error('Error approving order:', error);
		}
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
		window.location.reload();
	};

	if (loading) {
		return <CircularProgress />;
	}

	return (
		<Box sx={styles.orderListContainer}>
			<Typography mb={4} textAlign={'left'} variant="h3" sx={styles.title}>
				{staticText.ordersTitle}
			</Typography>

			{orders?.map(
				(order) =>
					order.status === 'pending' && (
						<Paper key={order._id} sx={styles.tableContainer} variant="outlined">
							<List>
								<ListItem>
									<ListItemText primary={`Order ID: ${order._id}`} secondary={`Status: ${order.status}`} />
								</ListItem>
								<ListItem>
									<ListItemText
										primary={staticText.shippingAddressTitle}
										secondary={`${order.shippingAddress.addressLine1}, ${order.shippingAddress.addressLine2}, ${order.shippingAddress.city}, ${order.shippingAddress.country}, ${order.shippingAddress.postalCode}`}
									/>
								</ListItem>
								<ListItem>
									<ListItemText
										primary={`${staticText.phoneNumberTitle}: ${order.shippingAddress.phoneNumber}`}
									/>
								</ListItem>
								<ListItem>
									<ListItemText
										primary={staticText.productsTitle}
										secondary={
											<ul>
												{order.products.map((product) => (
													<li key={product._id}>
														{/* {product?.product.name} - ${product.product.price} x {product.quantity} */}
													</li>
												))}
											</ul>
										}
									/>
								</ListItem>
								<ListItem>
									<ListItemText
										primary={`${staticText.createdAtTitle}: ${new Date(
											order.createdAt
										).toLocaleDateString()}`}
									/>
								</ListItem>
								<ListItem>
									<Button
										variant="contained"
										color="primary"
										onClick={() => handleApprove(order._id, updateOrders)}
										sx={styles.button}
									>
										{staticText.approveButtonText}
									</Button>
								</ListItem>
							</List>
						</Paper>
					)
			)}

			<Dialog open={openDialog} onClose={handleCloseDialog}>
				<DialogTitle>{staticText.dialogTitle}</DialogTitle>
				<DialogContent>
					<Typography variant="body1">{staticText.dialogMessage}</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog} color="primary">
						{staticText.dialogButtonText}
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default OrderList;
