import React from 'react';
import { Box, Grid, Typography, TextField, Button, Container, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
	return (
		<Box sx={{ backgroundColor: '#eeeffb', paddingTop: 6, paddingBottom: 4, marginTop: 6 }}>
			<Container sx={{ textAlign: 'center', textAlign: 'left' }}>
				{/* First Row: Email Sign Up */}
				{/* <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ marginBottom: 4 }}>
					<Grid item xs={12} sm={8} md={9}>
						<TextField
							fullWidth
							label="Enter Email Address"
							variant="outlined"
							sx={{ backgroundColor: 'white', borderRadius: 1 }}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<Button variant="contained" color="primary" fullWidth>
							Sign Up
						</Button>
					</Grid>
				</Grid> */}

				{/* Second Row: Contact Info, Categories, Customer Care, Pages */}
				<Grid container spacing={3} justifyContent="center" sx={{ marginBottom: 4 }}>
					{/* Contact Info */}
					<Grid item xs={12} sm={6} md={3}>
						<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
							Hekto
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Contact Info
							<br />
							17 Princess Road, London, Greater London NW1 8JR, UK
						</Typography>
					</Grid>

					{/* Categories */}
					<Grid item xs={12} sm={6} md={3}>
						<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
							Categories
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Laptops & Computers
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Cameras & Photography
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Smart Phones & Tablets
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Video Games & Consoles
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Waterproof Headphones
						</Typography>
					</Grid>

					{/* Customer Care */}
					<Grid item xs={12} sm={6} md={3}>
						<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
							Customer Care
						</Typography>
						<Typography variant="body2" color="text.secondary">
							My Account
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Discount
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Returns
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Orders History
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Order Tracking
						</Typography>
					</Grid>

					{/* Pages */}
					<Grid item xs={12} sm={6} md={3}>
						<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
							Pages
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Blog
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Browse the Shop
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Category
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Pre-Built Pages
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Visual Composer Elements
						</Typography>
						<Typography variant="body2" color="text.secondary">
							WooCommerce Pages
						</Typography>
					</Grid>
				</Grid>

				{/* Social Media Links */}
				<Grid container justifyContent="center">
					<IconButton sx={{ color: 'text.secondary', margin: 1 }}>
						<Facebook />
					</IconButton>
					<IconButton sx={{ color: 'text.secondary', margin: 1 }}>
						<Instagram />
					</IconButton>
					<IconButton sx={{ color: 'text.secondary', margin: 1 }}>
						<Twitter />
					</IconButton>
				</Grid>

				{/* Footer Copyright */}
				<Box sx={{ textAlign: 'center', marginTop: 4 }}>
					<Typography variant="body2" color="text.secondary">
						© Webecy - All Rights Reserved
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
