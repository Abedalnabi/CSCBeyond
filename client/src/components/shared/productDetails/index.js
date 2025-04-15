import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';
import ProductDetailsCard from './section/ProductDetailsCard';
import ProductTabs from './section/ProductTabs';
import { getProductByID } from '../../../api/RestfulAPI/products';
import RelatedProducts from './section/RelatedProducts';

const Index = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProductDetails = async () => {
			setLoading(true);
			try {
				const response = await getProductByID(id);
				setProduct(response.data);
			} catch (error) {
				setError('Failed to fetch product details.');
			} finally {
				setLoading(false);
			}
		};

		fetchProductDetails();
	}, [id]);

	const breadcrumbLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Product', href: '/products' },
		{ label: 'Product details', href: '#' },
	];

	return (
		<Box>
			<CustomHeader title="Product details" breadcrumbLinks={breadcrumbLinks} />
			<ProductDetailsCard id={id} product={product} loading={loading} error={error} />
			<ProductTabs />
			<RelatedProducts categoryID={product?.category?._id} />
		</Box>
	);
};

export default Index;
