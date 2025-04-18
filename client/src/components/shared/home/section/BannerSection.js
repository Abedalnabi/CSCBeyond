// BannerSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import chairImage from '../../assets/img/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room.png';
import lampImage from '../../assets/img/image32.png';
import { useNavigate } from 'react-router-dom';
import AppRoutes from '../../../../config/appRoutes';
import { bannerStyles } from './style';
import { staticTexts } from './staticText';

const BannerSection = () => {
	const navigate = useNavigate();

	return (
		<Box sx={bannerStyles.container}>
			<Box component="img" src={lampImage} alt="Lamp" sx={bannerStyles.lamp} />

			<Box sx={{ maxWidth: 500 }}>
				<Typography variant="caption" color="error.main">
					Best Furniture For Your Castle...
				</Typography>
				<Typography variant="h4" fontWeight="bold" sx={bannerStyles.heading}>
					{staticTexts.heading.main}
					<br />
					{staticTexts.heading.sub}
				</Typography>
				<Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
					{staticTexts.description}
				</Typography>
				<Button
					variant="contained"
					sx={bannerStyles.button}
					onClick={() => {
						navigate(AppRoutes.PRODUCTS);
					}}
				>
					{staticTexts.buttonText}
				</Button>
			</Box>

			<Box sx={{ position: 'relative' }}>
				<Box component="img" src={chairImage} alt="Chair" sx={bannerStyles.chair} />
				<Box sx={bannerStyles.discountBox}>{staticTexts.discountLabel}</Box>
			</Box>
		</Box>
	);
};

export default BannerSection;
