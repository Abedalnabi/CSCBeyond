import React, { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Button, Grid, Pagination, CircularProgress } from '@mui/material';
import { getProductsFetured } from '../../../../api/RestfulAPI/products';
import { useNavigate } from 'react-router-dom';
import { staticTextsFeatured } from './staticText';
import { productCardStyles } from './style';
import { featuredProductsStyle } from './style';

const FeaturedProducts = () => {
	const [activeProduct, setActiveProduct] = useState(null);
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [productsPerPage] = useState(4);
	const [totalProducts, setTotalProducts] = useState(6);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true);
			try {
				const response = await getProductsFetured(page, productsPerPage);
				setProducts(response.data?.data);
				setTotalProducts(response.data?.totalProducts);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
			setLoading(false);
		};

		fetchProducts();
	}, [page, productsPerPage]);

	const handleProductClick = (productId) => {
		setActiveProduct((prevActiveProduct) => (prevActiveProduct === productId ? null : productId));
	};

	const handlePageChange = (event, value) => {
		setPage(value);
	};

	const productsToDisplay = useMemo(() => {
		return products?.map((product) => (
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
								sx={{
									position: 'absolute',
									bottom: '10px',
									left: '50%',
									transform: 'translateX(-50%)',
								}}
							>
								<Button
									variant="contained"
									sx={productCardStyles.button}
									onClick={() => navigate(`/product/${product._id}`)}
									aria-label={`View details for ${product.name}`}
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
		));
	}, [products, activeProduct]);

	if (loading) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
				<CircularProgress color="primary" />
			</Box>
		);
	}

	return (
		<Box sx={featuredProductsStyle.container}>
			<Typography mt={4} mb={6} variant="h3" sx={{ color: '#151875' }}>
				{staticTextsFeatured.heading.main}
			</Typography>

			<Typography variant="h4" sx={featuredProductsStyle.heading}></Typography>
			<Grid container spacing={4} sx={featuredProductsStyle.gridContainer}>
				{productsToDisplay}
			</Grid>
			<Box sx={featuredProductsStyle.paginationBox}>
				<Pagination
					sx={{ margin: 'auto', marginTop: '20px' }}
					count={Math.ceil(totalProducts / productsPerPage)}
					page={page}
					onChange={handlePageChange}
					color="primary"
				/>
			</Box>
		</Box>
	);
};

export default FeaturedProducts;
