import React, { useEffect, useState } from 'react';
import { CardContent, Typography, Box, List, ListItem, Divider, Grid, Paper } from '@mui/material';
import { getProductByUserId } from '../../../../api/RestfulAPI/account';
import { staticText } from './staticText';
import { styles } from './style';

const OrderList = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		async function fetchOrders() {
			try {
				const ordersList = await getProductByUserId();
				setOrders(ordersList);
			} catch (error) {
				console.error('Error fetching orders:', error);
				setOrders([]);
			}
		}
		fetchOrders();
	}, []);

	return (
		<Box sx={styles.box}>
			<Typography sx={styles.typographyTitle}>{staticText.orderListTitle}</Typography>
			<Grid container spacing={3}>
				{orders.length === 0 ? (
					<Typography sx={styles.typographyNoOrders}>{staticText.noOrders}</Typography>
				) : (
					orders?.map((order) => (
						<Grid item xs={12} sm={6} md={4} key={order._id}>
							<Paper elevation={6} sx={styles.paper}>
								<CardContent>
									<Typography sx={styles.typographyCardTitle}>
										{staticText.orderId} {order._id}
									</Typography>
									<Typography sx={styles.typographyText}>
										<strong>{staticText.userEmail}</strong> {order.user.email}
									</Typography>
									<Typography sx={styles.typographyText} paragraph>
										<strong>{staticText.shippingAddress}</strong>
										<br />
										{order.shippingAddress.addressLine1}, {order.shippingAddress.addressLine2},<br />
										{order.shippingAddress.city}, {order.shippingAddress.country},<br />
										Phone: {order.shippingAddress.phoneNumber}
									</Typography>
									<Typography sx={styles.typographyBodyPrimary}>
										<strong>{staticText.status}</strong> {order.status}
										<br />
										<strong>{staticText.createdAt}</strong> {new Date(order.createdAt).toLocaleString()}
									</Typography>
									<Divider sx={styles.divider} />
									<Typography sx={styles.typographyText}>
										<strong>{staticText.products}</strong>
									</Typography>
									<List>
										{order.products.map((item) => (
											<ListItem key={item._id}>
												<Typography sx={styles.listItem}>
													{staticText.product} {item.product.name} - {staticText.quantity}{' '}
													{item.quantity} - {staticText.price} {item.product.price}
												</Typography>
											</ListItem>
										))}
									</List>
								</CardContent>
							</Paper>
						</Grid>
					))
				)}
			</Grid>
		</Box>
	);
};

export default OrderList;
