import React from 'react';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';
import InfoAndContactSection from './section/InfoAndContactSection ';

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
			<InfoAndContactSection />
		</div>
	);
};

export default ContacUsSection;
