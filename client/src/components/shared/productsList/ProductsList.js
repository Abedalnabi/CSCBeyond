import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import ProductItem from './section/productItem';
import useProductContext from '../../../contextApi/contexts/ProductContext';
import { getProducts } from '../../../api/RestfulAPI/products';

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
		return <Typography>Loading...</Typography>;
	}

	if (error) {
		return <Typography>Error: {error}</Typography>;
	}

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={9}>
				<Grid container spacing={3}>
					{products?.map((product) => (
						<Grid item xs={12} sm={4} key={product._id}>
							<ProductItem
								name={product.name}
								price={product.price}
								rated={product.rated}
								imageUrl={product.imageUrl}
								brand={product.brand}
								isFeatured={product.isFeatured}
								category={product.category.name}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ProductsList;
