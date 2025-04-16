import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Rating } from '@mui/material';
import { getProductByCategory } from '../../../../api/RestfulAPI/products';
import { useNavigate } from 'react-router-dom';
import { goToTop } from '../../common/goToTop';

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
		<Container sx={{ marginTop: 5, cursor: 'pointer' }}>
			<Typography variant="h4" fontWeight="bold" sx={{ color: '#2c3e50', marginBottom: 5 }}>
				Related Products
			</Typography>

			<Grid container spacing={3} sx={{ marginTop: 2, justifyContent: 'center' }}>
				{relatedProducts?.map((product, index) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={3}
						key={index}
						onClick={() => {
							setLoading(true);
							navigate(`/product/${product?._id}`);
							goToTop();
							setTimeout(() => {
								setLoading(false);
							}, 500);
						}}
					>
						<Card
							sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2, boxShadow: 3 }}
						>
							<CardMedia
								component="img"
								image={product.imageUrl}
								alt={product.name}
								sx={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 2 }}
							/>
							<CardContent sx={{ textAlign: 'center' }}>
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
