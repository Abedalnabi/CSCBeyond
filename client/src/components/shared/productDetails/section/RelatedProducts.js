import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Rating } from '@mui/material';
import { getProductByCategory } from '../../../../api/RestfulAPI/products';

const RelatedProducts = ({ categoryID }) => {
	console.log('categoryID', categoryID);
	const [relatedProducts, setRelatedProduct] = useState(null);

	useEffect(() => {
		const fetchProductDetails = async () => {
			try {
				const response = await getProductByCategory(categoryID);
				console.log('response', response?.data?.data);
				setRelatedProduct(response?.data?.data);
			} catch (error) {
				console.error('Failed to fetch related products:', error);
			}
		};

		fetchProductDetails();
	}, [categoryID]);

	console.log('relatedProducts', relatedProducts);

	// const relatedProducts = [
	// 	{ name: 'Mens Fashion Wear', price: 40.0, imageUrl: 'https://via.placeholder.com/150', rating: 4 },
	// 	{ name: "Women's Fashion", price: 60.0, imageUrl: 'https://via.placeholder.com/150', rating: 5 },
	// 	{ name: 'Walk Dummy Fashion', price: 67.0, imageUrl: 'https://via.placeholder.com/150', rating: 3 },
	// 	{ name: 'Top Wall Digital Clock', price: 50.0, imageUrl: 'https://via.placeholder.com/150', rating: 4 },
	// ];

	return (
		<Container sx={{ marginTop: 5 }}>
			<Typography variant="h4" fontWeight="bold" sx={{ color: '#2c3e50', marginBottom: 5 }}>
				Related Products
			</Typography>

			<Grid container spacing={3} sx={{ marginTop: 2, justifyContent: 'center' }}>
				{relatedProducts?.map((product, index) => (
					<Grid item xs={12} sm={6} md={3} key={index}>
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

export default RelatedProducts;
