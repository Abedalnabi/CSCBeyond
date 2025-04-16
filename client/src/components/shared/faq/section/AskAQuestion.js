import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import styles from './style';
import STATIC_TEXT from './staticText';

const AskAQuestion = () => {
	return (
		<Box sx={styles.container}>
			<Typography variant="h4" sx={styles.title}>
				{STATIC_TEXT.ASK_TITLE}
			</Typography>
			<Box sx={{ marginTop: '20px' }}>
				<TextField fullWidth label={STATIC_TEXT.NAME_LABEL} sx={styles.input} />
				<TextField fullWidth label={STATIC_TEXT.SUBJECT_LABEL} sx={styles.input} />
				<TextField fullWidth label={STATIC_TEXT.MESSAGE_LABEL} multiline rows={4} sx={styles.input} />
				<Box sx={styles.buttonBox}>
					<Button variant="contained" color="secondary" sx={styles.sendButton}>
						{STATIC_TEXT.SEND_BUTTON}
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default AskAQuestion;
