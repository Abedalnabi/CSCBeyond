import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { getProductByLatest } from '../../../../api/RestfulAPI/products';
import { useNavigate } from 'react-router-dom';
import { LatestProductsStyle } from './style';
import { LatestProducts } from './staticText';

const ProductCard = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

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
				{LatestProducts.loading}
			</Typography>
		);
	}

	return (
		<>
			<Typography mt={4} mb={4} variant="h3" sx={LatestProductsStyle.title}>
				{LatestProducts.latestProducts}
			</Typography>

			<Box sx={LatestProductsStyle.productBox}>
				{products.length &&
					products?.map((product) => (
						<Box
							key={product._id}
							onClick={() => {
								navigate(`/product/${product._id}`);
							}}
							sx={LatestProductsStyle.productItem}
						>
							<Box
								component="img"
								sx={LatestProductsStyle.productImage}
								src={product.imageUrl}
								alt={product.name}
							/>
							<Box sx={LatestProductsStyle.productDetails}>
								<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
									<Typography variant="h5" component="div" sx={LatestProductsStyle.productName}>
										{product.name}
									</Typography>
									<Typography variant="h6" color="primary" sx={LatestProductsStyle.productPrice}>
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
