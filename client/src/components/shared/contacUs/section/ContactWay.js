import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './style';
import STATIC_TEXT from './staticText';

const ContactWay = () => {
	return (
		<Box sx={styles.container}>
			<Typography variant="h4" sx={styles.title}>
				{STATIC_TEXT.CONTACT_TITLE}
			</Typography>

			<Box sx={styles.rowGroup}>
				{STATIC_TEXT.FIRST_ROW.map((item, index) => (
					<Box key={item.id} sx={styles.row}>
						<Box sx={{ ...styles.circle, backgroundColor: item.color }} />
						<Box sx={styles.textGroup}>
							<Typography sx={styles.text}>{item.line1}</Typography>
							<Typography sx={styles.text}>{item.line2}</Typography>
						</Box>
					</Box>
				))}
			</Box>

			<Box sx={styles.rowGroup}>
				{STATIC_TEXT.SECOND_ROW.map((item) => (
					<Box key={item.color} sx={styles.row}>
						<Box sx={{ ...styles.circle, backgroundColor: item.color }} />
						<Box sx={styles.textGroup}>
							<Typography sx={styles.text}>{item.line1}</Typography>
							<Typography sx={styles.text}>{item.line2}</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default ContactWay;
