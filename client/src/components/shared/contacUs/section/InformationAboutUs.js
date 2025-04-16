import React from 'react';
import { Box, Typography } from '@mui/material';

const InformationAboutUs = () => {
	return (
		<Box sx={{ flex: 1, paddingRight: '20px' }}>
			<Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E' }}>
				Information About us
			</Typography>
			<Typography sx={{ color: 'gray', marginTop: '10px' }}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.
				Malesuada sem tristique amet erat vitae dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
			</Typography>
			<Box sx={{ display: 'flex', marginTop: '20px' }}>
				<Box
					sx={{ width: '22px', height: '22px', backgroundColor: '#6200ea', borderRadius: '50%', marginRight: '10px' }}
				/>
				<Box
					sx={{ width: '22px', height: '22px', backgroundColor: '#f50057', borderRadius: '50%', marginRight: '10px' }}
				/>
				<Box
					sx={{ width: '22px', height: '22px', backgroundColor: '#03a9f4', borderRadius: '50%', marginBottom: '30px' }}
				/>
			</Box>
		</Box>
	);
};

export default InformationAboutUs;
