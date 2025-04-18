import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { getProductByLatest } from '../../../../api/RestfulAPI/products';

const ProductCard = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getProductByLatest();
				setProducts(response?.data?.data);
			} catch (error) {
				console.error('Error fetching products:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	if (loading) {
		return (
			<Typography variant="h6" color="text.secondary">
				Loading products...
			</Typography>
		);
	}

	return (
		<>
			<Typography variant="h4" sx={{}}>
				Latest Products
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 0,
					padding: '50px 12%',
					textAlign: 'center',
					justifyContent: 'center',
				}}
			>
				{products.length &&
					products?.map((product) => (
						<Box
							key={product.id}
							sx={{
								width: { xs: '100%', sm: '100%', md: 'calc(33.33% - 16px)' }, // عرض 1 منتج لكل سطر في الموبايل و 3 منتجات لكل سطر في الشاشات الأكبر
								overflow: 'hidden',
								padding: { sm: 0, md: 2 },
							}}
						>
							<Box
								component="img"
								sx={{
									objectFit: 'cover',
									height: 350,
									width: '100%',
									backgroundColor: '#f7f7f7',
								}}
								src={product.imageUrl}
								alt={product.name}
							/>
							<Box sx={{ padding: 2 }}>
								<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
									<Typography variant="h5" component="div" sx={{ textAlign: 'right' }}>
										{product.name}
									</Typography>
									<Typography variant="h6" color="primary" sx={{ textAlign: 'left' }}>
										${product.price}{' '}
										<span style={{ textDecoration: 'line-through', color: 'gray' }}>
											${product.originalPrice}
										</span>
									</Typography>
								</Box>
							</Box>
						</Box>
					))}
			</Box>
		</>
	);
};

export default ProductCard;
