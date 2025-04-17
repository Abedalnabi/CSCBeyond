import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import styles from './style';
import STATIC_TEXT from './staticText';
import { addToContact } from '../../../../api/RestfulAPI/contact';

const type = 'question';

const AskAQuestion = () => {
	const [formData, setFormData] = useState({
		name: '',
		subject: '',
		message: '',
		type: type,
	});

	const fields = [
		{ name: 'name', label: STATIC_TEXT.NAME_LABEL },
		{ name: 'subject', label: STATIC_TEXT.SUBJECT_LABEL },
		{ name: 'message', label: STATIC_TEXT.MESSAGE_LABEL, multiline: true, rows: 4 },
	];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await addToContact(formData);

			if (response) {
				alert('Your question has been submitted successfully!');
				setFormData({
					name: '',
					subject: '',
					message: '',
					type: type,
				});
			} else {
				alert('There was an error submitting your question.');
			}
		} catch (error) {
			console.error('Error:', error);
			alert('An error occurred. Please try again later.');
		}
	};

	return (
		<Box sx={styles.container}>
			<Typography variant="h4" sx={styles.title}>
				{STATIC_TEXT.ASK_TITLE}
			</Typography>

			<Box sx={{ marginTop: '20px' }}>
				{fields.map((field) => (
					<TextField
						key={field.name}
						fullWidth
						label={field.label}
						sx={styles.input}
						name={field.name}
						value={formData[field.name]}
						onChange={handleChange}
						multiline={field.multiline || false}
						rows={field.rows || 1}
					/>
				))}
				<Box sx={styles.buttonBox}>
					<Button variant="contained" color="secondary" sx={styles.sendButton} onClick={handleSubmit}>
						{STATIC_TEXT.SEND_BUTTON}
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default AskAQuestion;
