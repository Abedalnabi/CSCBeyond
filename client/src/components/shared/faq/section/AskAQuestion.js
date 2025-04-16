import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const AskAQuestion = () => {
	return (
		<Box
			sx={{
				flex: 1,
				backgroundColor: '#f8f8fd',
				padding: '30px',
				borderRadius: '8px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				textAlign: 'left',
			}}
		>
			<Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E' }}>
				Ask a Question
			</Typography>
			<Box sx={{ marginTop: '20px' }}>
				<TextField fullWidth label="Your Name*" sx={{ marginBottom: '20px', bgcolor: 'white' }} />
				<TextField fullWidth label="Subject*" sx={{ marginBottom: '20px', bgcolor: 'white' }} />
				<TextField
					fullWidth
					label="Type Your Message*"
					multiline
					rows={4}
					sx={{ marginBottom: '20px', bgcolor: 'white' }}
				/>
				<Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
					<Button variant="contained" color="secondary" sx={{ padding: '12px 24px', backgroundColor: '#FF4081' }}>
						Send Mail
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default AskAQuestion;
