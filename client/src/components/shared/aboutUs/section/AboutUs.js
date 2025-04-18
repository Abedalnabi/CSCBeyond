import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper, Icon } from '@mui/material';
import aboutUsImg from '../../assets/img/Rectangle.png';
import styles from './style';
import STATIC_TEXT from './staticText';
import myImage from '../../assets/img/Group1.png';

const AboutUs = () => {
	return (
		<div>
			<Container sx={styles.mainContainer}>
				{/* About Us Section */}
				<Box sx={styles.aboutWrapper}>
					{/* Left: Image */}
					<Box sx={styles.aboutImageBox}>
						<img src={aboutUsImg} alt="Ecommerce Business" style={styles.aboutImage} />
					</Box>

					{/* Right: Text */}
					<Box sx={styles.aboutTextBox}>
						<Typography variant="h4" sx={styles.aboutTitle}>
							{STATIC_TEXT.ABOUT_TITLE}
						</Typography>
						<Typography variant="body1" sx={styles.aboutDescription}>
							{STATIC_TEXT.ABOUT_DESCRIPTION}
						</Typography>
						<Button variant="contained" color="primary" sx={styles.aboutButton}>
							{STATIC_TEXT.ABOUT_BUTTON}
						</Button>
					</Box>
				</Box>

				{/* Features */}
				<Container sx={styles.featuresContainer}>
					<Typography variant="h5" sx={styles.featuresTitle}>
						{STATIC_TEXT.FEATURES_TITLE}
					</Typography>

					<Grid container spacing={3} sx={styles.gridContainer}>
						{STATIC_TEXT.FEATURES.map((feature) => (
							<Grid key={feature.title} item xs={12} sm={6} md={3}>
								<Paper sx={styles.featureCard}>
									<img src={myImage} alt="My Image" style={{ width: '40px', height: 'auto' }} />
									<Typography variant="h6" sx={styles.featureTitle}>
										{feature.title}
									</Typography>
									<Typography variant="body2" sx={styles.featureDescription}>
										{feature.description}
									</Typography>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Container>
			</Container>
		</div>
	);
};

export default AboutUs;
