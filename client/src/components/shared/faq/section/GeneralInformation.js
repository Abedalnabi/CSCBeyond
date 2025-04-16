import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './style';
import STATIC_TEXT from './staticText';

const GeneralInformation = () => {
	return (
		<Box sx={styles.infoContainer}>
			<Typography variant="h4" sx={styles.infoTitle}>
				{STATIC_TEXT.GENERAL_INFO_TITLE}
			</Typography>
			<Box sx={{ marginTop: '20px' }}>
				{STATIC_TEXT.QUESTIONS.map((item) => (
					<React.Fragment key={item.id}>
						<Typography sx={styles.question}>{item.question}</Typography>
						<Typography sx={styles.answer}>{item.answer}</Typography>
					</React.Fragment>
				))}
			</Box>
		</Box>
	);
};

export default GeneralInformation;
