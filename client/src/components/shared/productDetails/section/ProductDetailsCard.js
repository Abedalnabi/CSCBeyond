import React from 'react';

import { Container, Grid, Box, Typography, Button, IconButton, CircularProgress, Rating, Card, CardContent } from '@mui/material';
import { Share as ShareIcon } from '@mui/icons-material';

const ProductDetails = ({ id, product, loading, error }) => {
	if (loading) {
		return <CircularProgress sx={{ display: 'block', margin: 'auto', marginTop: '50px' }} />;
	}

	if (error) {
		return <Typography color="error">{error}</Typography>;
	}

	if (!product) {
		return <Typography>No product found</Typography>;
	}

	return (
		<Container sx={{ marginTop: 4 }}>
			<Card sx={{ display: 'flex', padding: 2, borderRadius: 2, width: 'auto', boxShadow: 3, textAlign: 'left' }}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={5}>
						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							<Box
								component="img"
								src={product.imageUrl}
								alt={product.name}
								sx={{
									width: '100%',
									height: 400,
									objectFit: 'cover',
									borderRadius: 2,
								}}
							/>
						</Box>
					</Grid>

					<Grid item xs={12} md={7}>
						<CardContent>
							<Typography variant="h4" fontWeight="bold" sx={{ color: '#2c3e50' }}>
								{product.name}
							</Typography>
							<Box sx={{ marginTop: 2 }}>
								<Rating value={product.rated} precision={0.5} readOnly />
								<Typography variant="body2" color="text.secondary">
									({product.salesCount} sales)
								</Typography>
							</Box>

							<Box sx={{ marginTop: 1 }}>
								<Typography variant="h6" color="primary" sx={{ fontSize: '28px' }}>
									<span style={{ color: 'red' }}>${product.price}</span>
								</Typography>
							</Box>

							<Typography variant="body1" color="text.secondary" sx={{ marginTop: 2 }}>
								{product.description}
							</Typography>

							<Box sx={{ marginTop: 2 }}>
								<Typography variant="body1" color="text.secondary">
									Color: {product.color}
								</Typography>
							</Box>

							<Box sx={{ marginTop: 3 }}>
								<Button variant="contained" color="primary" fullWidth>
									Add to Cart
								</Button>
							</Box>

							<Box sx={{ marginTop: 2 }}>
								<Typography variant="body2" color="text.secondary">
									Categories: {product.category?.name}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Brand: {product.brand}
								</Typography>
							</Box>

							<Box sx={{ marginTop: 2 }}>
								<IconButton>
									<ShareIcon />
								</IconButton>
							</Box>
						</CardContent>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
};

export default ProductDetails;
