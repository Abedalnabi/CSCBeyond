import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper, Icon } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const AboutPage = () => {
	return (
		<Container sx={{ marginTop: 4 }}>
			{/* Section 1: About Us */}
			<Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', marginBottom: 4 }}>
				<Box sx={{ flex: 1 }}>
					<Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
						Know About Our Ecommerce Business, History
					</Typography>
					<Typography variant="body1" color="text.secondary" sx={{ marginTop: 2 }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec ultricies mauris. Morbi euismod odio
						neque, et gravida justo feugiat ac. Aliquam vehicula consequat nisl. Mauris eget faucibus cras justo,
						tortor sed donec tempus.
					</Typography>
					<Button variant="contained" color="primary" sx={{ marginTop: 3 }}>
						Contact Us
					</Button>
				</Box>
				<Box sx={{ flex: 1 }}>
					<img
						src="https://via.placeholder.com/600x400" // You can replace this with your own image URL
						alt="Ecommerce Business"
						style={{ width: '100%', borderRadius: '8px' }}
					/>
				</Box>
			</Box>

			{/* Section 2: Our Features */}
			<Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: 4 }}>
				Our Features
			</Typography>

			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={3}>
					<Paper
						sx={{ padding: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
					>
						<Icon sx={{ fontSize: 40, color: 'primary.main' }}>local_shipping</Icon>
						<Typography variant="h6" sx={{ marginTop: 2 }}>
							Free Delivery
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</Typography>
					</Paper>
				</Grid>

				<Grid item xs={12} sm={6} md={3}>
					<Paper
						sx={{ padding: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
					>
						<Icon sx={{ fontSize: 40, color: 'primary.main' }}>money_off</Icon>
						<Typography variant="h6" sx={{ marginTop: 2 }}>
							100% Cash Back
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</Typography>
					</Paper>
				</Grid>

				<Grid item xs={12} sm={6} md={3}>
					<Paper
						sx={{ padding: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
					>
						<Icon sx={{ fontSize: 40, color: 'primary.main' }}>check_circle</Icon>
						<Typography variant="h6" sx={{ marginTop: 2 }}>
							Quality Product
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</Typography>
					</Paper>
				</Grid>

				<Grid item xs={12} sm={6} md={3}>
					<Paper
						sx={{ padding: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
					>
						<Icon sx={{ fontSize: 40, color: 'primary.main' }}>support_agent</Icon>
						<Typography variant="h6" sx={{ marginTop: 2 }}>
							24/7 Support
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</Typography>
					</Paper>
				</Grid>
			</Grid>

			{/* Section 3: Client Testimonials */}
			<Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2c3e50', marginTop: 6, marginBottom: 4 }}>
				Our Client Say!
			</Typography>

			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} sm={6} md={3}>
					<Box sx={{ textAlign: 'center' }}>
						<img
							src="https://via.placeholder.com/100" // Replace with client image
							alt="Client"
							style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
						/>
						<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
							Sefina Gomez
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nunc vitae dui fringilla gravida.
						</Typography>
					</Box>
				</Grid>

				<Grid item xs={12} sm={6} md={3}>
					<Box sx={{ textAlign: 'center' }}>
						<img
							src="https://via.placeholder.com/100" // Replace with client image
							alt="Client"
							style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
						/>
						<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
							John Doe
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Curabitur id ligula id eros aliquam interdum. Integer suscipit quam a volutpat posuere.
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AboutPage;
