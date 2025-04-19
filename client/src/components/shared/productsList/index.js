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
	// States to store selected filters
	const [filters, setFilters] = useState({
		brands: [],
		discounts: [],
		ratings: [],
		categories: [],
		priceRange: [0, 500],
		colors: [],
	});

	return (
		<Box>
			<CustomHeader title="Shop Left Sidebar" breadcrumbLinks={breadcrumbLinks} />
			<Container maxWidth="xl">
				<Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: '20px' }}>
					<FilterSidebar products={products} setProducts={setProducts} filters={filters} setFilters={setFilters} />
					<ProductsList products={products} setProducts={setProducts} filters={filters} />
				</Grid>
			</Container>
		</Box>
	);
};

export default Index;
