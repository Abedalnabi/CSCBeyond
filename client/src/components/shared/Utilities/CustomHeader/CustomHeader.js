import React from 'react';
import { Box, Typography, Breadcrumbs, Link, Container } from '@mui/material';

const ShopLeftSidebar = ({ title, breadcrumbLinks }) => {
	return (
		<Box
			sx={{
				backgroundColor: '#f6f5ff',
			}}
		>
			<Container>
				<Box
					sx={{
						backgroundColor: '#f6f5ff',
						height: '200px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<Container sx={{ padding: '20px' }}>
						<Box textAlign={'left'}>
							<Typography variant="h4" fontWeight="bold">
								{title}
							</Typography>

							<Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: '10px' }}>
								{breadcrumbLinks?.map((link, index) => (
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
				</Box>
			</Container>
		</Box>
	);
};

export default ShopLeftSidebar;
