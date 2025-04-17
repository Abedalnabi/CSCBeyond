import React from 'react';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';
import CartSection from './section/CartSection';

const ContacUsSection = () => {
	return (
		<div>
			<CustomHeader
				title="Shopping Curt"
				breadcrumbLinks={[
					{ label: 'Home', href: '/' },
					{ label: 'Shopping Curt', href: '#' },
				]}
			/>
			<CartSection />
		</div>
	);
};

export default ContacUsSection;
