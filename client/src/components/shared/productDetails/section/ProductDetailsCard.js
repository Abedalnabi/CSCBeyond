import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Grid,
	Box,
	Typography,
	Button,
	IconButton,
	CircularProgress,
	Rating,
	Card,
	CardContent,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from '@mui/material';
import { Share as ShareIcon } from '@mui/icons-material';
import styles from './style';
import STATIC_TEXT from './staticText';
import { addToCart } from '../../../../api/RestfulAPI/cart';
import { useNavigate } from 'react-router-dom';
import AppRoutes from '../../../../config/appRoutes';

const ProductDetails = ({ product, loading, error }) => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [dialogContent, setDialogContent] = useState('');
	const [dialogTitle, setDialogTitle] = useState('');
	const navigate = useNavigate();

	const handleAddToCart = async () => {
		try {
			const productWithQuantity = {
				productId: product._id,
				quantity: 1,
			};

			const data = await addToCart(productWithQuantity);

			setDialogTitle('Success');
			setDialogContent(data.message);
			setDialogOpen(true);
		} catch (err) {
			console.error('Error adding product to cart:', err);
			setDialogTitle('Error');
			setDialogContent('Failed to add the product to the cart.');
			setDialogOpen(true);
		}
	};

	const handleCloseDialog = () => {
		setDialogOpen(false);
	};

	const handleGoToCart = () => {
		navigate(AppRoutes.CART);
		handleCloseDialog();
	};

	if (loading) {
		return <CircularProgress sx={{ display: 'block', margin: 'auto', marginTop: '50px' }} />;
	}

	if (error) {
		return (
			<Typography color="error" sx={styles.errorMessage}>
				{STATIC_TEXT.errorMessage}
			</Typography>
		);
	}

	if (!product) {
		return <Typography sx={styles.noProduct}>{STATIC_TEXT.noProductFound}</Typography>;
	}

	return (
		<Container sx={styles.container}>
			<Dialog open={dialogOpen} onClose={handleCloseDialog}>
				<DialogTitle>{dialogTitle}</DialogTitle>
				<DialogContent>
					<Typography>{dialogContent}</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>Close</Button>
					<Button onClick={handleGoToCart} color="primary">
						Go to Cart
					</Button>
				</DialogActions>
			</Dialog>

			<Card sx={styles.card}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={5}>
						<Box sx={styles.imageBox}>
							<Box component="img" src={product.imageUrl} alt={product.name} sx={styles.image} />
						</Box>
					</Grid>

					<Grid item xs={12} md={7}>
						<CardContent>
							<Typography variant="h4" sx={styles.productName}>
								{product.name}
							</Typography>

							<Box sx={styles.ratingBox}>
								<Rating value={product.rated} precision={0.5} readOnly />
								<Typography variant="body2" color="text.secondary">
									({product.salesCount} {STATIC_TEXT.salesText})
								</Typography>
							</Box>

							<Typography variant="h6" color="primary" sx={styles.price}>
								<span style={{ color: 'red' }}>${product.price}</span>
							</Typography>

							<Typography variant="body1" color="text.secondary" sx={styles.description}>
								{product.description}
							</Typography>

							<Typography variant="body1" color="text.secondary" sx={styles.productInfo}>
								{STATIC_TEXT.colorText} {product.color}
							</Typography>

							<Box sx={styles.button}>
								<Button variant="contained" color="primary" fullWidth onClick={handleAddToCart}>
									{STATIC_TEXT.addToCart}
								</Button>
							</Box>

							<Box sx={styles.productDetails}>
								<Typography variant="body2" color="text.secondary">
									{STATIC_TEXT.categoriesText} {product.category?.name}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{STATIC_TEXT.brandText} {product.brand}
								</Typography>
							</Box>

							<Box sx={styles.iconButton}>
								<IconButton>
									<ShareIcon />
									<Typography variant="body2" sx={styles.shareText}>
										{STATIC_TEXT.shareProduct}
									</Typography>
								</IconButton>
							</Box>
						</CardContent>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
};

ProductDetails.propTypes = {
	product: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		rated: PropTypes.number.isRequired,
		salesCount: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
		category: PropTypes.shape({
			name: PropTypes.string,
		}),
		brand: PropTypes.string.isRequired,
	}),
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default ProductDetails;
