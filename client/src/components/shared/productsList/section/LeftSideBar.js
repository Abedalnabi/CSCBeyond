import React, { useState, useEffect } from 'react';
import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Slider, TextField, Rating } from '@mui/material';
import axios from 'axios';

const FilterSidebar = ({ products, setProducts }) => {
	const [selectedBrands, setSelectedBrands] = useState([]);
	const [selectedDiscounts, setSelectedDiscounts] = useState([]);
	const [selectedRatings, setSelectedRatings] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedPriceRange, setSelectedPriceRange] = useState([]);
	const [selectedColors, setSelectedColors] = useState([]);

	const handleToggle = (item, list, setter) => {
		setter(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
	};

	const handleColorClick = (color) => {
		setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));
	};

	const fetchFilteredProducts = async () => {
		try {
			const response = await axios.get('/api/products/', {
				params: {
					brand: selectedBrands.join(','),
					discounts: selectedDiscounts.join(','),
					rated: selectedRatings.join(','),
					categories: selectedCategories.join(','),
					priceRange: selectedPriceRange.join(','),
					colors: selectedColors.join(','),
				},
			});
			setProducts(response.data?.data);
		} catch (error) {
			console.error('Error fetching filtered products:', error);
		}
	};

	// Call the API whenever filters change
	useEffect(() => {
		console.log('products');
		fetchFilteredProducts();
	}, [selectedBrands, selectedDiscounts, selectedRatings, selectedCategories, selectedPriceRange, selectedColors]);

	return (
		<Box sx={{ width: 260, p: 2, textAlign: 'left' }}>
			{/* Product Brand */}
			<Typography variant="h6" gutterBottom>
				Product Brands
			</Typography>
			<FormGroup sx={{ color: 'gray' }}>
				{[
					'CoasterFurniture',
					'Fusion Dot High Fashion',
					'Unique Furniture Restor',
					'Dream Furniture Flipping',
					'Young Repurposed',
					'Green DIY Furniture',
				].map((brand) => (
					<FormControlLabel
						key={brand}
						control={
							<Checkbox
								checked={selectedBrands.includes(brand)}
								onChange={() => handleToggle(brand, selectedBrands, setSelectedBrands)}
							/>
						}
						label={brand}
					/>
				))}
			</FormGroup>

			{/* Discount Offer */}
			<Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
				Discount Offer
			</Typography>
			<FormGroup sx={{ color: 'gray' }}>
				{['20% Cashback', '5% Cashback Offer', '25% Discount Offer'].map((offer) => (
					<FormControlLabel
						key={offer}
						control={
							<Checkbox
								checked={selectedDiscounts.includes(offer)}
								onChange={() => handleToggle(offer, selectedDiscounts, setSelectedDiscounts)}
							/>
						}
						label={offer}
					/>
				))}
			</FormGroup>

			{/* Rating Item */}
			<Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
				Rating Item
			</Typography>
			<FormGroup sx={{ color: 'gray' }}>
				{[5, 4, 3, 2, 1].map((rate) => (
					<FormControlLabel
						key={rate}
						control={
							<Checkbox
								checked={selectedRatings.includes(rate)}
								onChange={() => handleToggle(rate, selectedRatings, setSelectedRatings)}
							/>
						}
						label={<Rating value={rate} readOnly size="small" />}
					/>
				))}
			</FormGroup>

			{/* Categories */}
			<Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
				Categories
			</Typography>
			<FormGroup sx={{ color: 'gray' }}>
				{[
					'Electronics',
					'Magento',
					'Bigcommerce',
					'osCommerce',
					'3dcart',
					'Bags',
					'Accessories',
					'Jewellery',
					'Watches',
				].map((cat) => (
					<FormControlLabel
						key={cat}
						control={
							<Checkbox
								checked={selectedCategories.includes(cat)}
								onChange={() => handleToggle(cat, selectedCategories, setSelectedCategories)}
							/>
						}
						label={cat}
					/>
				))}
			</FormGroup>

			{/* Price Filter */}
			<Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
				Price Filter
			</Typography>
			<Slider
				value={selectedPriceRange}
				onChange={(e, val) => setSelectedPriceRange(val)}
				valueLabelDisplay="auto"
				min={0}
				max={500}
				sx={{ width: '90%', mt: 1 }}
			/>
			<TextField
				fullWidth
				variant="outlined"
				size="small"
				value={`$${selectedPriceRange[0]} - $${selectedPriceRange[1]}`}
				sx={{ mt: 1 }}
				disabled
			/>

			{/* Filter by Color */}
			<Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
				Filter By Color
			</Typography>
			<Box display="flex" gap={1} flexWrap="wrap">
				{['Blue', 'Orange', 'Brown', 'Green', 'Purple', 'Sky'].map((color) => (
					<Box
						key={color}
						sx={{
							width: 20,
							height: 20,
							borderRadius: '50%',
							backgroundColor: color.toLowerCase(),
							border: selectedColors.includes(color) ? '2px solid #000' : '1px solid #ccc',
							cursor: 'pointer',
						}}
						onClick={() => handleColorClick(color)}
					/>
				))}
			</Box>
		</Box>
	);
};

export default FilterSidebar;
