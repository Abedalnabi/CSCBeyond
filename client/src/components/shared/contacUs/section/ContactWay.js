import React from 'react';
import { Box, Typography } from '@mui/material';

const ContactWay = () => {
	return (
		<Box sx={{ flex: 1, paddingLeft: '0' }}>
			<Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E' }}>
				Contact Way
			</Typography>

			<Box sx={{ display: 'flex', gap: '50px', marginBottom: '20px' }}>
				<Box sx={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
					<Box
						sx={{
							width: '40px',
							height: '40px',
							backgroundColor: '#6200ea',
							borderRadius: '50%',
							marginRight: '19px',
						}}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<Typography sx={{ color: '#1A237E' }}>Tel: 877-67-88-99</Typography>
						<Typography sx={{ color: '#1A237E' }}>E-Mail: shop@store.com</Typography>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
					<Box
						sx={{
							width: '40px',
							height: '40px',
							backgroundColor: '#f50057',
							borderRadius: '50%',
							marginRight: '19px',
						}}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<Typography sx={{ color: '#1A237E' }}>20 Margaret st, London</Typography>
						<Typography sx={{ color: '#1A237E' }}>Great britain, 3NM98-LK</Typography>
					</Box>
				</Box>
			</Box>

			<Box sx={{ display: 'flex', gap: '50px' }}>
				<Box sx={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
					<Box
						sx={{
							width: '40px',
							height: '40px',
							backgroundColor: '#ffb265',
							borderRadius: '50%',
							marginRight: '19px',
						}}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<Typography sx={{ color: '#1A237E' }}>20 Margaret st, London</Typography>
						<Typography sx={{ color: '#1A237E' }}>Great britain, 3NM98-LK</Typography>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
					<Box
						sx={{
							width: '40px',
							height: '40px',
							backgroundColor: '#1be982',
							borderRadius: '50%',
							marginRight: '19px',
						}}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<Typography sx={{ color: '#1A237E' }}>Free standard shipping</Typography>
						<Typography sx={{ color: '#1A237E' }}>on all orders.</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ContactWay;
