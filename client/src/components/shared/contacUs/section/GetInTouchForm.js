import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const GetInTouchForm = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				justifyContent: 'space-between',
				marginTop: '40px',
				marginBottom: '100px',
			}}
		>
			<Box sx={{ flex: 1 }}>
				<Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E' }}>
					Get In Touch
				</Typography>
				<Typography sx={{ color: 'gray', marginTop: '10px' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget
					dolor los vitae lobortis quis bibendum quam.
				</Typography>

				<Box sx={{ marginTop: '20px' }}>
					<TextField fullWidth label="Your Name*" sx={{ marginBottom: '20px' }} />
					<TextField fullWidth label="Your E-mail*" sx={{ marginBottom: '20px' }} />
					<TextField fullWidth label="Subject*" sx={{ marginBottom: '20px' }} />
					<TextField fullWidth label="Type Your Message*" multiline rows={4} sx={{ marginBottom: '20px' }} />
					<Button variant="contained" color="secondary" sx={{ padding: '10px 20px' }}>
						Send Mail
					</Button>
				</Box>
			</Box>

			<Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
