import React, { useState } from 'react';
import { Box, Container, Typography, Tab, Tabs } from '@mui/material';

const ProductTabs = () => {
	const [value, setValue] = useState(0);

	const handleTabChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div style={{ backgroundColor: '#f9f8fe' }}>
			<Container sx={{ marginTop: 4, textAlign: 'left', bgcolor: '#f9f8fe', paddingTop: '50px', paddingBottom: '50px' }}>
				<Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleTabChange} aria-label="product details tabs">
						<Tab label="Description" />
						<Tab label="Additional Info" />
						<Tab label="Reviews" />
						<Tab label="Video" />
					</Tabs>
				</Box>
				<Box sx={{ padding: '20px 0' }}>
					{value === 0 && (
						<Box>
							<Typography variant="body1" color="text.secondary">
								Varius tempor. Aliquam dis volutpat vulputate integer sagittis. Faucibus dolor ornare faucibus vel
								sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac
								ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet
								diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis
								diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverra.
							</Typography>
							<Box sx={{ marginTop: 2 }}>
								<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
									More details
								</Typography>
								<ul>
									<li>
										<Typography variant="body2" color="text.secondary">
											➔ Aliquam dis vulputate vulputate integer sagittis. Faucibus dis diam arcu, nulla
											lobortis justo netus dis.
										</Typography>
									</li>
									<li>
										<Typography variant="body2" color="text.secondary">
											➔ Aliquam dis vulputate vulputate integer sagittis. Faucibus dis diam arcu, nulla
											lobortis justo netus dis.
										</Typography>
									</li>
									<li>
										<Typography variant="body2" color="text.secondary">
											➔ Aliquam dis vulputate vulputate integer sagittis. Faucibus dis diam arcu, nulla
											lobortis justo netus dis.
										</Typography>
									</li>
									<li>
										<Typography variant="body2" color="text.secondary">
											➔ Aliquam dis vulputate vulputate integer sagittis. Faucibus dis diam arcu, nulla
											lobortis justo netus dis.
										</Typography>
									</li>
								</ul>
							</Box>
						</Box>
					)}

					{value === 1 && (
						<Box>
							<Typography variant="body1" color="text.secondary">
								Additional information content goes here.
							</Typography>
						</Box>
					)}

					{value === 2 && (
						<Box>
							<Typography variant="body1" color="text.secondary">
								Reviews content goes here.
							</Typography>
						</Box>
					)}

					{value === 3 && (
						<Box>
							<Typography variant="body1" color="text.secondary">
								Video content goes here.
							</Typography>
						</Box>
					)}
				</Box>
			</Container>
		</div>
	);
};

export default ProductTabs;
