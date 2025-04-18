import React from 'react';
import { Typography, Box, Grid, Paper, Container } from '@mui/material';
import Group1 from '../../assets/img/Group1.png';
import cashback from '../../assets/img/cashback.png';
import premium from '../../assets/img/premium-quality.png';
import hours24 from '../../assets/img/24-hours-support.png';

const ProductCard = () => {
	const Shopex = [
		{
			image: Group1,
			title: '24/7 Support',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
		},
		{
			image: cashback,
			title: '24/7 Support',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
		},
		{
			image: premium,
			title: '24/7 Support',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
		},
		{
			image: hours24,
			title: '24/7 Support',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
		},
	];

	return (
		<Container>
			<Typography mb={4} variant="h3" sx={{ color: '#151875' }}>
				What Shopex Offer!
			</Typography>

			<Grid
				container
				spacing={3}
				sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '80px', gap: 8 }}
			>
				{Shopex.map((item, index) => (
					<Grid item xs={12} sm={6} md={3} key={index}>
						<Paper
							sx={{
								padding: 3,
								width: '200px',
								textAlign: 'center',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								borderRadius: 2,
								boxShadow: 3,
								transition: 'transform 0.3s ease-in-out',
								'&:hover': {
									transform: 'scale(1.05)',
								},
							}}
						>
							<img src={item.image} alt={item.title} style={{ width: '40px', height: 'auto' }} />
							<Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
								{item.title}
							</Typography>
							<Typography variant="body2" sx={{ marginTop: 1, color: 'text.secondary' }}>
								{item.description}
							</Typography>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default ProductCard;
