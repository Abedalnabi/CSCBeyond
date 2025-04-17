import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import styles from './style';
import STATIC_TEXT from './staticText';
import { addToContact } from '../../../../api/RestfulAPI/contact';
const type = 'contact';

const GetInTouchForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
		type: type,
	});

	const fields = [
		{ name: 'name', label: STATIC_TEXT.NAME_LABEL },
		{ name: 'email', label: STATIC_TEXT.EMAIL_LABEL },
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
				alert('Your message has been sent successfully!');
				setFormData({
					name: '',
					email: '',
					subject: '',
					message: '',
					type: type,
				});
			} else {
				alert('There was an error sending your message.');
			}
		} catch (error) {
			console.error('Error:', error);
			alert('An error occurred. Please try again later.');
		}
	};

	return (
		<Box sx={styles.formContainer}>
			<Box sx={styles.formLeft}>
				<Typography variant="h4" sx={styles.formTitle}>
					{STATIC_TEXT.FORM_TITLE}
				</Typography>
				<Typography sx={styles.formDescription}>{STATIC_TEXT.FORM_DESCRIPTION}</Typography>

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
					<Button variant="contained" color="secondary" sx={styles.submitButton} onClick={handleSubmit}>
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
