import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HomeCharImg from './../../assets/img/HomeChare.png';
import { uniqueStyles } from './style';
import { uniqueStylesStaticText } from './staticText';

const UniqueFeatures = () => {
	return (
		<Box sx={uniqueStyles.container}>
			<Box component="img" src={HomeCharImg} alt="product" sx={uniqueStyles.image} />
			<Box sx={uniqueStyles.textContainer}>
				<Typography variant="h4" sx={uniqueStyles.heading}>
					{uniqueStylesStaticText.heading}
				</Typography>
				<Box sx={uniqueStyles.featureBox}>
					<Box sx={{ ...uniqueStyles.circle, backgroundColor: 'red' }} />
					<Typography variant="body1" sx={{ color: '#6c757d' }}>
						{uniqueStylesStaticText.feature1}
					</Typography>
				</Box>
				<Box sx={uniqueStyles.featureBox}>
					<Box sx={{ ...uniqueStyles.circle, backgroundColor: 'blue' }} />
					<Typography variant="body1" sx={{ color: '#6c757d' }}>
						{uniqueStylesStaticText.feature2}
					</Typography>
				</Box>
				<Box sx={uniqueStyles.featureBox}>
					<Box sx={{ ...uniqueStyles.circle, backgroundColor: 'cyan' }} />
					<Typography variant="body1" sx={{ color: '#6c757d' }}>
						{uniqueStylesStaticText.feature3}
					</Typography>
				</Box>
				<Button variant="contained" color="secondary" sx={uniqueStyles.button}>
					{uniqueStylesStaticText.buttonText}
				</Button>
			</Box>
		</Box>
	);
};

export default UniqueFeatures;
