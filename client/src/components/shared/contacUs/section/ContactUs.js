import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const InfoAndContactSection = () => {
	return (
		<Container sx={{ textAlign: 'left' }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '20px',
					backgroundColor: '#fff',
					flexDirection: { sm: 'column', md: 'row' },
					width: '100%',
					marginTop: '50px',
					gap: '60px',
				}}
			>
				{/* Information About Us Section */}
				<Box sx={{ flex: 1, paddingRight: '20px' }}>
					<Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E' }}>
						Information About us
					</Typography>
					<Typography sx={{ color: 'gray', marginTop: '10px' }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada
						diam est. Malesuada sem tristique amet erat vitae dolor lobortis. Accumsan faucibus vitae lobortis quis
						bibendum quam.
					</Typography>
					<Box sx={{ display: 'flex', marginTop: '20px' }}>
						<Box
							sx={{
								width: '22px',
								height: '22px',
								backgroundColor: '#6200ea',
								borderRadius: '50%',
								marginRight: '10px',
							}}
						/>
						<Box
							sx={{
								width: '22px',
								height: '22px',
								backgroundColor: '#f50057',
								borderRadius: '50%',
								marginRight: '10px',
							}}
						/>
						<Box
							sx={{
								width: '22px',
								height: '22px',
								backgroundColor: '#03a9f4',
								borderRadius: '50%',
								marginBottom: '30px',
							}}
						/>
					</Box>
				</Box>

				{/* Contact Way Section */}
				<Box sx={{ flex: 1, paddingLeft: '0' }}>
					<Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E' }}>
						Contact Way
					</Typography>

					<Box sx={{ display: 'flex', gap: '50px', marginBottom: '20px' }}>
						<Box sx={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
							<Box
								sx={{
									width: '40px',
									height: '40px',
									backgroundColor: '#6200ea',
									borderRadius: '50%',
									marginRight: '19px',
								}}
							/>
							<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								<Typography sx={{ color: '#1A237E' }}>Tel: 877-67-88-99</Typography>
								<Typography sx={{ color: '#1A237E' }}>E-Mail: shop@store.com</Typography>
							</Box>
						</Box>
						<Box sx={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
							<Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
								<Box
									sx={{
										width: '40px',
										height: '40px',
										backgroundColor: '#f50057',
										borderRadius: '50%',
										marginRight: '19px',
									}}
								/>
								<Box sx={{ display: 'flex', flexDirection: 'column' }}>
									<Typography sx={{ color: '#1A237E' }}>20 Margaret st, London</Typography>
									<Typography sx={{ color: '#1A237E' }}>Great britain, 3NM98-LK</Typography>
								</Box>
							</Box>
						</Box>
					</Box>

					<Box sx={{ display: 'flex', gap: '50px' }}>
						<Box sx={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
							<Box
								sx={{
									width: '40px',
									height: '40px',
									backgroundColor: '#ffb265',
									borderRadius: '50%',
									marginRight: '19px',
								}}
							/>
							<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								<Typography sx={{ color: '#1A237E' }}>20 Margaret st, London</Typography>
								<Typography sx={{ color: '#1A237E' }}>Great britain, 3NM98-LK</Typography>
							</Box>
						</Box>
						<Box sx={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
							<Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
								<Box
									sx={{
										width: '40px',
										height: '40px',
										backgroundColor: '#1be982',
										borderRadius: '50%',
										marginRight: '19px',
									}}
								/>
								<Box sx={{ display: 'flex', flexDirection: 'column' }}>
									<Typography sx={{ color: '#1A237E' }}>Free standard shipping</Typography>
									<Typography sx={{ color: '#1A237E' }}>on all orders.</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default InfoAndContactSection;
