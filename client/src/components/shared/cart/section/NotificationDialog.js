import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import { staticText } from './staticText'; // Import static text
import { styles } from './style'; // Import styles

const NotificationDialog = ({ open, message, onClose }) => (
	<Dialog open={open} onClose={onClose}>
		<DialogTitle sx={styles.dialog.title}>{staticText.dialog.title}</DialogTitle>
		<DialogContent sx={styles.dialog.content}>
			<Typography variant="body1">{message}</Typography>
		</DialogContent>
		<DialogActions>
			<Button onClick={onClose} sx={styles.dialog.button}>
				{staticText.dialog.okButton}
			</Button>
		</DialogActions>
	</Dialog>
);

export default NotificationDialog;
