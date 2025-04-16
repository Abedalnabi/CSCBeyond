import React from 'react';
import { Box, Container } from '@mui/material';
import GeneralInformation from './GeneralInformation';
import AskAQuestion from './AskAQuestion';

const FaqSections = () => {
	return (
		<Container sx={{ marginTop: '50px', padding: '0px', marginBottom: '200px' }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '70px' }}>
				<GeneralInformation />
				<AskAQuestion />
			</Box>
		</Container>
	);
};

export default FaqSections;
