import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Rating } from '@mui/material';
import { getProductByCategory } from '../../../../api/RestfulAPI/products';
import { useNavigate } from 'react-router-dom';
import { goToTop } from '../../common/goToTop';
import styles from './style';
import STATIC_TEXT from './staticText';

const RelatedProducts = ({ categoryID, setLoading }) => {
	const navigate = useNavigate();
	const [relatedProducts, setRelatedProducts] = useState(null);

	useEffect(() => {
		const fetchProductDetails = async () => {
			try {
				const response = await getProductByCategory(categoryID);
				setRelatedProducts(response?.data?.data);
			} catch (error) {
				console.error('Failed to fetch related products:', error);
			}
		};

		fetchProductDetails();
	}, [categoryID]);

	return (
		<Container sx={styles.relatedProductsContainer}>
			<Typography variant="h4" sx={styles.relatedProductsTitle}>
				{STATIC_TEXT.relatedProductsTitle}
			</Typography>

			<Grid container spacing={3} sx={{ marginTop: 2, justifyContent: 'center' }}>
				{relatedProducts?.map((product, index) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={3}
						key={product._id}
						onClick={() => {
							setLoading(true);
							navigate(`/product/${product?._id}`);
							goToTop();
							setTimeout(() => {
								setLoading(false);
							}, 500);
						}}
					>
						<Card sx={styles.relatedProductCard}>
							<CardMedia
								component="img"
								image={product.imageUrl}
								alt={product.name}
								sx={styles.relatedProductImage}
							/>
							<CardContent sx={styles.relatedCardContent}>
								<Typography variant="h6" sx={{ color: '#2c3e50' }}>
									{product.name}
								</Typography>
								<Typography variant="body1" sx={{ color: 'primary.main' }}>
									${product.price.toFixed(2)}
								</Typography>
								<Rating value={product.rated} precision={0.5} readOnly />
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

RelatedProducts.propTypes = {
	categoryID: PropTypes.string.isRequired,
	setLoading: PropTypes.func.isRequired,
};

export default RelatedProducts;
