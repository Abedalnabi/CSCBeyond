import React from 'react';
import { Box, Typography } from '@mui/material';

const GeneralInformation = () => {
	return (
		<Box sx={{ flex: 1, paddingTop: '20px', textAlign: 'left' }}>
			<Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: '20px' }}>
				General Information
			</Typography>
			<Box sx={{ marginTop: '20px' }}>
				<Typography sx={{ color: '#1A237E', marginBottom: '30px', fontSize: '20px' }}>
					Eu dictumst cum at sed euismod condimentum?
				</Typography>
				<Typography sx={{ marginBottom: '35px', color: '#a1abcc' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat
					gravida sagittis.
				</Typography>
				<Typography sx={{ color: '#1A237E', marginBottom: '30px', fontSize: '20px' }}>
					Magna bibendum est fermentum eros.
				</Typography>
				<Typography sx={{ marginBottom: '35px', color: '#a1abcc' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat
					gravida sagittis.
				</Typography>
				<Typography sx={{ color: '#1A237E', marginBottom: '30px', fontSize: '20px' }}>
					Odio muskana hak eris conseekin sceleton?
				</Typography>
				<Typography sx={{ marginBottom: '35px', color: '#a1abcc' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat
					gravida sagittis.
				</Typography>
				<Typography sx={{ color: '#1A237E', marginBottom: '30px', fontSize: '20px' }}>
					Elit id blandit sabara boi velit gua mara?
				</Typography>
				<Typography sx={{ marginBottom: '35px', color: '#a1abcc' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat
					gravida sagittis.
				</Typography>
			</Box>
		</Box>
	);
};

export default GeneralInformation;
