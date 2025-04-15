import React from 'react';
import { Box, Card, CardContent, Typography, Rating, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';

const ProductCard = ({ id, name, price, rated, imageUrl, brand, category }) => {
	const navigate = useNavigate();

	const handleCardClick = () => {
		navigate(`/product/${id}`);
	};

	return (
		<Card
			sx={{
				display: 'flex',
				alignItems: 'center',
				borderRadius: 2,
				boxShadow: 'none',
				cursor: 'pointer',
			}}
			onClick={handleCardClick}
		>
			{/* Product Image */}
			<Box
				component="img"
				src={imageUrl}
				alt={name}
				sx={{ width: 250, height: 170, objectFit: 'cover', borderRadius: 2 }}
			/>

			{/* Info Section */}
			<CardContent sx={{ flex: 1 }}>
				{/* Title & Colors */}
				<Box display="flex" alignItems="center" gap={1}>
					<Typography variant="subtitle1" fontWeight="bold">
						{name}
					</Typography>

					<Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#f39c12', ml: 0.5 }} />
					<Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#9b59b6', ml: 0.5 }} />
					<Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#e84393', ml: 0.5 }} />
				</Box>

				{/* Pricing */}
				<Box display="flex" alignItems="center" gap={1} mt={0.5}>
					<Typography variant="body1" color="primary">
						${price}
					</Typography>
					<Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'red' }}>
						${price * 2}
					</Typography>
				</Box>

				{/* Rating */}
				<Box display="flex" alignItems="center" gap={1} mt={0.5}>
					<Rating value={rated} precision={0.5} readOnly size="small" sx={{ mt: 0.5 }} />
				</Box>

				{/* Description */}
				<Box display="flex" alignItems="center" gap={1} mt={0.5}>
					<Typography textAlign={'left'} variant="body2" color="text.secondary" mt={1}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in
						justo.
					</Typography>
				</Box>

				{/* Brand & Category + Icons */}
				<Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
					<Typography variant="caption" color="text.secondary">
						Brand: <strong>{brand}</strong> | Category: <strong>{category}</strong>
					</Typography>

					<Box display="flex" gap={2}>
						<IconButton size="small">
							<ShoppingCartOutlinedIcon fontSize="small" />
						</IconButton>
						<IconButton size="small">
							<FavoriteBorderIcon fontSize="small" />
						</IconButton>
						<IconButton size="small">
							<SearchIcon fontSize="small" />
						</IconButton>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ProductCard;
