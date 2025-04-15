import React from 'react';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';
import ContacUs from './section/ContactUs';

const ContacUsSection = () => {
	return (
		<div>
			<CustomHeader
				title="Contact Us"
				breadcrumbLinks={[
					{ label: 'Home', href: '/' },
					{ label: 'Contact  Us', href: '#' },
				]}
			/>
			<ContacUs />
		</div>
	);
};

export default ContacUsSection;
