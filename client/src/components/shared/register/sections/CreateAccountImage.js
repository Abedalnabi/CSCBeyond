import React from 'react';
import { Box, Grid } from '@mui/material';
import Image from '../../assets/img/register.png';

const CreateAccountImage = () => {
	return (
		<Grid size={{ xs: 12, md: 6 }}>
			<Box
				sx={{
					backgroundImage: `url(${Image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '400px',
				}}
			/>
		</Grid>
	);
};

export default CreateAccountImage;
