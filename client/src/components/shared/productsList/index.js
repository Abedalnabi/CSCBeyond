import React, { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import ProductsList from './section/ProductsList';
import FilterSidebar from './section/LeftSideBar';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';

const Index = () => {
	const [products, setProducts] = useState([]);

	const breadcrumbLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Pages', href: '/pages' },
		{ label: 'Shop Left Sidebar', href: '#' },
	];

	return (
		<Box>
			<CustomHeader title="Shop Left Sidebar" breadcrumbLinks={breadcrumbLinks} />
			<Container maxWidth="xl">
				<Box
					container
					spacing={2}
					sx={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: '20px', display: 'flex' }}
				>
					<FilterSidebar setProducts={setProducts} />
					<ProductsList products={products} setProducts={setProducts} />
				</Box>
			</Container>
		</Box>
	);
};

export default Index;
