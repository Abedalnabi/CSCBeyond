import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import ProductCard from './ProductCard';
import useProductContext from '../../../../contextApi/contexts/ProductContext';
import { getProducts } from '../../../../api/RestfulAPI/products';

const ProductsList = () => {
	const { setProducts, products } = useProductContext();

	const [isLoading, setisLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchProducts = async () => {
		setisLoading(true);
		try {
			const response = await getProducts();
			const productData = response.data;

			setProducts(productData);
		} catch (err) {
			setError(err.message);
		} finally {
			setisLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	if (isLoading) {
		return (
			<Box textAlign="center" mt={5}>
				<Typography>Loading...</Typography>
			</Box>
		);
	}

	if (error) {
		return (
			<Box textAlign="center" mt={5}>
				<Typography color="error">Error: {error}</Typography>
			</Box>
		);
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '100vh',
				px: 2,
			}}
		>
			{products?.map((product) => (
				<Box key={product._id} sx={{ width: '100%', maxWidth: 800 }}>
					<ProductCard
						id={product._id}
						name={product.name}
						price={product.price}
						rated={product.rated}
						imageUrl={product.imageUrl}
						brand={product.brand}
						isFeatured={product.isFeatured}
						category={product.category.name}
					/>
				</Box>
			))}
		</Box>
	);
};

export default ProductsList;
