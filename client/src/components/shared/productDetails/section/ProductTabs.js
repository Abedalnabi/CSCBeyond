import React, { useState } from 'react';
import { Box, Container, Typography, Tab, Tabs } from '@mui/material';
import styles from './style';
import STATIC_TEXT from './staticText';

const ProductTabs = () => {
	const [value, setValue] = useState(0);

	const handleTabChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div style={styles.tabsWrapper}>
			<Container sx={styles.tabsContainer}>
				<Box sx={styles.tabBorder}>
					<Tabs value={value} onChange={handleTabChange} aria-label="product details tabs">
						{STATIC_TEXT.tabLabels.map((label) => (
							<Tab key={label} label={label} />
						))}
					</Tabs>
				</Box>

				<Box sx={styles.tabContent}>
					{value === 0 && (
						<Box>
							<Typography variant="body1" color="text.secondary">
								{STATIC_TEXT.descriptionContent}
							</Typography>

							<Box sx={styles.descriptionList}>
								<Typography variant="h6" sx={styles.descriptionTitle}>
									{STATIC_TEXT.descriptionTitle}
								</Typography>
								<ul>
									{STATIC_TEXT.descriptionPoints.map((point) => (
										<li key={point}>
											<Typography variant="body2" color="text.secondary">
												{point}
											</Typography>
										</li>
									))}
								</ul>
							</Box>
						</Box>
					)}

					{value === 1 && (
						<Typography variant="body1" color="text.secondary">
							{STATIC_TEXT.additionalInfo}
						</Typography>
					)}

					{value === 2 && (
						<Typography variant="body1" color="text.secondary">
							{STATIC_TEXT.reviews}
						</Typography>
					)}

					{value === 3 && (
						<Typography variant="body1" color="text.secondary">
							{STATIC_TEXT.video}
						</Typography>
					)}
				</Box>
			</Container>
		</div>
	);
};

export default ProductTabs;
