import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './style';
import STATIC_TEXT from './staticText';

const InformationAboutUs = () => {
	return (
		<Box sx={styles.aboutContainer}>
			<Typography variant="h4" sx={styles.aboutTitle}>
				{STATIC_TEXT.ABOUT_TITLE}
			</Typography>
			<Typography sx={styles.aboutText}>{STATIC_TEXT.ABOUT_DESCRIPTION}</Typography>
			<Box sx={styles.colorBoxContainer}>
				{STATIC_TEXT.COLOR_BOXES.map((color, index) => (
					<Box key={color} sx={{ ...styles.colorBox, backgroundColor: color }} />
				))}
			</Box>
		</Box>
	);
};

export default InformationAboutUs;
