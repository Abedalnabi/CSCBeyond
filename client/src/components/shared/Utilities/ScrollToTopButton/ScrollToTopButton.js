// ScrollToTopButton.js
import React, { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setVisible(window.pageYOffset > 300);
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return visible ? (
		<Fab
			color="primary"
			size="small"
			onClick={scrollToTop}
			sx={{
				position: 'fixed',
				bottom: 30,
				right: 30,
				zIndex: 9999,
			}}
		>
			<KeyboardArrowUpIcon />
		</Fab>
	) : null;
};

export default ScrollToTopButton;
