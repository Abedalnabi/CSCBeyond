// FeaturedProducts.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { getProductsFetured } from '../../../../api/RestfulAPI/products';
import { useNavigate } from 'react-router-dom';
import { staticTextsFeatured } from './staticText';
import { productCardStyles } from './style';

const FeaturedProducts = () => {
	const [activeProduct, setActiveProduct] = useState(null);
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getProductsFetured();
				setProducts(response.data?.data || []);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

		fetchProducts();
	}, []);

	const handleProductClick = (productId) => {
		setActiveProduct((prevActiveProduct) => (prevActiveProduct === productId ? null : productId));
	};

	return (
		<Box sx={{ padding: '40px 10%', textAlign: 'center' }}>
			<Typography variant="h4" sx={{ marginBottom: '40px', fontWeight: 'bold' }}>
				{staticTextsFeatured.heading.main}
			</Typography>
			<Grid container spacing={4} justifyContent="center">
				{products.map((product) => (
					<Grid item xs={12} sm={6} md={3} key={product._id}>
						<Box sx={productCardStyles.container}>
							<Box sx={productCardStyles.image} onClick={() => handleProductClick(product._id)}>
								<Box
									component="img"
									height="361px"
									width="270px"
									src={product.imageUrl}
									alt={product.name}
									sx={productCardStyles.img}
								/>
								{activeProduct === product._id && (
									<Box
										sx={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}
									>
										<Button
											variant="contained"
											sx={productCardStyles.button}
											onClick={() => navigate(`/product/${product._id}`)}
										>
											{staticTextsFeatured.buttonText}
										</Button>
									</Box>
								)}
							</Box>

							<Box
								sx={{
									padding: 2,
									textAlign: 'center',
									backgroundColor: activeProduct === product._id ? '#2f1ac4' : 'transparent',
								}}
							>
								<Typography
									sx={{
										fontWeight: 'bold',
										marginBottom: 1,
										color: activeProduct === product._id ? 'white' : 'black',
									}}
								>
									{product.name}
								</Typography>
								<Box sx={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '16px' }}>
									<Box sx={{ width: '30px', height: '5px', backgroundColor: '#f54291', borderRadius: '5px' }} />
									<Box sx={{ width: '30px', height: '5px', backgroundColor: '#00c2ff', borderRadius: '5px' }} />
									<Box sx={{ width: '30px', height: '5px', backgroundColor: '#a1c4fd', borderRadius: '5px' }} />
								</Box>
								<Typography
									sx={{
										fontWeight: 'bold',
										marginBottom: 2,
										color: activeProduct === product._id ? 'white' : 'black',
									}}
								>
									Brand: {product.brand}
								</Typography>
								<Typography
									sx={{
										fontWeight: 'bold',
										marginBottom: 2,
										color: activeProduct === product._id ? 'white' : 'black',
									}}
								>
									{product.price}$
								</Typography>
							</Box>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default FeaturedProducts;
