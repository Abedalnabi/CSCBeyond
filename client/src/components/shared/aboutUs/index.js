import React from 'react';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';
import AboutUs from './section/AboutUs';

const AboutSection = () => {
	return (
		<div>
			<CustomHeader
				title="About Us"
				breadcrumbLinks={[
					{ label: 'Home', href: '/' },
					{ label: 'About Us', href: '#' },
				]}
			/>
			<AboutUs />
		</div>
	);
};

export default AboutSection;
