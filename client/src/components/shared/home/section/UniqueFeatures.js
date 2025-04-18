import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HomeCharImg from './../../assets/img/HomeChare.png';

const UniqueFeatures = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'row' },
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#f1f0ff',
				padding: 4,
				textAlign: 'left',
				margin: 'auto',
				marginTop: { xs: '20px', sm: '0' },
			}}
		>
			<Box
				component="img"
				src={HomeCharImg}
				alt="product"
				sx={{
					width: 350,
					height: 250,
					objectFit: 'cover',
					borderRadius: 1,
					marginBottom: { xs: 3, sm: 0 },
				}}
			/>

			<Box sx={{ marginLeft: { sm: 3 }, width: '530px', textAlign: { xs: 'center', sm: 'left' } }}>
				<Typography variant="h4" sx={{ fontWeight: 'bold', color: '#151875' }}>
					Unique Features Of Latest & Trending Products
				</Typography>

				<Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
					<Box
						sx={{
							width: '10px',
							height: '10px',
							borderRadius: '50%',
							backgroundColor: 'red',
							marginRight: '10px',
						}}
					/>
					<Typography variant="body1" sx={{ color: '#6c757d' }}>
						All frames constructed with hardwood solids and laminates
					</Typography>
				</Box>

				<Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
					<Box
						sx={{
							width: '10px',
							height: '10px',
							borderRadius: '50%',
							backgroundColor: 'blue',
							marginRight: '10px',
						}}
					/>
					<Typography variant="body1" sx={{ color: '#6c757d' }}>
						Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
					</Typography>
				</Box>

				<Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
					<Box
						sx={{
							width: '10px',
							height: '10px',
							borderRadius: '50%',
							backgroundColor: 'cyan',
							marginRight: '10px',
						}}
					/>
					<Typography variant="body1" sx={{ color: '#6c757d' }}>
						Arms, backs and seats are structurally reinforced
					</Typography>
				</Box>

				<Button
					variant="contained"
					color="secondary"
					sx={{
						marginTop: 3,
						backgroundColor: '#ff5f5f',
						'&:hover': {
							backgroundColor: '#ff4444',
						},
					}}
				>
					Add To Cart
				</Button>
			</Box>
		</Box>
	);
};

export default UniqueFeatures;
