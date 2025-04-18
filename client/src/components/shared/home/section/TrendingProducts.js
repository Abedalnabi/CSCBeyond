import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import ProductImage from './../../assets/img/boxforimage.png';
import ProductImage2 from './../../assets/img/box for image (2).png';
import ProductImage3 from './../../assets/img/box for image (3).png';
import ProductImage4 from './../../assets/img/box for image (4).png';
import { trendingProductsStyles } from './style';
import { trendingStaticText } from './staticText';

const TrendingProducts = () => {
	const products = [
		{ id: 1, name: 'Cantilever chair', price: 26.0, originalPrice: 42.0, imageUrl: ProductImage },
		{ id: 2, name: 'Cantilever chair', price: 26.0, originalPrice: 42.0, imageUrl: ProductImage2 },
		{ id: 3, name: 'Cantilever chair', price: 26.0, originalPrice: 42.0, imageUrl: ProductImage3 },
		{ id: 4, name: 'Cantilever chair', price: 26.0, originalPrice: 42.0, imageUrl: ProductImage4 },
	];

	return (
		<Box sx={trendingProductsStyles.container}>
			<Typography variant="h4" sx={trendingProductsStyles.heading}>
				{trendingStaticText.heading}
			</Typography>

			<Grid container spacing={4} justifyContent="center">
				{products.map((product) => (
					<Grid item xs={12} sm={6} md={3} key={product.id}>
						<Paper sx={trendingProductsStyles.paper}>
							<img src={product.imageUrl} alt={product.name} style={trendingProductsStyles.image} />
							<Typography variant="h6" sx={trendingProductsStyles.productName}>
								{product.name}
							</Typography>
							<Box sx={trendingProductsStyles.priceContainer}>
								<Typography variant="body1" sx={trendingProductsStyles.originalPrice}>
									${product.originalPrice}
								</Typography>
								<Typography variant="h6" sx={trendingProductsStyles.currentPrice}>
									${product.price}
								</Typography>
							</Box>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default TrendingProducts;
