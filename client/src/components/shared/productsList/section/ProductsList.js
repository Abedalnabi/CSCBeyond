import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import ProductCard from './ProductCard';
import { getProducts } from '../../../../api/RestfulAPI/products';

const ProductsList = ({ products, setProducts }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const bottomRef = useRef(null);

	const fetchProducts = useCallback(
		async (page) => {
			setIsLoading(true);
			try {
				const response = await getProducts(page);
				const productData = response.data;

				if (Array.isArray(productData)) {
					setProducts((prevProducts) => {
						const validPrevProducts = Array.isArray(prevProducts) ? prevProducts : [];

						const newProducts = productData.filter(
							(product) => !validPrevProducts.some((prevProduct) => prevProduct._id === product._id)
						);
						return [...validPrevProducts, ...newProducts];
					});
				} else {
					setHasMore(false);
				}
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		},
		[setProducts]
	);

	const handleIntersection = useCallback(
		(entries, observer) => {
			const entry = entries[0];
			if (entry.isIntersecting && !isLoading && hasMore) {
				setPage((prevPage) => prevPage + 1);
			}
		},
		[isLoading, hasMore]
	);

	useEffect(() => {
		fetchProducts(page);
	}, [page]);

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			rootMargin: '100px',
		});

		if (bottomRef.current) {
			observer.observe(bottomRef.current);
		}

		return () => {
			if (bottomRef.current) {
				observer.unobserve(bottomRef.current);
			}
		};
	}, []);

	if (isLoading) {
		return (
			<Box textAlign="center" mt={5}>
				<CircularProgress />
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
				px: 2,
				width: '950px',
			}}
		>
			{products.length > 0 ? (
				products.map((product) => (
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
				))
			) : (
				<Typography>No products found</Typography>
			)}
			<div ref={bottomRef} />
		</Box>
	);
};

export default ProductsList;
