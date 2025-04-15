import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper, Icon } from '@mui/material';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';
import aboutUsImg from '../assets/img/Rectangle.png';

const AboutSection = () => {
	return (
		<div>
			<CustomHeader
				title="About Us"
				breadcrumbLinks={[
					{ label: 'Home', href: '/' },
					{ label: 'About Us', href: '#' },
				]}
			/>
			<Container sx={{ marginTop: 4 }}>
				{/* About Us Section */}
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
					{/* Left: Image */}
					<Box sx={{ flex: 1 }}>
						<img
							src={aboutUsImg}
							alt="Ecommerce Business"
							style={{ width: '100%', borderRadius: '8px', maxHeight: '400px' }}
						/>
					</Box>

					{/* Right: Text */}
					<Box sx={{ flex: 1, paddingLeft: 3 }} textAlign={'left'}>
						<Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
							Know About Our Ecommerce Business, History
						</Typography>
						<Typography variant="body1" color="text.secondary" sx={{ marginTop: 2 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec ultricies mauris. Morbi euismod
							odio neque, et gravida justo feugiat ac. Aliquam vehicula consequat nisl. Mauris eget faucibus cras
							justo, tortor sed donec tempus.
						</Typography>
						<Button variant="contained" color="primary" sx={{ marginTop: 3 }}>
							Contact Us
						</Button>
					</Box>
				</Box>

				<div>
					<Container sx={{ marginTop: 4 }}>
						{/* Our Features Section */}
						<Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2c3e50', marginTop: 6, marginBottom: 4 }}>
							Our Features
						</Typography>

						<Grid
							container
							spacing={3}
							sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '150px' }}
						>
							<Grid item xs={6} sm={6} md={3}>
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
									<Icon sx={{ fontSize: 40, color: 'primary.main' }}>local_shipping</Icon>
									<Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
										Free Delivery
									</Typography>
									<Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
									</Typography>
								</Paper>
							</Grid>

							<Grid item xs={12} sm={6} md={3}>
								<Paper
									sx={{
										padding: 3,
										textAlign: 'center',
										width: '200px',
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
									<Icon sx={{ fontSize: 40, color: 'primary.main' }}>money_off</Icon>
									<Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
										100% Cash Back
									</Typography>
									<Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
									</Typography>
								</Paper>
							</Grid>

							<Grid item xs={12} sm={6} md={3}>
								<Paper
									sx={{
										padding: 3,
										textAlign: 'center',
										width: '200px',
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
									<Icon sx={{ fontSize: 40, color: 'primary.main' }}>check_circle</Icon>
									<Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
										Quality Product
									</Typography>
									<Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
									</Typography>
								</Paper>
							</Grid>

							<Grid item xs={12} sm={6} md={3}>
								<Paper
									sx={{
										padding: 3,
										textAlign: 'center',
										width: '200px',
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
									<Icon sx={{ fontSize: 40, color: 'primary.main' }}>support_agent</Icon>
									<Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
										24/7 Support
									</Typography>
									<Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
									</Typography>
								</Paper>
							</Grid>
						</Grid>
					</Container>
				</div>
			</Container>
		</div>
	);
};

export default AboutSection;
