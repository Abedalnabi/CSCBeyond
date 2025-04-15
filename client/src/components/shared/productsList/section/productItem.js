import { Grid, Card, CardContent, Typography, Box, Rating, Button } from '@mui/material';

const ProductItem = ({ name, price, discountPrice, rating, imageUrl, description }) => {
	return (
		<Card sx={{ maxWidth: 345, margin: '20px' }}>
			<img src={imageUrl} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
			<CardContent>
				<Typography variant="h6">{name}</Typography>
				<Typography variant="body2" color="textSecondary">
					{description}
				</Typography>
				<Typography variant="body1" color="primary" style={{ textDecoration: 'line-through' }}>
					${discountPrice}
				</Typography>
				<Typography variant="h6">${price}</Typography>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Rating name="read-only" value={rating} readOnly />
					<Typography variant="body2" color="textSecondary" sx={{ marginLeft: '5px' }}>
						({rating})
					</Typography>
				</Box>
				<Button size="small" color="primary">
					Add to Cart
				</Button>
			</CardContent>
		</Card>
	);
};

export default ProductItem;
