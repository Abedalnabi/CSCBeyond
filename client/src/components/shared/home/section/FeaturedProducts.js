// FeaturedProducts.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { getProductsFetured } from '../../../../api/RestfulAPI/products';
import { useNavigate } from 'react-router-dom';

const FeaturedProducts = () => {
	const [activeProduct, setActiveProduct] = useState(null);
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getProductsFetured();
				setProducts(response.data?.data);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

		fetchProducts();
	}, []);

	const handleProductClick = (productId) => {
		setActiveProduct(activeProduct === productId ? null : productId);
	};

	return (
		<Box sx={{ padding: '40px 10%', textAlign: 'center' }}>
			<Typography variant="h4" sx={{ marginBottom: '40px', fontWeight: 'bold' }}>
				Featured Products
			</Typography>
			<Grid container spacing={4} justifyContent="center">
				{products.map((product) => (
					<Grid item xs={12} sm={6} md={3} key={product.id}>
						<Box
							sx={{
								position: 'relative',
								maxWidth: 345,
								borderRadius: '5px',
								boxShadow: 3,
								minHeight: '413px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}
						>
							<Box
								sx={{
									position: 'relative',
									cursor: 'pointer',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
								onClick={() => handleProductClick(product._id)}
							>
								<Box
									component="img"
									height="361px"
									width="270px"
									src={product.imageUrl}
									alt={product.name}
									sx={{
										borderRadius: '16px 16px 0 0',
										width: '100%',
									}}
								/>
								{activeProduct === product._id && (
									<Box
										sx={{
											position: 'absolute',
											bottom: '10px',
											left: '50%',
											transform: 'translateX(-50%)',
											zIndex: 2,
										}}
									>
										<Button
											variant="contained"
											sx={{
												width: '150px',
												height: '40px',
												backgroundColor: '#08d15f',
												borderRadius: '2px',
												'&:hover': {
													backgroundColor: '#00c2ff',
												},
											}}
											onClick={() => {
												navigate(`/product/${product._id}`);
											}}
										>
											View Details
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
									variant="h6"
									sx={{
										fontWeight: 'bold',
										marginBottom: 1,
										color: activeProduct === product._id ? 'white' : 'black',
									}}
								>
									{product.name}
								</Typography>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										gap: '4px',
										marginBottom: '16px',
									}}
								>
									<Box sx={{ width: '30px', height: '5px', backgroundColor: '#f54291', borderRadius: '5px' }} />
									<Box sx={{ width: '30px', height: '5px', backgroundColor: '#00c2ff', borderRadius: '5px' }} />
									<Box sx={{ width: '30px', height: '5px', backgroundColor: '#a1c4fd', borderRadius: '5px' }} />
								</Box>
								<Typography
									variant="body2"
									color={activeProduct === product._id ? 'white' : 'text.secondary'}
									sx={{ marginBottom: 2 }}
								>
									Brand: {product.brand}
								</Typography>
								<Typography
									variant="body1"
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
