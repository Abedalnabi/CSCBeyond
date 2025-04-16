import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import styles from './style';
import STATIC_TEXT from './staticText';

const GetInTouchForm = () => {
	return (
		<Box sx={styles.formContainer}>
			<Box sx={styles.formLeft}>
				<Typography variant="h4" sx={styles.formTitle}>
					{STATIC_TEXT.FORM_TITLE}
				</Typography>
				<Typography sx={styles.formDescription}>{STATIC_TEXT.FORM_DESCRIPTION}</Typography>

				<Box sx={{ marginTop: '20px' }}>
					<TextField fullWidth label={STATIC_TEXT.NAME_LABEL} sx={styles.input} />
					<TextField fullWidth label={STATIC_TEXT.EMAIL_LABEL} sx={styles.input} />
					<TextField fullWidth label={STATIC_TEXT.SUBJECT_LABEL} sx={styles.input} />
					<TextField fullWidth label={STATIC_TEXT.MESSAGE_LABEL} multiline rows={4} sx={styles.input} />
					<Button variant="contained" color="secondary" sx={styles.submitButton}>
						{STATIC_TEXT.SEND_BUTTON}
					</Button>
				</Box>
			</Box>

			<Box sx={styles.imageBox}>
				<img
					src={require('../../assets/img/Group.png')}
					alt="Get in touch illustration"
					style={{ maxWidth: '100%', height: 'auto' }}
				/>
			</Box>
		</Box>
	);
};

export default GetInTouchForm;
