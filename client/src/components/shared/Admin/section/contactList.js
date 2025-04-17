// ContactList.js
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { getContacts } from '../../../../api/RestfulAPI/contact';

const ContactList = () => {
	const [contacts, setContacts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchContacts = async () => {
			try {
				const response = await getContacts();
				setContacts(response.data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching contacts:', error);
				setLoading(false);
			}
		};

		fetchContacts();
	}, []);

	if (loading) {
		return <CircularProgress />;
	}

	return (
		<Box
			sx={{
				textAlign: 'left',
				padding: '20px',
				backgroundColor: '#f9f9f9',
				borderRadius: '8px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
			}}
		>
			<Typography variant="h3" mb={5} mt={10} sx={{ fontWeight: 'bold' }}>
				Contact List
			</Typography>

			<Box>
				{contacts?.map((contact) => (
					<Box
						key={contact._id}
						sx={{
							marginBottom: '20px', // Space between each contact
							backgroundColor: '#ffffff',
							padding: '15px',
							borderRadius: '8px',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
						}}
					>
						<Typography variant="h5" sx={{ fontWeight: 'bold' }}>
							Name: {contact.name}
						</Typography>
						<Typography mt={2} mb={2} variant="h6" sx={{ fontWeight: 'bold' }}>
							Name: {contact.email}
						</Typography>
						{contact.subject && (
							<Typography mb={2} variant="body1">
								Subject: {contact.subject}
							</Typography>
						)}
						<Typography mt={1} variant="body1" sx={{ marginBottom: '15px' }}>
							Message: {contact.message}
						</Typography>

						<Typography
							variant="body1"
							sx={{ marginBottom: '5px', color: contact.type === 'question' ? 'green' : 'red' }}
						>
							Type: {contact.type}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default ContactList;
