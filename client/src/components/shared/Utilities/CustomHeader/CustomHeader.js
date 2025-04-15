import React from 'react';
import { Box, Typography, Breadcrumbs, Link, Container } from '@mui/material';

const ShopLeftSidebar = ({ title, breadcrumbLinks }) => {
	return (
		<Container>
			<Box
				sx={{
					padding: '20px',
					backgroundColor: '#f5f5f5',
					height: '200px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
				textAlign={'left'}
			>
				<Typography variant="h4" fontWeight="bold" color="primary">
					{title}
				</Typography>

				<Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: '10px' }}>
					{breadcrumbLinks.map((link, index) => (
						<Link
							key={index}
							color={index === breadcrumbLinks.length - 1 ? 'text.primary' : 'inherit'}
							href={link.href}
						>
							{link.label}
						</Link>
					))}
				</Breadcrumbs>
			</Box>
		</Container>
	);
};

export default ShopLeftSidebar;
